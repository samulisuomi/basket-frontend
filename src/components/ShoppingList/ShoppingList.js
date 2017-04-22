import React, { Component } from 'react';
import './ShoppingList.css';

import NewItemRow from '../NewItemRow/NewItemRow'
import EditItemRow from '../EditItemRow/EditItemRow'

class ShoppingList extends Component {
  render() {
    return (
      <div className="ShoppingList">
        <EditItemRow />
        <EditItemRow />
        <NewItemRow />
      </div>
    );
  }
}

export default ShoppingList;
