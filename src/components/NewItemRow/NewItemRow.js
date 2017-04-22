import React, { Component } from 'react';
import './NewItemRow.css';

import { connect } from 'react-redux'
import { addItem } from '../../actions';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

// TODO how to have state and redux+dispatch at the same time:
const NewItemRow = ({dispatch}) => {
  let input;

  return (
    <div className="NewItemRow">
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        } else {
          dispatch(addItem(input.value));
          input.value = '';
        }
      }}>
        <TextField
          id="NewItemRow-textField"
          placeholder="Add a new item..."
          autoFocus={true}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div className="NewItemRow-actions">
          <RaisedButton
            className="NewItemRow-button"
            label="Add"
            primary={true}
            onClick={() => console.log(":)")}
          />
          <RaisedButton className="NewItemRow-button" label="Cancel" />
        </div>
      </form>
    </div>
  );
}

export default NewItemRow;
