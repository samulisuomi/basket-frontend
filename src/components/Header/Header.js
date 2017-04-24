/**
 * Header TODO separate other than logo + store
 */

import React from 'react';
import { connect } from 'react-redux';
import { newList } from '../../actions';
import logo from './basket-logo.svg';
import './Header.css';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import InviteUsers from './InviteUsers'
import SendEmail from './SendEmail'

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNewList: () => {
      dispatch(newList());
    }
  }
}

// Dialog keys:
const NEW_LIST_DIALOG = 'NEW_LIST_DIALOG';
const INVITE_USERS_DIALOG = 'INVITE_USERS_DIALOG';
const SEND_EMAIL_DIALOG = 'SEND_EMAIL_DIALOG';

const getInitialDialogsOpenState = () => {
  return {
      NEW_LIST_DIALOG: false,
      INVITE_USERS_DIALOG: false,
      SEND_EMAIL_DIALOG: false
  };
}

/**
 * Returns new open dialog state where all the other dialogs are not open except openDialogId.
 * @param {string} openDialogId 
 */
const getDialogsOpenState = (openDialogId) => {
  let dialogsOpen = getInitialDialogsOpenState();
  if (openDialogId && dialogsOpen[openDialogId] !== undefined) {
    dialogsOpen[openDialogId] = true;
  }
  return dialogsOpen;
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogsOpen: getInitialDialogsOpenState(),
      receiverEmail: null
    }
  }

  handleOpen = (dialogId) => {
    this.setState({
      ...this.state,
      dialogsOpen: getDialogsOpenState(dialogId)
    });
  };

  handleClose = (confirmed, onConfirm) => {
    this.setState({
      ...this.state,
      dialogsOpen: getInitialDialogsOpenState()
    });
    if (confirmed && onConfirm) {
      onConfirm();
    }
  };

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
      <div className="Header">
        <img src={logo} className="Header-logo" alt="logo" />
        <IconMenu
          iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem primaryText="New list" onTouchTap={() => this.handleOpen(NEW_LIST_DIALOG)}/>
          <MenuItem primaryText="Invite users" onTouchTap={() => this.handleOpen(INVITE_USERS_DIALOG)}/>
          <MenuItem primaryText="Send via email" onTouchTap={() => this.handleOpen(SEND_EMAIL_DIALOG)}/>
          <MenuItem primaryText="Sign out" />
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
          actions={this.getDialogActions('Invite', this.props.onInviteUsers)}
          modal={false}
          open={this.state.dialogsOpen.INVITE_USERS_DIALOG}
          onRequestClose={() => this.handleClose(false)}
        >
          <InviteUsers />
        </Dialog>
        <Dialog
          title="Send via email"
          actions={this.getDialogActions('Send', () => console.log("TODO, mailto " + this.state.receiverEmail))}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
