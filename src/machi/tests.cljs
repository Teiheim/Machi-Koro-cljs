(ns machi.tests
  (:require [cljs.test :refer-macros [deftest is testing run-tests]]
            [machi.definitions :as cards]
            [machi.util :as util]))

(def test-values {:test-add-player-card {:card-stack []
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
                                                                  :activation [2,3]}
                                                        "Mine" {:amount 1
                                                                :color "b"
                                                                :coin  5
                                                                :activation [9]}}
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
                                                :landmarks #{}}]}
                  :test-create-game {:card-stack []
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
                                                :landmarks #{}}]}
                  :test-rac {:card-stack []
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
                                                          :activation [2,3]}
                                                "Cafe" {:amount 1
                                                        :color "r"
                                                        :coin  1
                                                        :activation [3]}
                                                "Stadium" {:amount 1
                                                           :color "p"
                                                           :coin  2
                                                           :activation [6]}}
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
                                                          :activation [2,3]}
                                                "Cafe" {:amount 1
                                                        :color "r"
                                                        :coin  1
                                                        :activation [3]}
                                                "Stadium" {:amount 1
                                                           :color "p"
                                                           :coin  2
                                                           :activation [6]}}
                                        :money 3
                                        :landmarks #{}}]}
                  :test-add-player-card-true {:card-stack []
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
                                                                          "Bakery" {:amount 2
                                                                                    :color "g"
                                                                                    :coin  1
                                                                                    :activation [2,3]}}
                                                                  :money 3
                                                                  :landmarks #{}}
                                                                 {:name "Tad"
                                                                  :position 2
                                                                  :cards {"Wheat Field" {:amount 1
                                                                                         :color "b"
                                                                                         :coin 1
                                                                                         :activation [1]}
                                                                          "Bakery" {:amount 1
                                                                                    :color "g"
                                                                                    :coin 1
                                                                                    :activation [2,3]}}
                                                                  :money 3
                                                                  :landmarks #{}}]}})

(deftest test-get-card
  (is (= (util/get-card "Mine") (get cards/machi-cards "Mine"))))

(deftest test-create-game
  (is (= (util/create-game [[1,"Chad"],[2,"Tad"]]) (get test-values :test-create-game))))

(deftest test-add-player-card
  (is (= (util/card-to-player (get test-values :test-create-game) 0 "Mine") (get test-values :test-add-player-card)))
  (is (= (util/card-to-player (get test-values :test-create-game) 0 "Bakery") (get test-values :test-add-player-card-true))))

(deftest test-get-money
  (is (= (util/get-player-money (get test-values :test-create-game) 0) 3)))

(deftest test-money-management
  (is (= (util/get-player-money (util/remove-add-cash-from-player (get test-values :test-create-game) 0 3) 0) 6)))

(deftest test-activate
  (is (= (util/activate? (util/get-card "Wheat Field") 1) true)))

; (deftest test-get-cards-from-game
;   (is (= (util/get-cards-from-game :test-create-game) ["W","","",""])))

(defn mtest
  []
  (enable-console-print!)
  (cljs.test/run-tests)
  (println "Finished Tests")
  (println (util/get-cards-from-game (get test-values :test-create-game)))
  (println (util/get-player-money (util/remove-add-cash-from-player (get test-values :test-create-game) 0 3) 0))
  (println (util/create-card-stack (get test-values :test-create-game) 0 1 0))
  ;;(println (util/create-card-stack (get test-values :test-rac) 0 1 1))
  ;;(println (util/create-card-stack (get test-values :test-rac) 0 3 3))
  ;;(println (util/create-card-stack (get test-values :test-rac) 0 0 3))
  )
