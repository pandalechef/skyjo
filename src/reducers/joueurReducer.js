import { CLIC_CARTE } from '../actions/carte-action';
import { CARTE_RETOURNEE } from '../actions/partie-action';
import { find, reduce } from 'lodash';
const joueurReducer = (state, action) => {
  switch (action.type) {
    case CLIC_CARTE:
      return stateClicCarte(state, action);
    case CARTE_RETOURNEE:
      return stateRetournerCarte(state, action);
    default:
      return state;
  }
};

function stateClicCarte(state, action) {
  const idJoueur = action.idJoueur;
  const idCarte = action.carte.position;
  const newCarte = { ...state[idJoueur].cartes[idCarte] };
  const newJoueur = { ...state[idJoueur] };
  const newState = Object.assign({}, state);
  newCarte.visible = true;
  newCarte.valeur = action.carteAPlacer;
  newJoueur.cartes[idCarte] = newCarte;
  estToutVisible(newJoueur);
  newState[idJoueur] = newJoueur;
  if (newJoueur.toutVisible) {
    totalPointsToutJoueur(newState);
  }
  return newState;
}

function stateRetournerCarte(state, action) {
  const idJoueur = action.idJoueur;
  const idCarte = action.carte.position;
  const newCarte = { ...state[idJoueur].cartes[idCarte] };
  const newJoueur = { ...state[idJoueur] };
  const newState = Object.assign({}, state);
  newCarte.visible = true;
  newJoueur.cartes[idCarte] = newCarte;
  estToutVisible(newJoueur);
  newState[idJoueur] = newJoueur;
  if (newJoueur.toutVisible) {
    totalPointsToutJoueur(newState);
  }
  return newState;
}
function estToutVisible(newJoueur) {
  const cartes = newJoueur.cartes;
  const cartesNonVisibles = find(cartes, { visible: false });
  cartesNonVisibles
    ? (newJoueur.toutVisible = false)
    : (newJoueur.toutVisible = true);
}

function totalPointsToutJoueur(state) {
  Object.values(state).map(joueur => totalPoints(joueur));
}
function totalPoints(newJoueur) {
  newJoueur.totalPoints = reduce(
    newJoueur.cartes,
    function(sum, n) {
      return sum + n.valeur;
    },
    0
  );
}
export default function(state = {}, action) {
  return Object.assign({}, state, joueurReducer(state, action));
}
