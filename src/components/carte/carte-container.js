import { connect } from 'react-redux';
import { clicCarte } from '../../actions/carte-action';
import { retournerCarte } from '../../actions/partie-action';
import Carte from './carte';

const mapStateToProps = (state, ownProps) => {
  return {
    tourJeu: state.partieReducer.tourJeu,
    couleur: state.joueurReducer[ownProps.joueur].couleur
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    clicCarte: (carte, idJoueur, carteAPlacer) => {
      dispatch(clicCarte(carte, idJoueur, carteAPlacer));
    },
    retournerCarte: (carte, idJoueur) => {
      dispatch(retournerCarte(carte, idJoueur));
    }
  };
};

const CarteContainer = connect(mapStateToProps, mapDispatchToProps)(Carte);
export default CarteContainer;
