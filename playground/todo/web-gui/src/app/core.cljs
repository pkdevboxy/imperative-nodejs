(ns app.core
  (:use-macros [enfocus.macros :only [defaction defsnippet clone-for]]
               [app.core :only [server-url]])
  (:require [enfocus.core :as ef]
            [enfocus.bind :as bind]
            [enfocus.events :as events]
            [ajax.core :as ajax]))

(enable-console-print!)

;;;;;;;;;;;
;; MODEL ;;
;;;;;;;;;;;

(def initial-state
  {:user nil
   :todos []

   :db
   {:users []
    :todos []}

   :input
   {:user nil
    :todo nil
    :search-query nil}})


(def state (atom initial-state))


(defn current-user []
  (:user @state))


(defn error-handler [error]
  (println error))


(defn url-for [action]
  (str (server-url) action))


(def default-options
  {:format :json
   :response-format :json
   :keywords? true
   :error-handler error-handler})


(defn GET [action options]
  (ajax/GET (url-for action) (merge default-options options)))


(defn POST [action options]
  (ajax/POST (url-for action) (merge default-options options)))


(defn list-users []
  (GET "list-users"
       {:handler (fn [users]
                   (swap! state update-in [:db :users] (constantly users)))}))


(defn set-user [login]
  (let [known-users (map :login (get-in @state [:db :users]))
        commit (fn []
                 (.setItem js/localStorage "user" login)
                 (swap! state update-in [:user] (constantly login)))]

    (if (some #{login} known-users)
      (commit)
      (POST "create-user"
            {:params {:login login}
             :handler commit}))))

(defn logout []
  (.removeItem js/localStorage "user")
  (reset! state initial-state))

(defn try-localstorage-login []
  (if-let [user (.getItem js/localStorage "user")]
    (swap! state update-in [:user] (constantly user))))

(defn to-kebab-case [data]
  (into {}
        (for [[key value] data]
          [(if (= key :isDone) :is-done key) value])))

(defn to-camelCase [data]
  (into {}
        (for [[key value] data]
          [(if (= key :is-done) :isDone key) value])))

(defn set-todos [todos]
  (let [todos (mapv to-kebab-case todos)]
    (swap! state update-in [:todos] (constantly todos))))


(defn list-todos [login]
  (POST "list-todos"
        {:params {:login login}
         :handler set-todos}))


(defn search-todos [login query]
  (POST "search-todos"
        {:params {:login login :query query}
         :handler set-todos}))


(defn refresh-todo-list []
  (let [query (get-in @state [:input :search-query])
        user (current-user)]
    (when user
      (if-not (empty? query)
       (search-todos user query)
       (list-todos user)))))


(defn add-todo [login text]
  (POST "add-todo"
        {:params {:login login :text text}
         :handler refresh-todo-list}))


(defn remove-todo [login id]
  (POST "delete-todo"
        {:params {:login login :id id}
         :handler refresh-todo-list}))


(defn update-todo [login id is-done]
  (POST "update-todo"
        {:params (to-camelCase {:login login :id id :isDone is-done})
         :handler refresh-todo-list}))


;;;;;;;;;;
;; VIEW ;;
;;;;;;;;;;

(defn show-if [val]
  (if val
    (ef/remove-class "hide")
      (ef/add-class "hide")))


(defsnippet content :compiled "index.html" ".main-template" [])


(defsnippet todo-item :compiled "index.html" "ul > .todo-item:first-child"
  [{:keys [text is-done id]}]
  ".clickable" (events/listen :click #(update-todo (current-user) id (not is-done)))
  ".remove-todo" (events/listen :click #(remove-todo (current-user) id))
  ".check" (show-if is-done)
  ".text" (ef/content text))


(defn render [node {:keys [user todos]}]
  (ef/at node
         ".signin" (show-if (not user))
         ".greeting" (show-if user)
         ".todos" (show-if user)
         ".menu" (show-if user)
         ".new-todo-form" (show-if user)
         ".username" (ef/content user)
         ".no-todos" (show-if (empty? todos))
         ".todo-list" (ef/content (map todo-item todos))))

;;;;;;;;;;;;;;;;
;; CONTROLLER ;;
;;;;;;;;;;;;;;;;

(defaction init []
  "#main" (ef/content (content))
  "#main" (bind/bind-view state render)
  "#username" (bind/bind-input state {:event :change
                                      :lens [:input :user]})

  "#new-todo" (bind/bind-input state {:event :change
                                      :lens [:input :todo]})

  "#search-query" (bind/bind-input state {:event :input
                                          :lens [:input :search-query]})

  "#sign-btn" (events/listen
               :click
               #(set-user (get-in @state [:input :user])))
  "#add-btn" (events/listen
              :click
              (fn []
                (add-todo (current-user) (get-in @state [:input :todo]))
                (swap! state update-in [:input :todo] (constantly nil))))
  "#logout" (events/listen :click logout))

(def state-watchers
  [(fn [{old-user :user} {new-user :user}]
     (when (not= old-user new-user)
       (refresh-todo-list)))
   ;; (fn [_ new-state]
   ;;   (println new-state))
   (fn [{{old-query :search-query} :input} {{new-query :search-query} :input}]
     (when (not= old-query new-query)
       (refresh-todo-list)))])


(defn add-watchers []
  (add-watch state :watch-change
             (fn [key a old-val new-val]
               (doseq [f state-watchers]
                 (f old-val new-val)))))


(defaction deinit []
  "*" (events/remove-listeners :click)
  "*" (events/remove-listeners :change)
  "*" (events/remove-listeners :input))


(defn main []
  (deinit)
  (init)
  (reset! state initial-state)
  (add-watchers)
  (list-users)
  (try-localstorage-login))
