import { connect } from "react-redux";
import Joueur from "./joueur";
import { find } from "lodash";
import { clicCarte } from "../../actions/carte-action";

const mapStateToProps = (state, ownProps) => {
  return {
    joueur: find(state.joueurReducer, { id: +ownProps.id }) || {},
    enCoursDeJeu: ownProps.idJoueurEnCours === ownProps.id,
    carteAPlacer: state.partieReducer.carteAPlacer
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    clicCarte: (carte, idJoueur, carteAPlacer) => {
      dispatch(clicCarte(carte, idJoueur, carteAPlacer));
    }
  };
};

const JoueurContainer = connect(mapStateToProps, mapDispatchToProps)(Joueur);
export default JoueurContainer;
