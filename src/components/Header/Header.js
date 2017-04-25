/**
 * Header is a container component that displays the app header where actions can be taken on the current list.
 */

import React from 'react';
import { connect } from 'react-redux';
import { newList, addUser, removeUser } from '../../actions';
import logo from './basket-logo.svg';
import './Header.css';

import HeaderOptions from '../HeaderOptions/HeaderOptions'

const mapStateToProps = (state) => {
  return {
    items: state.items,
    users: state.users
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onNewList: () => {
      dispatch(newList());
    },
    onAddUser: (user) => {
      dispatch(addUser(user));
    },
    onRemoveUser: (user) => {
      dispatch(removeUser(user));
    }
  }
};

const Header = (props) => {
  return (
    <div className="Header">
      <img src={logo} className="Header-logo" alt="logo" />
      <HeaderOptions
        onNewList={props.onNewList}
        users={props.users}
        onAddUser={props.onAddUser}
        onRemoveUser={props.onRemoveUser}
        items={props.items}
      />
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
