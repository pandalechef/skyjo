import * as constantes from '../actions/partie-action';
import { DEFINIR_JOUEURS } from '../actions/nouvelle-partie-action.js';
import { CARTE_REMPLACEE, CARTE_RETOURNEE } from '../actions/carte-action';
import { clone } from 'lodash';

const partieReducer = (state, action) => {
  const nouveauState = Object.assign({}, state);
  switch (action.type) {
    case DEFINIR_JOUEURS:
      nouveauState.nbJoueurs = action.joueurs.length;
      nouveauState.pioche = action.pioche;
      return nouveauState;
    case CARTE_REMPLACEE:
      const majDefausse = clone(state.defausse);
      if (state.tourJeu === constantes.CHOIX_DEFAUSSE) {
        majDefausse.shift();
      }
      majDefausse.unshift(action.carte.valeur);
      nouveauState.defausse = majDefausse;
      initialiserDebutTourJeu(nouveauState, action);
      return nouveauState;
    case constantes.CHOIX_DEFAUSSE:
      nouveauState.tourJeu = constantes.CHOIX_DEFAUSSE;
      nouveauState.carteAPlacer = action.carteDefausse;
      return nouveauState;
    case constantes.PROPOSTION_POUBELLE_OU_PIOCHE:
      nouveauState.tourJeu = constantes.PROPOSTION_POUBELLE_OU_PIOCHE;
      return nouveauState;
    case constantes.CHOIX_MISE_POUBELLE:
      nouveauState.tourJeu = constantes.CHOIX_MISE_POUBELLE;
      const newDefausse = clone(state.defausse);
      newDefausse.unshift(state.pioche[0]);
      nouveauState.defausse = newDefausse;
      nouveauState.pioche.shift();
      return nouveauState;
    case constantes.CHOIX_JOUER_CARTE_PIOCHE:
      nouveauState.tourJeu = constantes.CHOIX_JOUER_CARTE_PIOCHE;
      nouveauState.carteAPlacer = state.pioche[0];
      const newPioche = Array.from(state.pioche);
      newPioche.shift();
      nouveauState.pioche = newPioche;
      return nouveauState;
    case CARTE_RETOURNEE:
      initialiserDebutTourJeu(nouveauState, action);
      return nouveauState;
    default:
      return state;
  }
};

function initialiserDebutTourJeu(state, action) {
  state.carteAPlacer = undefined;
  state.idJoueurEnCours =
    action.idJoueur === state.nbJoueurs - 1 ? 0 : action.idJoueur + 1;
  state.tourJeu = constantes.PROPOSITION_DEFAUSSE_OU_PIOCHE;
}
export default function(state = {}, action) {
  return Object.assign({}, state, partieReducer(state, action));
}
