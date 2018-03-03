import * as constantes from '../actions/partie-action';
import { CLIC_CARTE } from '../actions/carte-action';
import { clone } from 'lodash';

const partieReducer = (state, action) => {
  const nouveauState = Object.assign({}, state);
  switch (action.type) {
    case constantes.CHOIX_CARTE_A_PLACER:
      const newState = Object.assign({}, state, {
        carteAPlacer: action.carteAPlacer
      });
      return newState;
    case CLIC_CARTE:
      if (state.tourJeu === constantes.CHOIX_DEFAUSSE) {
        const newDefausse = clone(state.defausse);
        newDefausse.shift();
        newDefausse.unshift(action.carte.valeur);
        nouveauState.defausse = newDefausse;
        initialiserDebutTourJeu(nouveauState, action);
        return nouveauState;
      } else if (state.tourJeu === constantes.CHOIX_JOUER_CARTE_PIOCHE) {
        const newDefausse = clone(state.defausse);
        newDefausse.unshift(action.carte.valeur);
        nouveauState.defausse = newDefausse;
        initialiserDebutTourJeu(nouveauState, action);
        return nouveauState;
      }
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
    case constantes.CARTE_RETOURNEE:
      initialiserDebutTourJeu(nouveauState, action);
      return nouveauState;
    default:
      return state;
  }
};

function initialiserDebutTourJeu(state, action) {
  state.carteAPlacer = undefined;
  state.idJoueurEnCours = action.idJoueur === 3 ? 0 : action.idJoueur + 1;
  state.tourJeu = constantes.PROPOSITION_DEFAUSSE_OU_PIOCHE;
}
export default function(state = {}, action) {
  return Object.assign({}, state, partieReducer(state, action));
}
