/**
 * App lays out the top-level app structure.
 */

import React from 'react';
import './App.css';

import Header from '../Header/Header'
import ShoppingList from '../ShoppingList/ShoppingList'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { deepPurple800, deepPurple700, deepPurple600 } from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepPurple800,
    primary2Color: deepPurple700,
    primary3Color: deepPurple600,
  }
});

const App = (props) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div className="App-container">
      <Header />
      <ShoppingList />
    </div>
  </MuiThemeProvider>
);

export default App;
