/**
 * DeleteButtonDialog renders a button with a trashcan icon that prompts if the user really wants to delete something.
 * See propTypes for API.
 */

import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui/svg-icons/action/delete';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class DeleteButtonDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false
    }
  }

  handleOpen = () => {
    this.setState({
      ...this.state,
      dialogOpen: true
    });
  };

  handleClose = (confirmed, onConfirm) => {
    this.setState({
      ...this.state,
      dialogOpen: false
    });
    if (confirmed && onConfirm) {
      onConfirm();
    }
  };

  // Dialogs with confirm and cancel buttons:
  getDialogActions = (confirmLabel, onConfirm) => {
    return [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={() => this.handleClose(false)}
      />,
      <FlatButton
        label={confirmLabel}
        primary={true}
        keyboardFocused={true}
        onTouchTap={() => this.handleClose(true, onConfirm)}
      />
    ]
  }

  render() {
    return (
      <div style={{display: 'inline-block'}}>
        <IconButton tooltip={this.props.tooltip} onTouchTap={this.handleOpen}>
          <Delete />
        </IconButton>
        <Dialog
          title={this.props.dialogTitle}
          actions={this.getDialogActions(this.props.dialogDeleteLabel, this.props.onDelete)}
          modal={false}
          open={this.state.dialogOpen}
          onRequestClose={() => this.handleClose(false)}
        >
          {this.props.children}
        </Dialog>
      </div>
    );
  }
}

DeleteButtonDialog.propTypes = {
  tooltip: PropTypes.string,
  dialogTitle: PropTypes.string,
  dialogDeleteLabel: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default DeleteButtonDialog;
