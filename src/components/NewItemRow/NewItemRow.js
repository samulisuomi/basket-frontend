/**
 * NewItemRow allows the user to enter new items to the list.
 * It manages its own UI state but is otherwise a presentational component. 
 */

import React from 'react';
import PropTypes from 'prop-types'
import './NewItemRow.css';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class NewItemRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textFieldValue: ''
    };
  }

  handleTextFieldChange = (event) => {
    this.setState({
      textFieldValue: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAddItem(this.state.textFieldValue);
    this.setState({
      textFieldValue: ''
    });
  }
  
  handleCancel = (event) => {
    this.setState({
      textFieldValue: ''
    });
  }

  render() {
    return (
      <div className="NewItemRow">
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="NewItemRow-TextField"
            className="NewItemRow-TextField"
            value={this.state.textFieldValue}
            onChange={this.handleTextFieldChange}
            placeholder="Add a new item..."
            autoFocus={true}
          />
          <div className="NewItemRow-actions">
            <RaisedButton
              className="NewItemRow-button"
              label="Add"
              primary={true}
              type="submit"
            />
            <RaisedButton
              className="NewItemRow-button"
              label="Clear"
              onTouchTap={this.handleCancel} />
          </div>
        </form>
      </div>
    );
  }
}

NewItemRow.propTypes = {
  onAddItem: PropTypes.func.isRequired
};

export default NewItemRow;
