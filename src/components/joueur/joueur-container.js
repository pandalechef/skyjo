import { connect } from 'react-redux';
import Joueur from './joueur';
import { find } from 'lodash';

const mapStateToProps = (state, ownProps) => {
  return {
    joueur: find(state.joueurReducer, { id: +ownProps.id }) || {},
    enCoursDeJeu: state.partieReducer.idJoueurEnCours === ownProps.id
  };
};
const JoueurContainer = connect(mapStateToProps)(Joueur);
export default JoueurContainer;
