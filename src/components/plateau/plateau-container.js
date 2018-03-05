import { connect } from 'react-redux';
import Plateau from './plateau';

const mapStateToProps = (state, ownProps) => {
  return {
    joueurs: state.joueurReducer
  };
};
const PlateauContainer = connect(mapStateToProps)(Plateau);
export default PlateauContainer;
