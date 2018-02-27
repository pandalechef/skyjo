import React from 'react';
import { Grid } from 'semantic-ui-react';
import JoueurContainer from '../joueur/joueur-container';
import TourJeuContainer from '../tour-jeu/tour-jeu-container';

export default class Plateau extends React.Component {
  render() {
    const idJoueurEnCours = this.props.idJoueurEnCours;
    return (
      <div className="marge">
        <Grid container textAlign="center">
          <Grid.Column floated="left" width={5}>
            <JoueurContainer id={0} idJoueurEnCours={idJoueurEnCours} />
          </Grid.Column>
          <Grid.Column floated="right" width={5}>
            <JoueurContainer id={1} idJoueurEnCours={idJoueurEnCours} />
          </Grid.Column>
        </Grid>
        <br />
        <br />
        <TourJeuContainer />
        <br />
        <br />
        <Grid container textAlign="center">
          <Grid.Column floated="left" width={5}>
            <JoueurContainer id={2} idJoueurEnCours={idJoueurEnCours} />
          </Grid.Column>
          <Grid.Column floated="right" width={5}>
            <JoueurContainer id={3} idJoueurEnCours={idJoueurEnCours} />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
