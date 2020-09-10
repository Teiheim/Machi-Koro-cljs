(ns machi.util
  (:require [machi.definitions :as cards]))


;Create Game ----------------------------------------------

; Create Deck with cards and quantities
(defn create-deck
  []
    {"Wheat Field" 6 "Ranch" 6 "Forest" 6 "Mine" 6 "Apple Orchard" 6 "Bakery" 6 "Convenience Store" 6 "Cheese Factory" 6 "Furniture Factory" 6 "Fruit and Vegetable Market" 6 "Cafe" 6 "Family Restaurant" 6 "Stadium" 4 "TV Station" 4 "Business Center" 4})

; Create empty state
(defn create-game
  [players]
  (if (< (count players) 2)
  (println "Not Enough Players")
  (reduce
    (fn [game p]
      (if (=  (get p 1) "")
        nil
       (let [pl (conj (get game :players) {:name (get p 1)
                                         :position (get p 0)
                                         :cards {"Wheat Field" {
                                                                :amount 1
                                                                :coin 1
                                                                :color "b"
                                                                :activation [1]}
                                                 "Bakery" {
                                                           :amount 1
                                                           :coin 1
                                                           :color "g"
                                                           :activation [2,3]}}
                                         :money 3
                                         :landmarks #{}})]
        (assoc game :players pl))))
    {:card-stack [] :player-in-turn 1 :deck (create-deck) :players []} players )))

;Get different specific information from state --------------------------------------

(defn get-player-in-turn
  [game]
  (get game :player-in-turn))

(defn get-landmarks
  [game player]
  (get-in game [:players player :landmarks]))

(defn landmark?
  [game player landmark]
  (contains? (get-landmarks game player) landmark))

(defn win?
  [game player]
  (and (landmark? game player "Amusement Park") (landmark? game player "Train Station") (landmark? game player "Shopping Mall") (landmark? game player "Radio Tower")))

(defn get-player-name
  [game player]
  (if (<= player (count (get game :players)))
    (get-in game [:players (- player 1) :name])
    "None"))

(defn get-players
  [game]
  (get game :players))

(defn get-turn
  [turn]
  (get cards/turns turn))

(defn get-player-money
  [game player]
  (if (< player (count (get game :players)))
    (get-in game [:players player :money])
    "None"))

(defn get-player-card
  [game player card-name]
  (get-in game [:players player :cards card-name]))

(defn business-center?
  [game player]
  (if (nil? (get-player-card game (- player 1) "Business Center"))
    false
    true))

(defn get-card
  [card-name]
  (get cards/machi-cards card-name))

(defn get-money
  [game player]
  (get-in  game [:players 0]))

(defn get-cards-from-game
  [game]
  (println (str "cat game: " game))
  (reduce
   (fn [stack pcards] (into (concat stack (reduce
                                           (fn [card-stack card]

                                             (do
                                               (println (str card-stack))
                                               (println  card)
                                               (println (str "Cat test amount: " (get-in card [1 :amount])))
                                               (println (str "Cat test repeat: " (repeat (get-in card [1 :amount]) [(get pcards :position),card])))
                                               (println (str "Cat test card stack make: " (into [] (concat card-stack (into [] (repeat (get-in card [1 :amount]) [(get pcards :position),card])) ))))
                                               (into [] (concat card-stack (into [] (repeat (get-in card [1 :amount]) [(get pcards :position),card])) )))) [] (get pcards :cards)))) ) [] (get game :players)))
(defn get-card-stack
  [game]
  (get game :card-stack))

(defn purple?
  [game player purple]
  (if (= "p" (get (get-card purple) :color)) (contains? (get-in game [:players player :cards]) purple) false))


(defn get-players-with-position
  [game]
  (reduce (fn [stack player] (conj stack ((get player :position),player))) [] game))

(defn activate?
  [card dice]
  (let [activate (get-in card [1 1 :activation])
        a (println (str "Dice: " dice))
        g (println (str "Card: " card))
        b (println (str "Card?: " (< (count activate) 2)))
        c (println (str "Card is 1?: " (= (get activate 0) dice)))
        d (println (str "Activation: " activate 0))
        e (println (str "ATV as string: " card))]
    (if (< (count activate) 2)
      (if (= (get activate 0) dice)
          true
          false)
      (if (or (= (get activate 0) dice) (= (get activate 1) dice))
        true
        false))))

(defn bread-card?
  [card-name]
  (or (= "Bakery" card-name) (= "Convenience Store" card-name)))

(defn can-buy?
  [game player card-name]
  (if (and (not (purple? game player card-name)) (>= (get-in game [:players player :money]) (get (get-card card-name) :cost)))
    true
    false))

(defn can-buy-landmark?
  [game player card-name]
  (if (and (not (landmark? game player card-name)) (>= (get-in game [:players player :money]) (get-in cards/machi-landmarks [card-name :cost])))
    true
    false))
;Return new altered state from the initial state -------------

(defn remove-add-cash-from-player
  [game player amt]
  (do
   (println (str "Remove add Cash from: " player))
  (update-in game [:players player :money] + amt)))

(defn card-to-player
  [game player card-name]
  (if (contains? (get-in game [:players player :cards]) card-name)
    (update-in game [:players player :cards card-name :amount] inc)
    (as-> (get-card card-name) card
      (assoc-in game [:players player :cards card-name] {:amount 1
                                                         :color (get card :color)
                                                         :coin (get card :coin)
                                                         :activation (get card :activation)}))))



(defn remove-card-from-deck
  [game card-name]
  (update-in game [:deck card-name] dec))

(defn remove-card-from-player
  [game player card-name]
  (if (= 1 (get-in game [:players player :cards card-name :amount]))
    (update-in game [:players player :cards] dissoc card-name)
    (update-in game [:players player :cards card-name :amount] dec)))

(defn add-to-card-stack
  [game card player]
  (println card)
  (println (str "Card Stack: " card " game: !!! " game))
  (update game :card-stack conj [player card]))

; (defn resolve-card-stack
;   ([stack src dst amt]
;    for )
;   ([stack dst amt]))

;(defn activation?)

(defn create-card-stack
  [game player d1 d2]
  (let [mall (contains? (get-in game [player :landmarks]) "Shopping Mall")
        pit (- (get game :player-in-turn) 1)
        cards (get-cards-from-game game)
        q (println (str "Player Create Card Stack: " player))
        w (println (str "All cards during create card stack: " cards))]
    (reduce (fn [game card]
      (let [col (get-in card [1 1 :color])
            card-name (key (get card 1))
            n (println (str "Card Color in CCS: " card))
            o (println (str "Color: " col))
            p (println (str "PiT Card: " (= (- (get card 0) 1) (get game :player-in-turn))))
            w (println (str "Player: " player))
            ;e (println (str "Blue Card is Blue?: " (= col "b")))
            q (println (str "Green Card Activate?: " (activate? card (+ d1 d2))))
            money (get-in card [1 1 :coin])]
      (cond
        (and (= col "r") (activate? card (+ d1 d2)) (not= pit (get card 0))) (as-> game g
                          (add-to-card-stack g (get card 1) (get card 0))
                          (remove-add-cash-from-player g pit (if mall
                                                                                      (- (+ money 1))
                                                                                      (- money)))
                          (remove-add-cash-from-player g (get card 0) (if mall
                                                                                      (+ money 1)
                                                                                      money)))
        ;Fix the one below
        (and (= col "b") (activate? card (+ d1 d2))) (-> game
                                                      (add-to-card-stack (get card 1) (get card 0))
                                                      (remove-add-cash-from-player (get card 0) (if (and mall (bread-card? (get-in card [1 0])))
                                                                                                                                                  (+ money 1)
                                                                                                                                                  money)))
        (and (= col "g") (= (get card 0) player) (activate? card (+ d1 d2))) (-> game
                                                                              (add-to-card-stack (get card 1) (get card 0))
                                                                              (remove-add-cash-from-player pit money))
        (and (= col "p") (= player (get game :player-in-turn)) (activate? card (+ d1 d2))) (let [pn  (reduce (fn [stack p] (conj stack (get p :position))) [] (get game :players))]
                                                                  (as-> game ga
                                                                        (add-to-card-stack ga (get card 1) (get card 0))
                                                                        (reduce (fn [g p] (remove-add-cash-from-player g p money)) ga pn)
                                                                        (remove-add-cash-from-player game (- pit 1) (* (- (count (get ga :players)) 1) money))))
        :else game))) game cards)))

(defn add-landmark
  [game player landmark]
  (update-in game [:players player :landmarks] conj landmark))


(defn switch-turn
  [game]
  (if (< (get-player-in-turn game) (count (get game :players)))
    (update game :player-in-turn + 1)
    (update game :player-in-turn - (- (count (get game :players)) 1))))
;(defn end-game?)
