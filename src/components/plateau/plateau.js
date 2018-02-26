import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import './plateau.css';
import JoueurContainer from '../joueur/joueur-container';

export default class Plateau extends React.Component {
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
    const idJoueurEnCours = this.props.idJoueurEnCours;
    const nomGagnant = this.props.joueurGagnant.nom;
    const joueurs = this.props.joueurs.map(j => (
      <div key={j.id}>
        {j.nom} a {j.totalPoints} points
      </div>
    ));
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
