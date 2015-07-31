(ns app.core
  (:use-macros [enfocus.macros :only [defaction defsnippet clone-for]])
  (:require [enfocus.core :as ef]
            [enfocus.bind :as bind]
            [enfocus.events :as events]))

(enable-console-print!)

(def initial-state
  {:user nil
   :todos []

   :input
   {:user nil
    :todo nil}})

(def state (atom initial-state))

(defn set-user [name]
  (swap! state update-in [:user] (constantly name)))

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


(defaction deinit []
  "*" (events/remove-listeners :click))


(defn main []
  (deinit)
  (init)
  (reset! state initial-state))

(main)
