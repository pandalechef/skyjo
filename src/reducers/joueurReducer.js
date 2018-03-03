import { CARTE_REMPLACEE, CARTE_RETOURNEE } from '../actions/carte-action';
import { find, reduce, map } from 'lodash';
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
  map(newState, j => (j.colonneIdentique = undefined));
  calculColonneTroisCartes(newState, idJoueur);
  return newState;
}

function calculColonneTroisCartes(state, idJoueur) {
  const cartes = state[idJoueur].cartes;
  const nbColonnes = cartes.length / 3;

  for (let i = 0; i < nbColonnes; i++) {
    const colonne = [];
    colonne.push(cartes[i]);
    for (let j = 1; j < 3; j++) {
      colonne.push(cartes[i + j * nbColonnes]);
    }
    if (!colonne.find(c => c.visible === false)) {
      const egalite = !!colonne.reduce(function(a, b) {
        return a.valeur === b.valeur ? a : NaN;
      });
      if (egalite) {
        state[idJoueur].colonneIdentique = colonne[0].valeur;
        for (let k = 2; k > -1; k--) {
          state[idJoueur].cartes.splice(i + k * nbColonnes, 1);
        }
        state[idJoueur].cartes.map((c, i) => (c.position = i));
      }
    }
  }
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
