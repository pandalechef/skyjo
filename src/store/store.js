import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import joueurReducer from '../reducers/joueurReducer';
import partieReducer from '../reducers/partieReducer';
import { shuffle } from 'lodash';
import { PROPOSITION_DEFAUSSE_OU_PIOCHE } from '../actions/partie-action';
function creerToutesCartes() {
  const toutesLesCartes = [];
  for (let i = -1; i < 13; i++) {
    for (let j = 0; j < 10; j++) {
      toutesLesCartes.push(1);
    }
  }
  for (let i = 0; i < 5; i++) {
    toutesLesCartes.push(-2);
    toutesLesCartes.push(0);
  }
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
      couleur: 'bleu',
      toutVisible: false,
      colonneIdentique: undefined,
      cartes: tirerDouzeCartes()
    },
    {
      id: 1,
      nom: 'aurélie',
      couleur: 'rouge',
      toutVisible: false,
      colonneIdentique: undefined,
      cartes: tirerDouzeCartes()
    },
    {
      id: 2,
      nom: 'camille',
      couleur: 'vert',
      toutVisible: false,
      colonneIdentique: undefined,
      cartes: tirerDouzeCartes()
    },
    {
      id: 3,
      nom: 'panda',
      couleur: 'jaune',
      toutVisible: false,
      colonneIdentique: undefined,
      cartes: tirerDouzeCartes()
    }
  ],
  partieReducer: {
    tourJeu: PROPOSITION_DEFAUSSE_OU_PIOCHE,
    idJoueurEnCours: 0,
    nbJoueurs: 4,
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
