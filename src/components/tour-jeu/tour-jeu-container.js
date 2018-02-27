import { connect } from 'react-redux';
import TourJeu from './tour-jeu';
import { findKey } from 'lodash';
import {
  choixCarteAPlacer,
  retirerCartePioche
} from '../../actions/partie-action';
const mapStateToProps = (state, ownProps) => {
  return {
    joueurGagnant:
      state.joueurReducer[
        findKey(state.joueurReducer, { toutVisible: true })
      ] || {},
    joueurs: Object.values(state.joueurReducer),
    pioche: state.partieReducer.pioche,
    defausse: state.partieReducer.defausse[0],
    carteAPlacer: state.partieReducer.carteAPlacer
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    choixCarteAPlacer: carteAPlacer => {
      dispatch(choixCarteAPlacer(carteAPlacer));
    },
    retirerCartePioche: () => {
      dispatch(retirerCartePioche());
    }
  };
};
const TourJeuContainer = connect(mapStateToProps, mapDispatchToProps)(TourJeu);
export default TourJeuContainer;
