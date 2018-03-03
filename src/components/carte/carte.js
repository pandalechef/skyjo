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
    if (
      this.props.tourJeu === CHOIX_MISE_POUBELLE &&
      this.props.carte.visible === false
    ) {
      this.props.retournerCarte(this.props.carte, this.props.idJoueur);
    }
    if (
      (this.props.carteAPlacer || this.props.carteAPlacer === 0) &&
      this.props.enCoursDeJeu
    ) {
      this.props.clicCarte(
        this.props.carte,
        this.props.idJoueur,
        this.props.carteAPlacer
      );
    }
  }

  render() {
    const { valeur, visible } = this.props.carte;
    return (
      <Grid.Column
        className={
          this.props.enCoursDeJeu &&
          (this.props.carteAPlacer ||
            this.props.carteAPlacer === 0 ||
            (this.props.tourJeu === CHOIX_MISE_POUBELLE &&
              this.props.carte.visible === false))
            ? `carte-${this.props.couleur}`
            : ''
        }
        onClick={this.handleClick}
      >
        {visible ? valeur : '?'}
      </Grid.Column>
    );
  }
}

export default Carte;
