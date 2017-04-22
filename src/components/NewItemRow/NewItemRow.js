import React, { Component } from 'react';
import './NewItemRow.css';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class NewItemRow extends Component {
  render() {
    return (
      <div className="NewItemRow">
        <TextField className="NewItemRow-textField" placeholder="Add a new item..." />
        <div className="NewItemRow-actions">
          <RaisedButton className="NewItemRow-button" label="Add" primary={true} />
          <RaisedButton className="NewItemRow-button" label="Cancel" />
        </div>
      </div>
    );
  }
}

export default NewItemRow;
