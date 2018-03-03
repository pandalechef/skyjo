import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Carte from '../carte/carte-container';
import './joueur.css';
import { slice } from 'lodash';
class Joueur extends Component {
  render() {
    const cartes = this.props.joueur.cartes;
    const nbCartes = this.props.joueur.cartes.length;
    const nbColonnes = nbCartes / 3;
    const idJoueur = this.props.joueur.id;
    const enCoursDeJeu = this.props.enCoursDeJeu;
    const ligne1 = slice(cartes, 0, nbColonnes).map((c, i) => (
      <Carte key={c.position} idJoueur={idJoueur} carte={cartes[i]} />
    ));
    const ligne2 = slice(cartes, nbColonnes, nbColonnes * 2).map((c, i) => (
      <Carte
        key={c.position}
        idJoueur={idJoueur}
        carte={cartes[nbColonnes + i]}
      />
    ));
    const ligne3 = slice(cartes, nbColonnes * 2, nbCartes).map((c, i) => (
      <Carte
        key={c.position}
        idJoueur={idJoueur}
        carte={cartes[nbColonnes * 2 + i]}
      />
    ));
    return (
      <div
        className={
          enCoursDeJeu ? `enCoursDeJeu-${this.props.joueur.couleur}` : ''
        }
      >
        {this.props.joueur.nom}
        <Grid celled>
          <Grid.Row columns={nbColonnes}>{ligne1}</Grid.Row>
          <Grid.Row columns={nbColonnes}>{ligne2}</Grid.Row>
          <Grid.Row columns={nbColonnes}>{ligne3}</Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Joueur;
