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
  (r/atom ""))

(defn set-app-state
  []
  (reset! app-state (util/create-game [[1,"Chad"],[2,"Tad"]])))

(defonce dice
  (r/atom [0]))

(defonce card-to-deck
  (r/atom ""))

(defonce turn
  (r/atom 0))

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
  (swap! app-state util/switch-turn)
  (reset! turn 0))

(defn resolve-cards
  []
  (js/console.log (str (util/create-card-stack @app-state (get @app-state :player-in-turn) @dice 0) " CARDS ACTIVATE"))
  (cond
    (= (count @dice) 1) (swap! app-state util/create-card-stack (get @app-state :player-in-turn) (get @dice 0) 0)
    (= (count @dice) 2) (swap! app-state util/create-card-stack (get @app-state :player-in-turn) (get @dice 0) (get @dice 1))
    (or (not= (count @dice) 1) (not= (count @dice) 2)) (js/console.log (str "Error, Dice Atom count is not 2 or 1: " @dice)))
  (reset! turn 3))

;;Buttons for player phases

(defn roll
  []
  [:button#roll-dice {:class "btn btn-dark" :on-click roll-dice} "Roll Dice"])

(defn roll-2
  []
  [:button#roll-dice2.btn.btn-dark {:on-click roll-dice-2} "Roll 2 Dice"])

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
  [:button#switch-cards {:data-toggle "modal" :data-target "#openDeck"} "Switch Cards"])

(defn end-turn-btn
  []
  [:button#end-.btn.btn-dark {:on-click end-turn} "End Turn"])

(defn extra-roll-btn
  []
  [:button#roll-dice {:on-click extra-roll} "Roll Dice"])

(defn extra-roll-2-btn
  []
  [:button#roll-dice {:on-click extra-roll-2} "Roll Dice"])

(defn roll-something
  [])

;;End Buttons for player

(defn next-phase
  ([]
   (util/get-turn 0))
  ([old-turn]
   (if (util/win? @app-state (util/get-player-in-turn @app-state))
     "Win!"
     (cond
       (= old-turn 0)
       (do (js/console.log "Roll Dice Started")
       (if (util/landmark? @app-state (util/get-player-in-turn @app-state) "Train Station")
                                        [:<> (roll)(roll-2)]
                                        (roll)))
       ;(= old-turn 1)
       (or (= old-turn 5) (= old-turn  2)) (cond
                                                                (and (= old-turn 2) (= (count @dice) 1) (util/business-center? @app-state (util/get-player-in-turn @app-state))) [:<> (extra-roll-btn)(activate-cards)(switch-cards)]
                                                                (and (= old-turn 2) (= (count @dice) 2) (util/business-center? @app-state (util/get-player-in-turn @app-state))) [:<> (extra-roll-btn)(extra-roll-2-btn)(activate-cards)(switch-cards)]
                                                                (util/business-center? @app-state (util/get-player-in-turn @app-state)) [:<> (activate-cards)(switch-cards)]
                                                                (not (util/business-center? @app-state (util/get-player-in-turn @app-state))) (activate-cards))
       (= old-turn 3) [:<> (buy-cards)(buy-landmarks)(end-turn-btn)]))))



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
  [lm player]
  (js/console.log (str lm))
  (js/console.log (str (util/landmark? @app-state (util/get-player-in-turn @app-state) lm)))
  (js/console.log (str "Landmark: " (util/get-landmarks @app-state (util/get-player-in-turn @app-state))))
  (js/console.log (str "Landmark contains?: " (get-in @app-state [:players (get @app-state :player-in-turn) :landmarks])))
  (js/console.log (str "Landmark contains?: " (contains? (get-in @app-state [:players (get @app-state :player-in-turn) :landmarks]) lm)))
  (if (util/landmark? @app-state player lm)
    "activ"
    "dis"))

(defn landmarks
  []
  (for [p (range 0 (count (get @app-state :players)))
    [:div.landmark-container
     [:h4 (util/get-player-name @app-state (+ p 1))]
      [:div {:class (str "landmark-cards deck-card-info text-white mb-3 card " (lm? "Amusement Park" p))} "Amusement Park"]
      [:div {:class (str "landmark-cards deck-card-info text-white mb-3 card " (lm? "Radio Tower" p))} "Radio Tower"]
      [:div {:class (str "landmark-cards deck-card-info text-white mb-3 card " (lm? "Shopping Mall" p))} "Shopping Mall"]
      [:div {:class (str "landmark-cards deck-card-info text-white mb-3 card " (lm? "Train Station" p))} "Train Station"]]))

(defn mainapp []
  [:<> [:div#main-game-container
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
        [:div#p1.player.col.col-sm-6]
        [:div#p2.player.col.com-sm-6]]
      [:div.row
        [:div#p3.player.col.col-sm-6]
        [:div#p4.player.col.col-sm-6]]
      [:div#dice
        (cond
          (= (count @dice ) 1) [:p#dicetext (get @dice 0)]
          (= (count @dice ) 1) [:<> [:p#dicetext (get @dice 0)]
                                    [:p#dicetext.dice-2 (get @dice 1)]])]
     [:div.control-block
      (next-phase @turn)]]
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
              [:p.other-deck-card-info (str "Amount in Deck: " (get d 1) ", Cost: " (get (util/get-card (get d 0)) :cost))]]])]]]]
      [:div#openLandmarks.modal.bd-example-modal-lg {:tabIndex "-1" :role "dialog" :aria-labelledby "mySmallModalLabel" :aria-hidden "true"}
       [:div.modal-dialog.modal-lg
        [:div.modal-content
         [:div#player-shop-info
          [:h3.deck-player-info (str "Player " (get @app-state :player-in-turn) " Money: " (util/get-player-money @app-state (- (get @app-state :player-in-turn) 1)))]]
         [:div#deckLandmarks
          (for [l (into [] cards/machi-landmarks)]
            [:button {:class (str "deck-card-info text-white mb-3 card gold " (if (and (not (util/landmark? @app-state (- (get @app-state :player-in-turn) 1) (get l 0) )) (util/can-buy-landmark? @app-state (- (get @app-state :player-in-turn) 1) (get l 0))) "can-buy" "")) :on-click #(landmark-candidate (get l 0))}
             (str (get l 0) ", Cost: " (get-in l [1 :cost]) " Money")])]]]]]
         [:div#game-info-container
          [:div#card-activated
            [:h3 "Cards Activated"]
            (activated-cards)]
          [:div#landmarks
           [:h3 "Landmarks"]
           (landmarks)]]])
(defn ^:export init []

(tests/mtest)
(js/console.log (str (player-cards 0) "PLAYER CARDS"))
;;(js/console.log (str (mainapp) "MAIN"))
;(set-app-state)


  (reset! app-state {:card-stack []
                     :player-in-turn 1
                                       :deck {"Cheese Factory" 6
                                              "Forest" 6
                                              "Furniture Factory" 6
                                              "Fruit and Vegetable Market" 6
                                              "Wheat Field" 6
                                              "Cafe" 6
                                              "Mine" 6
                                              "Family Restaurant" 6
                                              "Convenience Store" 6
                                              "Apple Orchard" 6
                                              "Bakery" 6
                                              "Ranch" 6}
                                       :num-player 0
                     :players [{:name "Chad"
                                :position 1
                                :cards {"Wheat Field" {:amount 1
                                                       :color "b"
                                                       :coin  1
                                                       :activation [1]}
                                        "Bakery" {:amount 1
                                                  :color "g"
                                                  :coin  1
                                                  :activation [2,3]}}
                                :money 3
                                :landmarks #{}}
                               {:name "Tad"
                                :position 2
                                :cards {"Wheat Field" {:amount 1
                                                       :color "b"
                                                       :coin  1
                                                       :activation [1]}
                                        "Bakery" {:amount 1
                                                  :color "g"
                                                  :coin  1
                                                  :activation [2,3]}}
                                :money 3
                                :landmarks #{"Train Station" "Radio Tower"}}]})


(js/console.log (str "DOES LANDMARK? WORK???: " (util/add-landmark @app-state 0 "Train Station")))
(js/console.log (str "DOES LANDMARK? WORK???: " (util/landmark? (util/add-landmark @app-state 0 "Train Station") 0 "Train Station")))
(r/render-component [mainapp]
                        (. js/document (getElementById "app")))
;TODO Figure out how to loop through all 4 possible players
(r/render-component [player-cards 0]
                    (. js/document (getElementById "p1")))
(r/render-component [player-cards 1]
                    (. js/document (getElementById "p2")))
(r/render-component [player-cards 2]
                    (. js/document (getElementById "p3")))
(r/render-component [player-cards 3]
                    (. js/document (getElementById "p4"))))


(defn reload!
  []
  ""
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
