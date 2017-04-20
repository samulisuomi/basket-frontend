import React, { Component } from 'react';
import logo from './basket-logo.svg';
import './App.css';

import { Grid, Row } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';

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
        <Grid fluid className="App-Grid">
          <Row className="App-Header Row middle-xs">
            <img src={logo} className="App-Logo" alt="logo" />
            <div className="App-Header-Actions">
              <FlatButton label="New" />
              <FlatButton label="Share" />
            </div>
          </Row>
          <Row className="App-Container Row middle-xs">
            <div className="Item-Row">
              <div className="Item-Checbox" style={{visibility: "hidden"}}>
                <Checkbox/>
              </div>
              <div className="Item-Input">
                <TextField autoFocus={true} fullWidth={true} placeholder="Add a new item..." />
              </div>
              <div className="Item-Trash" style={{visibility: "hidden"}}>
                <Checkbox/>
              </div>
            </div>
            <div className="Add-Item-Actions">
              <RaisedButton className="Add-Item-Actions-Button" label="Add"/>
              <RaisedButton className="Add-Item-Actions-Button" label="Cancel"/>
            </div>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
