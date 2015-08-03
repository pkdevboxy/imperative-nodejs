(ns app.core
  (:use-macros [enfocus.macros :only [defaction defsnippet clone-for]])
  (:require [enfocus.core :as ef]
            [enfocus.bind :as bind]
            [enfocus.events :as events]
            [ajax.core :as ajax]))

(enable-console-print!)

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

(add-watch state :watch-change (fn [key a old-val new-val]
                                 (println new-val)))

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

(defn list-todos [login]
  (POST "list-todos"
        {:params {:login login}
         :handler (fn [todos]
                    (swap! state update-in [:todos] (constantly todos)))}))

(defn add-todo [text]
  (swap! state update-in [:todos] #(conj % {:text text :is-done false})))

(defn toggle-todo [text]
  (let [pos (first (keep-indexed #(when (= text (:text %2)) %1) (:todos @state)))]
    (swap! state update-in [:todos pos :is-done] not)))

(defn remove-todo [text]
  (let [drop-it (fn [todos] (vec (filter #(not= (:text %) text) todos)))]
    (swap! state update-in [:todos] drop-it)))


(defn show-if [val]
  (if val
    (ef/remove-class "hide")
      (ef/add-class "hide")))


(defsnippet content :compiled "index.html" ".main-template" [])

(defsnippet todo-item :compiled "index.html" "ul > .todo-item:first-child"
  [{:keys [text is-done]}]
  ".clickable" (events/listen :click #(toggle-todo text))
  ".remove-todo" (events/listen :click #(remove-todo text))
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
                (add-todo (get-in @state [:input :todo]))
                (swap! state update-in [:input :todo] (constantly nil)))))

(defn add-watchers []
  (add-watch state :watch-change
             (fn [key a old-val {:keys [user]}]
               (when (not= (:user old-val) user)
                 (list-todos user)))))


(defaction deinit []
  "*" (events/remove-listeners :click))


(defn main []
  (deinit)
  (init)
  (reset! state initial-state)
  (add-watchers)
  (list-users))

(main)
