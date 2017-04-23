import React from 'react';
import PropTypes from 'prop-types';
import './ShoppingList.css';

import NewItemRow from '../NewItemRow/NewItemRow'
import EditItemRow from '../EditItemRow/EditItemRow'

class ShoppingList extends React.Component {
  constructor() {
    super();
    this.state = {
      item: {
        bought: false
      }
    }
  }

  tempHandleChange = (event) => {
    this.setState({
      item: {
        bought: !this.state.item.bought
      }
    });
  }

  render() {
    return (
      <div className="ShoppingList">
        <EditItemRow
          onToggleItem={this.tempHandleChange}
          item={this.state.item}
        />
        <NewItemRow onAddItem={this.props.onAddItem}/>
      </div>
    );
  }
}

ShoppingList.propTypes = {
  onAddItem: PropTypes.func.isRequired
}

export default ShoppingList;
