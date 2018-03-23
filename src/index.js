import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/root';
import registerServiceWorker from './registerServiceWorker';
import store from './store/store';
import { Provider } from 'react-redux';
import { Grid } from 'semantic-ui-react';
const appli = (
  <Provider store={store}>
    <React.Fragment>
      <Grid centered columns={2}>
        <Grid.Column textAlign="center">
          <h1>Skyjo</h1>
        </Grid.Column>
      </Grid>
      <Root />
    </React.Fragment>
  </Provider>
);

ReactDOM.render(appli, document.getElementById('root'));
registerServiceWorker();
