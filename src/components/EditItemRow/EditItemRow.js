import React, {Component} from 'react';
import './EditItemRow.css';

import ItemRow from '../ItemRow/ItemRow'

// TODO: Combine this and ItemRow if no use:
class EditItemRow extends Component {
  render() {
    return (
      <div className="EditItemRow">
        <ItemRow/>
      </div>
    );
  }   
}

export default EditItemRow;
