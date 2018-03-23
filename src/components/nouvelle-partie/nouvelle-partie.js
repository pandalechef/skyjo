import React from 'react';
import { Grid, Button, Form, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class NouvellePartie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: '',
      couleur: '',
      couleurs: [
        { key: 'b', text: 'bleu', value: 'bleu' },
        { key: 'r', text: 'rouge', value: 'rouge' },
        { key: 'v', text: 'vert', value: 'vert' },
        { key: 'j', text: 'jaune', value: 'jaune' }
      ],
      joueurs: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });
  handleClick() {
    var nouveauJoueurs = this.state.joueurs;
    nouveauJoueurs.push({
      id: this.state.joueurs.length + 1,
      nom: this.state.nom,
      couleur: this.state.couleur,
      cartes: this.tirerDouzeCartes(this.props.pioche)
    });
    this.setState({
      nom: '',
      couleur: '',
      couleurs: this.state.couleurs.filter(c => c.value !== this.state.couleur),
      joueurs: nouveauJoueurs
    });
    this.props.definirJoueurs(this.state.joueurs, this.props.pioche);
  }

  tirerDouzeCartes(pioche) {
    const tasCartes = [];
    for (let i = 0; i < 12; i++) {
      tasCartes.push({ position: i, valeur: pioche.shift(), visible: false });
    }
    return tasCartes;
  }

  render() {
    const { nom, couleur } = this.state;
    return (
      <Grid container columns={2}>
        <Form>
          <Form.Group widths="equal">
            <Form.Field>
              <label>Nom</label>
              <Form.Input
                placeholder="Nom du joueur"
                name="nom"
                value={nom}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Select
              fluid
              label="Couleur"
              options={this.state.couleurs}
              placeholder="Couleur"
              name="couleur"
              value={couleur}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button primary type="submit" onClick={this.handleClick}>
            Ajouter un joueur
          </Button>
          <br />
          <br />
          {this.state.joueurs.length !== 0 ? (
            <Table singleLine>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Numéro Joueur</Table.HeaderCell>
                  <Table.HeaderCell>Nom</Table.HeaderCell>
                  <Table.HeaderCell>Couleur</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {this.state.joueurs.map(j => (
                  <Table.Row key={j.id}>
                    <Table.Cell>{j.id}</Table.Cell>
                    <Table.Cell>{j.nom}</Table.Cell>
                    <Table.Cell>{j.couleur}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          ) : (
            ''
          )}

          <br />
          {this.props.nbJoueurs >= 2 ? (
            <Button color="green" type="submit" as={Link} to="/plateau">
              Démarrer la partie
            </Button>
          ) : (
            ''
          )}
        </Form>
      </Grid>
    );
  }
}
