import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import './carte.css';
import { CHOIX_MISE_POUBELLE } from '../../actions/partie-action';
class Carte extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    const carte = this.props.carte;
    const idJoueur = this.props.idJoueur;
    if (this.casRetournerCarte()) {
      this.props.retournerCarte(carte, idJoueur);
    }
    if (this.casRemplacerCarte()) {
      this.props.remplacerCarte(carte, idJoueur, this.props.carteAPlacer);
    }
  }

  casRetournerCarte() {
    return this.props.tourJeu === CHOIX_MISE_POUBELLE &&
      this.props.carte.visible === false
      ? true
      : false;
  }

  casRemplacerCarte() {
    return (this.props.carteAPlacer || this.props.carteAPlacer === 0) &&
      this.props.enCoursDeJeu
      ? true
      : false;
  }

  render() {
    const { valeur, visible } = this.props.carte;
    const estCliquable =
      this.props.enCoursDeJeu &&
      (this.props.carteAPlacer ||
        this.props.carteAPlacer === 0 ||
        (this.props.tourJeu === CHOIX_MISE_POUBELLE &&
          this.props.carte.visible === false));
    return (
      <Grid.Column
        className={estCliquable ? `carte-${this.props.couleur}` : ''}
        onClick={this.handleClick}
      >
        {visible ? valeur : '?'}
      </Grid.Column>
    );
  }
}

export default Carte;
