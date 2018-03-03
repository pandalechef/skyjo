import { connect } from 'react-redux';
import { remplacerCarte, retournerCarte } from '../../actions/carte-action';
import Carte from './carte';

const mapStateToProps = (state, ownProps) => {
  return {
    tourJeu: state.partieReducer.tourJeu,
    couleur: state.joueurReducer[ownProps.idJoueur].couleur,
    carteAPlacer: state.partieReducer.carteAPlacer,
    enCoursDeJeu: state.partieReducer.idJoueurEnCours === ownProps.idJoueur
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    remplacerCarte: (carte, idJoueur, carteAPlacer) => {
      dispatch(remplacerCarte(carte, idJoueur, carteAPlacer));
    },
    retournerCarte: (carte, idJoueur) => {
      dispatch(retournerCarte(carte, idJoueur));
    }
  };
};

const CarteContainer = connect(mapStateToProps, mapDispatchToProps)(Carte);
export default CarteContainer;
