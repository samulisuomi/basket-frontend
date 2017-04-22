import React, { Component } from 'react';
import logo from './basket-logo.svg';
import './App.css';

import ShoppingList from '../ShoppingList/ShoppingList'

import FlatButton from 'material-ui/FlatButton';

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

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App-container">
          <div className="App-header">
            <img src={logo} className="App-header-logo" alt="logo" />
            <div className="App-header-actions">
              <FlatButton label="New" />
              <FlatButton label="Invite" />
              <FlatButton label="Send" />
            </div>
          </div>
          <ShoppingList />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
