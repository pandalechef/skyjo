import { connect } from 'react-redux';
import TourJeu from './tour-jeu';
import { findKey, filter } from 'lodash';
import {
  choixDefausse,
  propostionPoubelleOuPioche,
  jeterCarte,
  jouerPioche
} from '../../actions/partie-action';

const mapStateToProps = (state, ownProps) => {
  return {
    tourJeu: state.partieReducer.tourJeu,
    joueurGagnant:
      state.joueurReducer[
        findKey(state.joueurReducer, { toutVisible: true })
      ] || {},
    joueurs: Object.values(state.joueurReducer),
    pioche: state.partieReducer.pioche,
    defausse: state.partieReducer.defausse[0],
    carteAPlacer: state.partieReducer.carteAPlacer,
    colonneIdentique: filter(
      state.joueurReducer,
      j => j.colonneIdentique || j.colonneIdentique === 0
    )
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    choixDefausse: carteDefausse => {
      dispatch(choixDefausse(carteDefausse));
    },
    propostionPoubelleOuPioche: () => {
      dispatch(propostionPoubelleOuPioche());
    },
    jeterCarte: () => {
      dispatch(jeterCarte());
    },
    jouerPioche: () => {
      dispatch(jouerPioche());
    }
  };
};
const TourJeuContainer = connect(mapStateToProps, mapDispatchToProps)(TourJeu);
export default TourJeuContainer;
