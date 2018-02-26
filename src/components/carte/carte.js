import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import './carte.css';
class Carte extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    if (
      (this.props.carteAPlacer || this.props.carteAPlacer === 0) &&
      this.props.enCoursDeJeu
    ) {
      this.props.onClickFct(
        this.props.carte,
        this.props.joueur,
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
          (this.props.carteAPlacer || this.props.carteAPlacer === 0)
            ? 'carte'
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
