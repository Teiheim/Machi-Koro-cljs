(ns machi.core
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require [machi.definitions :as cards]
            [machi.util :as util]
            [hiccups.runtime :as hiccupsrt]
            [goog.dom :as gdom]
            [goog.events :as gevents]
            [reagent.core :as r]
            [reagent.dom :as rd]
            [machi.definitions :as cards]
            ;;[clojure.browser.repl :as repl]
            ;;[clojure.repl :as repl]
            ;;[clojure.browser.repl :as browser]
            [machi.tests :as tests]))

;(repl/connect "http://localhost:9000/repl")
(println "Hello world!")
(println cards/machi-cards)
; (defonce app-state
;   (r/atom app-state (util/create-game [[1,"Chad"],[2,"Tad"],[3,"Brad"]])))

(defonce app-state
  (r/atom {}))

(defonce winner
    (r/atom [false 5]))

(defonce test-app
  (r/atom {:options :bar}))

(defn set-app-state
  []
  (reset! app-state (util/create-game [[1,"Chad"],[2,"Tad"]])))

(defonce dice
  (r/atom [0]))

(defonce card-to-deck
  (r/atom ""))

(defonce turn
  (r/atom 0))

(defonce switch-player-cards
  (r/atom {:many.options 5 :c ""}))

(hiccups/defhtml make-test []
  [:p "bless the nightingale"])

