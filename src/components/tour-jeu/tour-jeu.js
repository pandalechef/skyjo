import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import './tour-jeu.css';
import * as action from '../../actions/partie-action';

export default class TourJeu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickPioche = this.handleClickPioche.bind(this);
    this.handleClickDefausse = this.handleClickDefausse.bind(this);
    this.handleClickJeterCarte = this.handleClickJeterCarte.bind(this);
    this.handleClickJouerPioche = this.handleClickJouerPioche.bind(this);
  }

  handleClickPioche(event) {
    this.props.propostionPoubelleOuPioche();
  }

  handleClickDefausse() {
    this.props.choixDefausse(this.props.defausse);
  }

  handleClickJeterCarte() {
    this.props.jeterCarte();
  }

  handleClickJouerPioche() {
    this.props.jouerPioche();
  }

  render() {
    const tourJeu = this.props.tourJeu;
    const valeurCarteColonneIdentique =
      this.props.colonneIdentique.length !== 0
        ? this.props.colonneIdentique[0].colonneIdentique
        : undefined;
    const bienJoue = valeurCarteColonneIdentique ? (
      <Grid.Row centered columns={2}>
        <Grid.Column width={8} textAlign="right" verticalAlign="middle">
          {valeurCarteColonneIdentique
            ? `Bien joué ${
                this.props.colonneIdentique[0].nom
              }, trois cartes de valeur ${valeurCarteColonneIdentique} sur une même colonne ont été supprimées`
            : ''}
        </Grid.Column>
      </Grid.Row>
    ) : (
      ''
    );
    if (tourJeu === action.PROPOSITION_DEFAUSSE_OU_PIOCHE) {
      return (
        <Grid container>
          {bienJoue}
          <Grid.Row>
            <Grid.Column width={3} textAlign="right" verticalAlign="middle">
              Défausse
            </Grid.Column>
            <Grid.Column
              width={1}
              textAlign="center"
              verticalAlign="middle"
              className="pioche"
            >
              {this.props.defausse}
            </Grid.Column>
            <Grid.Column width={4} textAlign="right" verticalAlign="middle">
              Choisir défausse ou pioche
            </Grid.Column>
            <Grid.Column width={2} textAlign="left">
              <Button primary onClick={this.handleClickDefausse}>
                Défausse
              </Button>
            </Grid.Column>
            <Grid.Column width={2} textAlign="left">
              <Button primary onClick={this.handleClickPioche}>
                Pioche
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    } else if (tourJeu === action.CHOIX_DEFAUSSE) {
      return (
        <Grid container>
          <Grid.Row>
            <Grid.Column width={3} textAlign="right" verticalAlign="middle">
              Carte à placer
            </Grid.Column>
            <Grid.Column
              width={1}
              textAlign="center"
              verticalAlign="middle"
              className="pioche"
            >
              {this.props.defausse}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    } else if (tourJeu === action.PROPOSTION_POUBELLE_OU_PIOCHE) {
      return (
        <Grid container>
          <Grid.Row>
            <Grid.Column width={3} textAlign="right" verticalAlign="middle">
              Pioche
            </Grid.Column>
            <Grid.Column
              width={1}
              textAlign="center"
              verticalAlign="middle"
              className="pioche"
            >
              {this.props.pioche[0]}
            </Grid.Column>

            <Grid.Column width={3} textAlign="left">
              <Button primary onClick={this.handleClickJeterCarte}>
                Jeter la carte
              </Button>
            </Grid.Column>
            <Grid.Column width={3} textAlign="left">
              <Button primary onClick={this.handleClickJouerPioche}>
                Jouer la pioche
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    } else if (tourJeu === action.CHOIX_MISE_POUBELLE) {
      return (
        <Grid container>
          <Grid.Row>
            <Grid.Column width={3} textAlign="right" verticalAlign="middle">
              Retourner une carte
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    } else if (tourJeu === action.CHOIX_JOUER_CARTE_PIOCHE) {
      return (
        <Grid container>
          <Grid.Row>
            <Grid.Column width={3} textAlign="right" verticalAlign="middle">
              Carte à placer
            </Grid.Column>
            <Grid.Column
              width={1}
              textAlign="center"
              verticalAlign="middle"
              className="pioche"
            >
              {this.props.carteAPlacer}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    }
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
