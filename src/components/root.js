import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Plateau from './plateau';
import Accueil from './accueil';
import NouvellePartieContainer from './nouvelle-partie';
import { Menu } from 'semantic-ui-react';

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: 'accueil' };
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Router>
        <React.Fragment>
          <Menu>
            <Menu.Item
              as={Link}
              to="/"
              name="accueil"
              active={activeItem === 'accueil'}
              onClick={this.handleItemClick}
            >
              Accueil
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/nouvelle-partie"
              name="nouvellePartie"
              active={activeItem === 'nouvellePartie'}
              onClick={this.handleItemClick}
            >
              Nouvelle partie
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/plateau"
              name="partie"
              active={activeItem === 'partie'}
              onClick={this.handleItemClick}
            >
              Partie
            </Menu.Item>
          </Menu>
          <Route exact path="/" component={Accueil} />
          <Route
            exact
            path="/nouvelle-partie"
            component={NouvellePartieContainer}
          />
          <Route path="/plateau" component={Plateau} />
        </React.Fragment>
      </Router>
    );
  }
}

export default Root;
