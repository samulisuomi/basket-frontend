import React from 'react';
import { connect } from 'react-redux';
import { newList } from '../../actions';
import logo from './basket-logo.svg';
import './Header.css';

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

const Header = (props) => (
  <div className="Header">
    <img src={logo} className="Header-logo" alt="logo" />
    <div className="Header-actions">
      <FlatButton label="New" onTouchTap={props.onNewList}/>
      <FlatButton label="Invite" />
      <FlatButton label="Send" />
    </div>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
