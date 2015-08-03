(ns app.core
  (:use-macros [enfocus.macros :only [defaction defsnippet clone-for]])
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
    :todo nil}})


(def state (atom initial-state))


(defn current-user []
  (:user @state))


(defn error-handler [error]
  (println error))


(defn url-for [action]
  (str "http://unit-326:8000/" action))


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
        commit #(swap! state update-in [:user] (constantly login))]

    (if (some #{login} known-users)
      (commit)
      (POST "create-user"
            {:params {:login login}
             :handler commit}))))

(defn to-kebab-case [data]
  (into {}
        (for [[key value] data]
          [(if (= key :isDone) :is-done key) value])))

(defn to-camelCase [data]
  (into {}
        (for [[key value] data]
          [(if (= key :is-done) :isDone key) value])))

(defn list-todos [login]
  (POST "list-todos"
        {:params {:login login}
         :handler (fn [todos]
                    (let [todos (mapv to-kebab-case todos)]
                      (swap! state update-in [:todos] (constantly todos))))}))


(defn add-todo [login text]
  (POST "add-todo"
        {:params {:login login :text text}
         :handler #(list-todos login)}))


(defn remove-todo [login id]
  (POST "delete-todo"
        {:params {:login login :id id}
         :handler #(list-todos login)}))


(defn update-todo [login id is-done]
  (POST "update-todo"
        {:params (to-camelCase {:login login :id id :isDone is-done})
         :handler #(list-todos login)}))


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

  "#sign-btn" (events/listen
               :click
               #(set-user (get-in @state [:input :user])))
  "#add-btn" (events/listen
              :click
              (fn []
                (add-todo (current-user) (get-in @state [:input :todo]))
                (swap! state update-in [:input :todo] (constantly nil)))))


(def state-watchers
  [(fn [{old-user :user} {new-user :user}]
     (when (not= old-user new-user)
       (list-todos new-user)))
   (fn [_ new-state]
     (println new-state))])


(defn add-watchers []
  (add-watch state :watch-change
             (fn [key a old-val new-val]
               (doseq [f state-watchers]
                 (f old-val new-val)))))


(defaction deinit []
  "*" (events/remove-listeners :click))


(defn main []
  (deinit)
  (init)
  (reset! state initial-state)
  (add-watchers)
  (list-users))

(main)
