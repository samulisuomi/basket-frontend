import React from 'react';
import { connect } from 'react-redux';
import { newList } from '../../actions';
import logo from './basket-logo.svg';
import './Header.css';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

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

const Header = (props) => (
  <div className="Header">
    <img src={logo} className="Header-logo" alt="logo" />
    <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      <MenuItem primaryText="New list" onTouchTap={props.onNewList}/>
      <MenuItem primaryText="Invite users" />
      <MenuItem primaryText="Send via email" />
      <MenuItem primaryText="Sign out" />
    </IconMenu>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
