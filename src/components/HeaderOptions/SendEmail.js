/**
 * SendEmail displays a view for inputting an email address.
 */

import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

class SendEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      receiverEmail: ''
    };
  }

  handleTextFieldChange = (event, onReceiverEmailChanged) => {
    this.setState({
      receiverEmail: event.target.value,
    });
    if (onReceiverEmailChanged) {
      onReceiverEmailChanged(event.target.value);
    }
  };

  render() {
    return (
      <div className="SendEmail">
        <p>Send a copy of this shopping list to an email address:</p>
        <TextField
          id="SendEmail-TextField"
          value={this.state.textFieldValue}
          onChange={(event) =>
            this.handleTextFieldChange(event, this.props.onReceiverEmailChanged)
          }
          placeholder="Add a new item..."
          autoFocus={true}
        />
        <p>
          <small>Sending emails directly from Basket is not yet supported. This will open your personal email app.</small>
        </p>
      </div>
    );
  }
}

SendEmail.propTypes = {
  onReceiverEmailChanged: PropTypes.func
};

export default SendEmail;