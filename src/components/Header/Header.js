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
import RaisedButton from 'material-ui/RaisedButton';

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

class Header extends React.Component {
  // TODO: a) Each menuitem its own component OR general dialog
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = (confirmed) => {
    this.setState({open: false});
    if (confirmed) {
      this.props.onNewList();
    }
  };
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={() => this.handleClose(false)}
      />,
      <FlatButton
        label="Create new"
        primary={true}
        keyboardFocused={true}
        onTouchTap={() => this.handleClose(true)}
      />,
    ];

    return (
      <div className="Header">
        <img src={logo} className="Header-logo" alt="logo" />
        <IconMenu
          iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem primaryText="New list" onTouchTap={this.handleOpen}/>
          <MenuItem primaryText="Invite users" />
          <MenuItem primaryText="Send via email" />
          <MenuItem primaryText="Sign out" />
        </IconMenu>
        <Dialog
          title="Create new list?"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          All current data will be cleared.
        </Dialog>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
