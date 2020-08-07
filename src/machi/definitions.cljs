(ns machi.definitions)

(def machi-cards
  {
    "Wheat Field"
    {:name "Wheat Field"
    :type "Primary Industry"
    :cost 1
    :coin  1
    :activation [1]
    :color "b"}

    "Ranch"
    {:name "Ranch"
    :type "Primary Industry"
    :cost 1
    :coin 1
    :activation [2]
    :color "b"}

    "Forest"
    {:name "Wheat Field"
    :type "Primary Industry"
    :cost 3
    :coin 1
    :activation [5]
    :color "b"}

    "Mine"
    {:name "Mine"
    :type "Primary Industry"
    :cost 6
    :coin 5
    :activation [9]
    :color "b"}

    "Apple Orchard"
    {:name "Apple Orchard"
    :type "Primary Industry"
    :cost 3
    :coin 3
    :activation [10]
    :color "b"}

    "Bakery"
    {:name "Bakery"
    :type "Secondary Industry"
    :cost 1
    :coin 1
    :activation [2,3]
    :color "g"}

    "Convenience Store"
    {:name "Convenience Store"
    :type "Secondary Industry"
    :cost 2
    :coin 3
    :activation [4]
    :color "g"}

    "Cheese Factory"
    {:name "Cheese Factory"
    :type "Secondary Industry"
    :cost 5
    ;;For Each ranch(???) that you own get 3 coins from the bank on your turn only.
    :coin 3
    :activation [7]
    :color "g"}

    "Furniture Factory"
    {:name "Furniture Factory"
    :type "Secondary Industry"
    :cost 2
    ;;For each Forest and Mine, get 3 coins that you own from the bank
    :coin 3
    :activation [11,12]
    :color "g"}

    "Fruit and Vegetable Market"
    {:name "Fruit and Vegetable Market"
    :type "Secondary Industry"
    :cost 2
    ;;Get 2 coins from the bank for each Wheat Field/Apple Orchard that you own on your turn
    :coin 2
    :activation [11,12]
    :color "g"}

    "Cafe"
    {:name "Cafe"
    :type "Primary Industry"
    :cost 2
    :coin 1
    :activation [3]
    :color "r"}

    "Family Restaurant"
    {:name "Family Restaurant"
    :type "Restaurant"
    :cost 3
    :coin 2
    :activation [9,10]
    :color "r"}

    "Stadium"
    {:name "Stadium"
    :type "Major Establishment"
    :cost 6
    :coin 2
    :activation [6]
    :color "p"}

    "TV Station"
    {:name "TV Station"
    :type "Major Establishment"
    :cost 7
    :coin 5
    :activation [6]
    :color "p"}

   ;; Trade One Non-Purple with another player
    "Business Center"
    {:name "Business Center"
    :type "Major Establishment"
    :cost 8
    :coin 0
    :activation [6]
    :color "p"}})

(def machi-landmarks
  {
    "Train Station"
    {:name "Train Station"
    :type "Landmark"
    :cost 4}

    "Shopping Mall"
    {:name "Shopping Mall"
    :type "Landmark"
    :cost 10}

    "Amusement Park"
    {:name "Amusement Park"
    :type "Landmark"
    :cost 16}

    "Radio Tower"
    {:name "Radio Tower"
    :type "Landmark"
    :cost 22}})

(def turns
  ["Roll Dice" "Choose Roll Dice" "Resolve Cards" "Buy Cards" "End Turn" "Roll Dice 2?" "Extra Roll" "Roll 2"])
