import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import joueurReducer from '../reducers/joueurReducer';
import partieReducer from '../reducers/partieReducer';
import { shuffle } from 'lodash';

function creerToutesCartes() {
  const toutesLesCartes = [];
  for (let i = -1; i < 13; i++) {
    for (let j = 0; j < 10; j++) {
      toutesLesCartes.push(i);
    }
  }
  for (let i = 0; i < 5; i++) {
    toutesLesCartes.push(-2);
    toutesLesCartes.push(0);
  }
  console.log(toutesLesCartes);
  return shuffle(toutesLesCartes);
}
const pioche = creerToutesCartes();

function tirerDouzeCartes() {
  const tasCartes = [];
  for (let i = 0; i < 12; i++) {
    tasCartes.push({ position: i, valeur: pioche.shift(), visible: false });
  }
  return tasCartes;
}
const initialState = {
  joueurReducer: [
    {
      id: 0,
      nom: 'julien',
      toutVisible: false,
      cartes: tirerDouzeCartes()
    },
    {
      id: 1,
      nom: 'aurélie',
      toutVisible: false,
      cartes: tirerDouzeCartes()
    },
    {
      id: 2,
      nom: 'camille',
      toutVisible: false,
      cartes: tirerDouzeCartes()
    },
    {
      id: 3,
      nom: 'panda',
      toutVisible: false,
      cartes: tirerDouzeCartes()
    }
  ],
  partieReducer: {
    idJoueurEnCours: 0,
    idJoueurGagnant: undefined,
    carteAPlacer: undefined,
    defausse: [pioche.shift()],
    pioche: pioche
  }
};

const store = createStore(
  combineReducers({ partieReducer, joueurReducer }),
  initialState,
  compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
