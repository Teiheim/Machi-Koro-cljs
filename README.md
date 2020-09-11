# Machi Koro in CLJS -- IN PROGRESSS
Machi Koro is a simple deck building game, where each player acts as mayor of a town. The goal is to make enough money to create all four landmarks and win the game!

Since quarantine started, I have missed playing a game of Machi Koro with my friends. I also wanted to experiment more with Clojure, a LISP like functional programming language. I didn't want to go through a new package in order to create a GUI so I decided to use Clojurescript (which compiles to javascript). In the end I had to learn to use many differents packages anyway. Playing with Reagent (which is a wrapper for React) has been amazing. I have done web development for a few years, and it feels like this is what web development should have always been. 

I started with the template here: https://github.com/jacekschae/shadow-reagent

#### Thoughts on functional programming and web development
Using clojurescript felt incredibly natural with websites. Of course by definition, something like this isn't purely functional, but having not 

## Packages Used

`shadow-cljs` is a build tool for ClojureScript.

`proto-repl` is a Clojure(Script) dev env for [Atom](https://atom.io/)

`reagent` is a ClojureScript wrapper for [React](https://reactjs.org/).

## Setup And Run
#### Copy repository
```shell
git clone https://github.com/Teiheim/Machi-Koro-cljs && cd Machi-Koro-cljs
```

#### Install dependencies
```shell
npm install
```

#### Run dev server
```shell
yarn dev || npm run dev
```

#### Compile an optimized version

```shell
yarn release || npm run release
```

## TODO LIST
- Reorganize code so that like functions are grouped together and it is easier to read
- Put all atoms into a single atom
- add more descriptive comments
- Fix/expand testing
- Import Sente and begin refactoring code so that multiple people may play at once on different computers
