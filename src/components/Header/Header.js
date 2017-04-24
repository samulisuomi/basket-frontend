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
  console.log(JSON.stringify(dialogsOpen));
  return dialogsOpen;
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogsOpen: getInitialDialogsOpenState()
    }
  }

  handleOpen = (dialogId) => {
    this.setState({
      ...this.state,
      dialogsOpen: getDialogsOpenState(dialogId)
    });
  };

  handleClose = (dialog, confirmed, onConfirm) => {
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
          onRequestClose={this.handleClose}
        >
          All current data will be cleared.
        </Dialog>
        <Dialog
          title="Invite users"
          actions={this.getDialogActions('Invite', this.props.onInviteUsers)}
          modal={false}
          open={this.state.dialogsOpen.INVITE_USERS_DIALOG}
          onRequestClose={this.handleClose}
        >
          Invite other users to this shopping list:

          <small>The users will receive an email notification.</small>
        </Dialog>
        <Dialog
          title="Send via email"
          actions={this.getDialogActions('Send', null)}
          modal={false}
          open={this.state.dialogsOpen.SEND_EMAIL_DIALOG}
          onRequestClose={this.handleClose}
        >
          Send a copy of this shopping list to an email address:

          <small>Sending emails directly from Basket is not yet supported. Hitting Send will open your own email app where you can send the message.</small>
        </Dialog>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
