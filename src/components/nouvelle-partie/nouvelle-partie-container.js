import { connect } from 'react-redux';
import NouvellePartie from './nouvelle-partie';
import { definirJoueurs } from '../../actions/nouvelle-partie-action';
const mapStateToProps = (state, ownProps) => {
  return {
    nbJoueurs: state.partieReducer.nbJoueurs,
    pioche: state.partieReducer.pioche
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    definirJoueurs: (joueurs, pioche) => {
      dispatch(definirJoueurs(joueurs, pioche));
    }
  };
};

const NouvellePartieContainer = connect(mapStateToProps, mapDispatchToProps)(
  NouvellePartie
);
export default NouvellePartieContainer;
