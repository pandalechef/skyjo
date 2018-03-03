import React from 'react';
import { Grid } from 'semantic-ui-react';
import JoueurContainer from '../joueur/joueur-container';
import TourJeuContainer from '../tour-jeu/tour-jeu-container';
import './plateau.css';

export default class Plateau extends React.Component {
  render() {
    return (
      <div>
        <Grid container textAlign="center">
          <Grid.Column floated="left" width={5}>
            <JoueurContainer id={0} />
          </Grid.Column>
          <Grid.Column floated="right" width={5}>
            <JoueurContainer id={1} />
          </Grid.Column>
        </Grid>
        <div className="marge-haut-bas">
          <TourJeuContainer />
        </div>
        <Grid container textAlign="center">
          <Grid.Column floated="left" width={5}>
            <JoueurContainer id={2} />
          </Grid.Column>
          <Grid.Column floated="right" width={5}>
            <JoueurContainer id={3} />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