(hiccups/defhtml main-app []
  [:div
    [:h1 "Machi Koro Online!"]
    [:div#game.container-fluid
      [:div.row
        [:div#p1.player.col.col-sm-6]
        [:div#p2.player.col.com-sm-6]]
      [:div.row
        [:div#p3.player.col.col-sm-6]
        [:div#p4.player.col.col-sm-6]]
      [:button#roll-dice {:on-click "roll-dice"} "Roll Dice"]
      [:button#resolve-cards {:on-click "resolve-cards"} "Resolve Cards"]
      [:button#open-deck {:on-click "open-deck"} "Open-Deck"]
      [:button#end-turn {:on-click "end-turn"} "End Turn"]]])

;(use 'clojure.test)
; (hiccups/defhtml make-card
;   [card card-name]
;   [:div {:class (str "class " (get card :color))}
;    [:p.card-name card-name]
;    [:p.amount (get card :amount)]
;    [:p.worth (apply str (get card :activation))]
;    [:p.coin (get card :coin)]])

(defn roll-dice
  []
  (js/console.log (rand-nth [1 2 3 4 5 6]))
  (reset! dice [(rand-nth [1 2 3 4 5 6])])
  (reset! turn 2))

(defn roll-dice-2
  []
  (reset! dice [(rand-nth [1 2 3 4 5 6]) (rand-nth [1 2 3 4 5 6])])
  (reset! turn 2))

(defn extra-roll
  []
  (js/console.log (rand-nth [1 2 3 4 5 6]))
  (reset! dice [(rand-nth [1 2 3 4 5 6])])
  (reset! turn 5))

(defn extra-roll-2
  []
  (reset! dice [(rand-nth [1 2 3 4 5 6]) (rand-nth [1 2 3 4 5 6])])
  (reset! turn 5))

(defn end-turn
  []
  (js/console.log (str (util/switch-turn @app-state) " End-Turn"))
  (if (= (count (get-in @app-state [:players (- (util/get-player-in-turn @app-state) 1) :landmarks])) 4)
    (do
      (reset! winner [true (util/get-player-in-turn @app-state)])
      (reset! turn 4))
    (do
      (swap! app-state util/switch-turn)
      (reset! turn 0))))

(defn resolve-cards
  []
  (js/console.log (str (util/create-card-stack @app-state (get @app-state :player-in-turn) @dice 0) " CARDS ACTIVATE"))
  (cond
    (= (count @dice) 1) (swap! app-state util/create-card-stack (util/get-player-in-turn @app-state) (get @dice 0) 0)
    (= (count @dice) 2) (swap! app-state util/create-card-stack (util/get-player-in-turn @app-state) (get @dice 0) (get @dice 1))
    (or (not= (count @dice) 1) (not= (count @dice) 2)) (js/console.log (str "Error, Dice Atom count is not 2 or 1: " @dice)))
  (reset! turn 3))

;;Buttons for player phases

(defn roll
  []
  [:button#roll-dice {:class "btn btn-dark" :on-click roll-dice} "Roll Dice"])

(defn roll-2
  []
  [:button#roll-dice2.btn.btn-dark {:on-click roll-dice-2} "Roll 2 Die"])

(defn activate-cards
  []
  [:button#resolve-cards.btn.btn-dark {:on-click resolve-cards} "Resolve Cards"])

(defn buy-cards
  []
  [:button#open-deck.btn.btn-dark {:data-toggle "modal" :data-target "#openDeck"} "Open Deck"])

(defn buy-landmarks
  []
  [:button#open-landmarks.btn.btn-dark {:data-toggle "modal" :data-target "#openLandmarks"} "Open Landmarks"])

(defn switch-cards
  []
  [:button#switch-cards.btn.btn-dark {:data-toggle "modal" :data-target "#openSwitchCards"} "Switch Cards"])

(defn end-turn-btn
  []
  [:button#end-.btn.btn-dark {:on-click end-turn} "End Turn"])

(defn extra-roll-btn
  []
  [:button#extra-roll-dice.btn.btn-dark {:on-click extra-roll} "Roll Dice"])

(defn extra-roll-2-btn
  []
  [:button#extra-2-roll-dice.btn.btn-dark {:on-click extra-roll-2} "Roll 2 Die"])

(defn roll-something
  [])

;;End Buttons for player

(defn next-phase
  ([]
   (util/get-turn 0))
  ([old-turn]
   (js/console.log (str "Business Center?: " (util/business-center? @app-state (util/get-player-in-turn @app-state))))
   (js/console.log (str "Business Center Test?: " (util/get-player-card @app-state (- (util/get-player-in-turn @app-state) 1) "Business Center") (util/get-player-in-turn @app-state)))
   (if (util/win? @app-state (util/get-player-in-turn @app-state))
     "Win!"
     (cond
       (= old-turn 0)
       (do (js/console.log "Roll Dice Started")
       (if (util/landmark? @app-state (util/get-player-in-turn @app-state) "Train Station")
                                        [:<> (roll)(roll-2)]
                                        (roll)))
       (= old-turn 1) (activate-cards)
       (or (= old-turn 5) (= old-turn  2)) (cond
                                                                (and (= old-turn 2) (= (count @dice) 1) (util/business-center? @app-state (util/get-player-in-turn @app-state))) [:<> (extra-roll-btn)(activate-cards)(switch-cards)]
                                                                (and (= old-turn 2) (= (count @dice) 2) (util/business-center? @app-state (util/get-player-in-turn @app-state))) [:<> (extra-roll-btn)(extra-roll-2-btn)(activate-cards)(switch-cards)]
                                                                (util/business-center? @app-state (util/get-player-in-turn @app-state)) [:<> (activate-cards)(switch-cards)]
                                                                (not (util/business-center? @app-state (util/get-player-in-turn @app-state))) (activate-cards))
       (= old-turn 3) [:<> (buy-cards)(buy-landmarks)(end-turn-btn)]
       (= old-turn 4) ""))))



(defn card-candidate
  [card-name]
  (js/console.log card-name)
  (if (util/can-buy? @app-state (- (get @app-state :player-in-turn) 1) card-name) (reset! app-state (-> @app-state
                                    (util/remove-add-cash-from-player (- (get @app-state :player-in-turn) 1) (- (get (util/get-card card-name) :cost)))
                                    (util/remove-card-from-deck card-name)
                                    (util/card-to-player (- (get @app-state :player-in-turn) 1) card-name)))
    ""))

(defn landmark-candidate
  [lm-name]
  (js/console.log lm-name)
  (js/console.log (str (update-in @app-state [:players (- (get @app-state :player-in-turn) 1) :landmarks] conj lm-name)))
  (js/console.log (util/can-buy-landmark? @app-state (- (get @app-state :player-in-turn) 1) lm-name))
  (if (util/can-buy-landmark? @app-state (- (get @app-state :player-in-turn) 1) lm-name) (reset! app-state (-> @app-state
                                    (util/remove-add-cash-from-player (- (get @app-state :player-in-turn) 1) (- (get-in cards/machi-landmarks [lm-name :cost])))
                                    (util/add-landmark (- (get @app-state :player-in-turn) 1) lm-name)))
    "")
  (js/console.log (str @app-state " THIS IS THE LANDMARKS")))

(defn card-candidate?
  [card-name]
  (js/console.log card-name)
  (if (= card-name @card-to-deck)
    "deck-card-open"
    ""))


(defn make-card
 [card card-name]
 [:div {:class (str "text-white mb-3 card " (get card :color))}
    [:div {:class "card-header"} card-name]
    [:div {:class "card-body"}
      [:p {:class "card-text"} (str "Amount: " (get card :amount))]
      [:p {:class "card-text"} (str "Activation: " (clojure.string/join "," (get card :activation)))]
      [:p {:class "card-text"} (str "Earn: " (get card :coin))]]])

(defn player-cards
  [pNum]
  (if (> pNum (count (get @app-state :players)))
    ""
    [:div (reduce-kv (fn [cards cname cinfo]
                       (into [] (conj cards (make-card cinfo cname)))) [:<>] (get-in @app-state [:players pNum :cards]))]))

(defn activated-cards
  []
  (for [c (util/get-card-stack @app-state)]
  [:div#activated-cards-container {:class (str "deck-card-info text-white mb-3 card " (get-in c [1 1 :color]) " ")}
   [:div#activated-cards.card-header (str (util/get-player-name @app-state (get c 0))) "'s " (get-in c [1 0]) ]]))

(defn lm?
 [lm lm-name]
 (if (contains? lm lm-name)
   "activ"
   "dis"))

[:h3 "option list"]
[:div.form-group
[:label "pick an option"]
[:select.form-control {:field :list :id :many.options}
 [:option {:key :foo} "foo"]
 [:option {:key :bar} "bar"]
 [:option {:key :baz} "baz"]]]

 (defn contact-form [first-name last-name email-address message]
   (let [s (r/atom {:first-name first-name
                          :last-name  last-name
                          :email email-address
                          :message message})]
     (fn []
       [:form {:on-submit (fn [e]
                            (.preventDefault e)
                            ;; do something with the state @s
                            )}
         [:input {:type :text :name :first-name
                  :value (str (get @s :first-name))
                  :on-change (fn [e]
                    ;(js/console.log (str "Weird Atom for this test: " @s))
                    ;(js/console.log (str "Weird target value thing: " (-> e .-target .-value)))
                               (reset! s (assoc @s :first-name (-> e .-target .-value))))}]
         [:input {:type :text :name :last-name
                  :value (get @s :last-name)
                  :on-change (fn [e]
                               (swap! s :last-name (-> e .-target .-value)))}]
         [:input {:type :email :name :email
                  :value (get @s :email)
                  :on-change (fn [e]
                               (swap! s :email (-> e .-target .-value)))}]
         [:textarea {:name :message
                     :on-change (fn [e]
                                  (swap! s :message (-> e .-target .-value)))}
           (get :message @s)]])))

(defn opp-cards
  [cards]
  (js/console.log (str "The opp-cards function has been called: " cards))
  (for [pc cards]
     [:option {:value (get pc 0)} (get pc 0) ]))

(defn confirm-switch-cards
  [player op-card-name pl-card-name]
  (reset! app-state (-> @app-state
                        (util/remove-card-from-player player op-card-name)
                        (util/card-to-player (- (util/get-player-in-turn @app-state) 1) op-card-name)
                        (util/remove-card-from-player (- (util/get-player-in-turn @app-state) 1) pl-card-name)
                        (util/card-to-player player pl-card-name)))
  (reset! turn 1))
  ;(. js/$ "#openSwitchCards" -modal "hide")


(defn switch-cards-p
  []
  (let [p (r/atom {:op-deck 5
                   :op-cards {}
                   :op-card ""
                   :pl-card ""})]
    ;;get players
    (fn []
      (if (= @turn 1)
      [:div#completed-switch
      [:h1.cs "Cards Switched! Please Close This Window"]]

      [:div.switch-cards-inner
      [:div.form-group
      [:label "Pick a player"]
      [:select.form-control {:default-value "None Selected" :on-change (fn [e]
        (reset! p (assoc @p :op-deck (-> e .-target .-value) :op-card ""))
        (if (= 5 (-> e .-target .-value))
        (reset! p (assoc @p :op-cards {}))
          (reset! p (assoc @p :op-cards (get-in @app-state [:players (int (-> e .-target .-value)) :cards]))))
          (println (str "Current Player Card State: " @p "Get Player Cards: " (get-in @app-state [:players (-> e .-target .-value) :cards]))))}
          [:option {:value 5} "None selected"]
          (for [pla (range 0 (count (get @app-state :players)))]
          (if (not= (- (util/get-player-in-turn @app-state) 1) pla)
          [:option {:value pla} (util/get-player-name @app-state pla)]))]]
          [:div.form-group
          [:label "Pick an enemy card"]
          [:select.form-control {:default-value "None Selected" :on-change (fn [e]
            (reset! p (assoc @p :op-card (-> e .-target .-value))))}
            [:option {:value ""} "None selected"]
            (opp-cards (get @p :op-cards))]]

            [:div.form-group
            [:label "Pick one of your cards"]
            [:select.form-control {:default-value "None Selected" :on-change (fn [e]
              (reset! p (assoc @p :pl-card (-> e .-target .-value))))}
              (println (str "YC Value: " (get-in @app-state [:players (- (util/get-player-in-turn @app-state) 1) :cards])))
              [:option {:value ""} "None selected"]
              (for [yc (get-in @app-state [:players (- (util/get-player-in-turn @app-state) 1) :cards])]
              [:option {:value (get yc 0)} (get yc 0)])]]
              [:button#switch-cards-confirm.btn.btn-dark {:on-click #(confirm-switch-cards (int (get @p :op-deck)) (get @p :op-card) (get @p :pl-card))} "Switch Cards With Player"]]))))

(defn player-deck
  []
    [:div.form-group
    [:label "Pick a player"]
    [:select.form-control {:field :list :id :many.options :on-change #(reset! switch-player-cards (assoc @switch-player-cards 0 00 1 ""))}
     [:option {:key "p5"} ""]
     (for [p (range 0 (count (get @app-state :players)))]
       (if (not= (- (util/get-player-in-turn @app-state) 1) p)
         [:option {:key (str "p" p)} (util/get-player-name @app-state p)]))]])

(defn player-deck-cards
  []
  [:div.form-group
  [:label (str "Pick a Card")]
  [:select.form-control {:field :list :id :many.options :on-change #(reset! switch-player-cards (assoc @switch-player-cards 1 00))}
  (for [p (range 0 (count (get @app-state :players)))]
    [:option {:key (str p)} (util/get-player-name @app-state p)])]])

(defn player-decks
  []
  [:div#openLandmarks.modal.bd-example-modal-lg {:tabIndex "-1" :role "dialog" :aria-labelledby "mySmallModalLabel" :aria-hidden "true"}
   [:div.modal-dialog.modal-lg
    [:div.modal-content
     [:div#player-shop-info
      [:h3.deck-player-info (str "Player " (get @app-state :player-in-turn) " Money: " (util/get-player-money @app-state (- (get @app-state :player-in-turn) 1)))]]
     [:div.player-deck

      ]]]])

(defn landmarks
 []
 (for [p (util/get-players @app-state)]
   [:div.landmark-container
    [:h4 (p :name)]
     [:div {:class (str "landmark-cards deck-card-info text-white mb-3 card " (lm? (get p :landmarks) "Amusement Park"))} "Amusement Park"]
     [:div {:class (str "landmark-cards deck-card-info text-white mb-3 card " (lm? (get p :landmarks) "Radio Tower") )} "Radio Tower"]
     [:div {:class (str "landmark-cards deck-card-info text-white mb-3 card " (lm? (get p :landmarks) "Shopping Mall") )} "Shopping Mall"]
     [:div {:class (str "landmark-cards deck-card-info text-white mb-3 card " (lm? (get p :landmarks) "Train Station") )} "Train Station"]]))

(defn switch-cards-container
  []
  [:div#openSwitchCards {:class (str "modal bd-example-modal-lg ")  :tabIndex "-1" :role "dialog" :aria-labelledby "mySmallModalLabel" (if (= @turn 1) (keyword "aria-hidden") (keyword "aria-hidden")) "true"}
   [:div.modal-dialog.modal-lg
    [:div#switchCardsTarget.modal-content
     (switch-cards-p)]]])
(defonce start-app
  (r/atom true))
     (defn setup-game
       [players]
       ;(reduce (fn [new orig] (if (not (= "" players)) (conj new orig))) [] players)
       ;(js/console.log (str "Game PLayers: " (remove "" players)))
       (js/console.log (str "Game: " (util/create-game (take 3 players))))
       (reset! app-state (util/create-game (take 3 players)))
       (reset! start-app false)
       (r/force-update-all))


     (defn start
       [s]
       (let [create (r/atom [[0 ""] [1 ""] [2 ""] [3 ""]])]

       (fn [s]
         (cond
        (= @app-state {}) [:div#start-game
         [:div#game-info
         [:div#game-form
          [:h2 "Machi Koro"]
         [:div.row
          [:div.col [:label "Player 1"][:input {:type :text :value (get-in @create [0 1]) :on-change (fn [e]
                                                                                           (reset! create (assoc-in @create [0 1] (-> e .-target .-value))))}]]
         [:div.col [:label "Player 2"][:input {:type :text :value (get-in @create [1 1]) :on-change (fn [e]
                                                                                           (reset! create (assoc-in @create [1 1] (-> e .-target .-value))))}]]
         [:div.col [:label "Player 3"][:input {:type :text :value (get-in @create [2 1]) :on-change (fn [e]
                                                                                           (reset! create (assoc-in @create [2 1] (-> e .-target .-value))))}]]
         [:div.col [:label "Player 4"][:input {:type :text :value (get-in @create [3 1]) :on-change (fn [e]
                                                                                           (reset! create (assoc-in @create [3 1] (-> e .-target .-value))))}]]]
          [:button.btn.btn-dark.start-game {:on-click #(setup-game @create)} "Start Game"]]]]
           (not (= @app-state {})) nil))))

     (defn  mainapp []
       [:<>
        [:div#start]

        (if (get @winner 0)
         [:div.alert.alert-primary {:role "alert"}   [:h2 (str (util/get-player-name @app-state (get @winner 1)) " has won the game!")]]
         )


        [:div#main-game-container


         [:h1 "Machi Koro Online!"]
         [:h3#pt (str "Player's Turn: " (get @app-state :player-in-turn))]
         [:div.row.player-money
          [:div.col
           [:p (str (util/get-player-name @app-state 1) "'s Money: " (util/get-player-money @app-state 0))]]
          [:div.col
           [:p (str (util/get-player-name @app-state 2) "'s Money: " (util/get-player-money @app-state 1))]]
          [:div.col
           [:p (str (util/get-player-name @app-state 3) "'s Money: " (util/get-player-money @app-state 2))]]
          [:div.col
           [:p (str (util/get-player-name @app-state 4) "'s Money: " (util/get-player-money @app-state 3))]]]
         [:div#game.container-fluid
           [:div.row
            ;[:div#p1.player.col.col-sm-6 (player-cards 0)]
             [:div#p1.player.col.col-sm-6
              (player-cards 0)]
             [:div#p2.player.col.com-sm-6
              (player-cards 1)]]
           [:div.row
             [:div#p3.player.col.col-sm-6
              (player-cards 2)]
             [:div#p4.player.col.col-sm-6
              (player-cards 3)]]

             (cond
               (= (count @dice ) 1) [:div#dice [:p#dicetext (get @dice 0)]]
               (= (count @dice ) 2) [:div#dbldice-cont [:div.dbldice [:p#dicetext (get @dice 0)]]
                                    [:div.dbldice [:p#dicetext.dice-2 (get @dice 1)]]])
          [:div.control-block
           (next-phase @turn)]]]
           [:div#openDeck.modal.bd-example-modal-lg {:tabIndex "-1" :role "dialog" :aria-labelledby "mySmallModalLabel" :aria-hidden "true"}
            [:div.modal-dialog.modal-lg
             [:div.modal-content
              [:div#player-shop-info
               [:h3.deck-player-info (str "Player " (get @app-state :player-in-turn) " Money: " (util/get-player-money @app-state (- (get @app-state :player-in-turn) 1)))]]
              [:div#deck
               (for [d (into [] (get @app-state :deck))]
                 [:button {:class (str "deck-card-info text-white mb-3 card " (get (util/get-card (get d 0)) :color) " " (if (util/can-buy? @app-state (- (get @app-state :player-in-turn) 1) (get d 0)) "can-buy" "")) :on-click #(card-candidate (get d 0))}
                  [:div.card-header
                   [:p.deck-card-name (get d 0)]
                   [:p.other-deck-card-info (str "Amount in Deck: " (get d 1) ", Cost: " (get (util/get-card (get d 0)) :cost) ", Activation: " (get (util/get-card (get d 0)) :activation))]]])]]]]
           [:div#openLandmarks.modal.bd-example-modal-lg {:tabIndex "-1" :role "dialog" :aria-labelledby "mySmallModalLabel" :aria-hidden "true"}
            [:div.modal-dialog.modal-lg
             [:div.modal-content
              [:div#player-shop-info
               [:h3.deck-player-info (str "Player " (get @app-state :player-in-turn) " Money: " (util/get-player-money @app-state (- (get @app-state :player-in-turn) 1)))]]
              [:div#deckLandmarks
               (for [l (into [] cards/machi-landmarks)]
                 [:button {:class (str "deck-card-info text-white mb-3 card gold " (if (and (not (util/landmark? @app-state (- (get @app-state :player-in-turn) 1) (get l 0) )) (util/can-buy-landmark? @app-state (- (get @app-state :player-in-turn) 1) (get l 0))) "can-buy" "")) :on-click #(landmark-candidate (get l 0))}
                  (str (get l 0) ", Cost: " (get-in l [1 :cost]) " Money")])]]]]
                  (switch-cards-container)
              [:div#game-info-container
               [:div#card-activated
                 [:h3 "Cards Activated"]
                 (activated-cards)]
               [:div#landmarks
                [:h3 "Landmarks"]
                (landmarks)]]])



(defn game
  []
  (fn []
    (if (= @app-state {})
            (start true)
            (mainapp))))


(defn ^:export init []
(js/console.log (str "Prove Him Wrong: " (util/create-game ["a" "b" "c" "d"])))
(tests/mtest)
(js/console.log (str (player-cards 0) "PLAYER CARDS"))
;;(js/console.log (str (mainapp) "MAIN"))
;(set-app-state)
;(reset! turn 5)
(js/console.log (str "DOES LANDMARK? WORK???: " (util/add-landmark @app-state 0 "Train Station")))
(js/console.log (str "DOES LANDMARK? WORK???: " (util/landmark? (util/add-landmark @app-state 0 "Train Station") 0 "Train Station")))
;(run-game)
(r/render-component [mainapp]
                    (. js/document (getElementById "app")))
                    (r/render-component [start @start-app]
                                        (. js/document (getElementById "start"))))


(defn reload!
  []
  ;(reset! @app-state (util/create-game ["a" "b" "c" ""]))
  ;(init)
  ;(reset! app-state (machi.util/create-game [[1,"Chad"],[2,"Tad"]]))
  )

(hiccups/defhtml my-template []
  [:div
    [:a {:href "https://github.com/weavejester/hiccup"}
      "Hiccup"]])




;HTML FORMAT - CHECK HICCUP
;<div class="card blue"><div class="card-inner"><p class="card-name">Wheat-Field</p><p class="worth">1</p><p class="coin">1</p></div></div>

(defn hic []
  (js/window.alert (my-template)))
;(run-tests 'machi.util)

;clj --main cljs.main --compile machi.core --repl
;(require 'machi.core)
;(require 'machi.definitions)
;(require 'machi.util)
;(machi.util/create-game [[1,"Chad"],[2,"Tad"]])
;(:require 'machi.core :reload-all)
