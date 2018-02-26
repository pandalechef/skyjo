import {
  CHOIX_CARTE_A_PLACER,
  RETIRER_CARTE_PIOCHE
} from '../actions/partie-action';
import { CLIC_CARTE } from '../actions/carte-action';
import { clone } from 'lodash';
const partieReducer = (state, action) => {
  switch (action.type) {
    case CHOIX_CARTE_A_PLACER:
      const newState = Object.assign({}, state, {
        carteAPlacer: action.carteAPlacer
      });
      return newState;
    case CLIC_CARTE:
      const newDefausse = clone(state.defausse);
      console.log('new defausse', newDefausse);
      newDefausse.unshift(action.carte.valeur);
      const newState2 = Object.assign({}, state, {
        carteAPlacer: undefined,
        idJoueurEnCours: action.idJoueur === 3 ? 0 : action.idJoueur + 1,
        defausse: newDefausse
      });
      return newState2;
    case RETIRER_CARTE_PIOCHE:
      const newState3 = Object.assign({}, state);

      const newPioche = Array.from(state.pioche);
      newPioche.shift();
      newState3.pioche = newPioche;
      return newState3;
    default:
      return state;
  }
};

export default function(state = {}, action) {
  return Object.assign({}, state, partieReducer(state, action));
}
