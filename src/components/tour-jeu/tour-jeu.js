import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import './tour-jeu.css';
export default class TourJeu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickPioche = this.handleClickPioche.bind(this);
    this.handleClickDefausse = this.handleClickDefausse.bind(this);
  }

  handleClickPioche(event) {
    if (!this.props.carteAPlacer) {
      this.props.choixCarteAPlacer(this.props.pioche[0]);
      this.props.retirerCartePioche();
    }
  }

  handleClickDefausse(e) {
    if (!this.props.carteAPlacer && !this.props.carteAPlacer !== 0) {
      this.props.choixCarteAPlacer(this.props.defausse);
    }
  }

  render() {
    const nomGagnant = this.props.joueurGagnant.nom;
    const joueurs = this.props.joueurs.map(j => (
      <div key={j.id}>
        {j.nom} a {j.totalPoints} points
      </div>
    ));
    return (
      <span>
        <Grid container>
          <Grid.Row>
            <Grid.Column width={3} textAlign="right">
              <Button primary onClick={this.handleClickDefausse}>
                Défausse
              </Button>
            </Grid.Column>
            <Grid.Column
              width={1}
              textAlign="center"
              verticalAlign="middle"
              className="pioche"
            >
              {this.props.defausse}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              <Button primary onClick={this.handleClickPioche}>
                Pioche
              </Button>
            </Grid.Column>
            <Grid.Column width={3} textAlign="right" verticalAlign="middle">
              Carte à placer
            </Grid.Column>
            <Grid.Column
              width={1}
              textAlign="center"
              verticalAlign="middle"
              className={this.props.carteAPlacer ? 'pioche' : ''}
            >
              {this.props.carteAPlacer}
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid centered columns={6}>
          <Grid.Column>{nomGagnant ? nomGagnant + ' a fini' : ''}</Grid.Column>
        </Grid>
        <Grid centered columns={6}>
          <Grid.Column>{nomGagnant ? joueurs : ''}</Grid.Column>
        </Grid>
      </span>
    );
  }
}
