import { CARTE_REMPLACEE, CARTE_RETOURNEE } from '../actions/carte-action';
import { find, reduce } from 'lodash';
const joueurReducer = (state, action) => {
  switch (action.type) {
    case CARTE_REMPLACEE:
      return mettreAjourState(state, action);
    case CARTE_RETOURNEE:
      return mettreAjourState(state, action);
    default:
      return state;
  }
};

function mettreAjourState(state, action) {
  const idJoueur = action.idJoueur;
  const idCarte = action.carte.position;
  const newCarte = { ...state[idJoueur].cartes[idCarte] };
  newCarte.visible = true;
  if (action.type === CARTE_REMPLACEE) {
    newCarte.valeur = action.carteAPlacer;
  }
  const newJoueur = { ...state[idJoueur] };
  const newState = Object.assign({}, state);
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
