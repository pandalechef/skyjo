import { connect } from 'react-redux';
import Plateau from './plateau';
import { choixCarteAPlacer } from '../../actions/partie-action';

const mapStateToProps = (state, ownProps) => {
  return {
    idJoueurEnCours: state.partieReducer.idJoueurEnCours
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    choixCarteAPlacer: carteAPlacer => {
      dispatch(choixCarteAPlacer(carteAPlacer));
    }
  };
};
const PlateauContainer = connect(mapStateToProps, mapDispatchToProps)(Plateau);
export default PlateauContainer;
