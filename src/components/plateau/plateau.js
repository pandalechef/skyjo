import React from 'react';
import { Grid } from 'semantic-ui-react';
import JoueurContainer from '../joueur/joueur-container';
import TourJeuContainer from '../tour-jeu/tour-jeu-container';
import './plateau.css';
import { slice } from 'lodash';

export default class Plateau extends React.Component {
  indiceMilieu(joueurs) {
    return joueurs.length % 2 === 0
      ? joueurs.length / 2
      : joueurs.length / 2 + 1;
  }
  render() {
    const joueurs = Object.values(this.props.joueurs);
    const indiceMilieu = this.indiceMilieu(joueurs);
    const ligneJoueurs1 = slice(joueurs, 0, indiceMilieu).map(j => (
      <Grid.Column key={j.id} width={5}>
        <JoueurContainer id={j.id} />
      </Grid.Column>
    ));
    const ligneJoueurs2 = slice(joueurs, indiceMilieu, joueurs.length).map(
      j => (
        <Grid.Column key={j.id} width={5}>
          <JoueurContainer id={j.id} />
        </Grid.Column>
      )
    );

    return (
      <div>
        <Grid container textAlign="center">
          {ligneJoueurs1}
        </Grid>
        <div className="marge-haut-bas">
          <TourJeuContainer />
        </div>
        <Grid container textAlign="center">
          {ligneJoueurs2}
        </Grid>
      </div>
    );
  }
}
