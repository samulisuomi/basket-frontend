/**
 * ShoppingList is a container component that lays out a list of items and functionality to add more of them.
 */

import React from 'react';
import { connect } from 'react-redux';
import { addItem, toggleItem, editItem, deleteItem } from '../../actions';
import './ShoppingList.css';

import NewItemRow from '../NewItemRow/NewItemRow'
import EditItemRow from '../EditItemRow/EditItemRow'

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddItem: text => {
      dispatch(addItem(text));
    },
    onToggleItem: id => {
      dispatch(toggleItem(id));
    },
    onEditItem: (id, text) => {
      dispatch(editItem(id, text));
    },
    onDeleteItem: (id) => {
      dispatch(deleteItem(id));
    }
  }
};

const ShoppingList = (props) => (
  <div className="ShoppingList">
    {props.items.map(item => 
      <EditItemRow
        key={item.id}
        onToggleItem={() => props.onToggleItem(item.id)}
        onEditItem={props.onEditItem}
        onDeleteItem={() => props.onDeleteItem(item.id)}
        item={item}
      />
    )}
    <NewItemRow onAddItem={props.onAddItem}/>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingList);
