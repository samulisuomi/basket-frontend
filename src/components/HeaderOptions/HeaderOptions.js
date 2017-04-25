/**
 * HeaderOptions displays a dropdown list of options for the app.
 * It manages its own UI state such as the dialogs and can open an email app with mailto href.
 */

import React from 'react';
import PropTypes from 'prop-types'

import InviteUsers from './InviteUsers'
import SendEmail from './SendEmail'
import { getInitialDialogsOpenState, getDialogsOpenState } from '../../helpers/dialogState'

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

// Dialog IDs:
const NEW_LIST_DIALOG = 'NEW_LIST_DIALOG';
const INVITE_USERS_DIALOG = 'INVITE_USERS_DIALOG';
const SEND_EMAIL_DIALOG = 'SEND_EMAIL_DIALOG';
const dialogIds = [NEW_LIST_DIALOG, INVITE_USERS_DIALOG, SEND_EMAIL_DIALOG];

/**
 * Formats the items to an mailto url and changes window.location to it.
 * @param {string} email 
 * @param {Array} items
 */
const mailtoRedirect = (email, items) => {
  const crlf = '%0D%0A';
  const formattedItems = items.map(item => encodeURIComponent(item.bought ? '☑ ' : '☐ ' + item.text) + crlf).join('');
  window.location = `mailto:${encodeURIComponent(email)}?subject=Shopping%20List%20from%20Basket&body=${formattedItems}`;
}

class HeaderOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogsOpen: getInitialDialogsOpenState(...dialogIds),
      receiverEmail: null
    }
  }

  handleOpen = (dialogId) => {
    this.setState({
      ...this.state,
      dialogsOpen: getDialogsOpenState(dialogId, ...dialogIds)
    });
  };

  handleClose = (confirmed, onConfirm) => {
    this.setState({
      ...this.state,
      dialogsOpen: getInitialDialogsOpenState(...dialogIds)
    });
    if (confirmed && onConfirm) {
      onConfirm();
    }
  };

  // Dialogs with only one close button:
  getDialogCloseAction = () => {
    return (
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={() => this.handleClose(false)}
      />
    );
  }

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
      <div className="HeaderOptions">
        <IconMenu
          iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem primaryText="New list" onTouchTap={() => this.handleOpen(NEW_LIST_DIALOG)}/>
          <MenuItem primaryText="Invite users" onTouchTap={() => this.handleOpen(INVITE_USERS_DIALOG)}/>
          <MenuItem primaryText="Send via email" onTouchTap={() => this.handleOpen(SEND_EMAIL_DIALOG)}/>
          <MenuItem primaryText="Sign out" onTouchTap={() => window.location = "https://www.google.com/" }/>
        </IconMenu>
        <Dialog
          title="Create new list?"
          actions={this.getDialogActions('Create new', this.props.onNewList)}
          modal={false}
          open={this.state.dialogsOpen.NEW_LIST_DIALOG}
          onRequestClose={() => this.handleClose(false)}
        >
          All current data will be cleared.
        </Dialog>
        <Dialog
          title="Invite users"
          actions={this.getDialogCloseAction()}
          autoScrollBodyContent={true}
          modal={false}
          open={this.state.dialogsOpen.INVITE_USERS_DIALOG}
          onRequestClose={() => this.handleClose(false)}
        >
          <InviteUsers
            users={this.props.users}
            onAddUser={this.props.onAddUser}
            onRemoveUser={this.props.onRemoveUser}
          />
        </Dialog>
        <Dialog
          title="Send via email"
          actions={this.getDialogActions('Send', () => mailtoRedirect(this.state.receiverEmail, this.props.items))}
          autoScrollBodyContent={true}
          modal={false}
          open={this.state.dialogsOpen.SEND_EMAIL_DIALOG}
          onRequestClose={() => this.handleClose(false)}
        >
          <SendEmail onReceiverEmailChanged={(email) => this.setState({
              ...this.state,
              receiverEmail: email
            })}
          />
        </Dialog>
      </div>
    );
  }
}

HeaderOptions.propTypes = {
  onNewList: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  onAddUser: PropTypes.func.isRequired,
  onRemoveUser: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
}

export default HeaderOptions;
