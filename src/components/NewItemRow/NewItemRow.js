import React, {Component} from 'react';
import './NewItemRow.css';

import ItemRow from '../ItemRow/ItemRow'

import RaisedButton from 'material-ui/RaisedButton';

class NewItemRow extends Component {
  render() {
    return (
      <div className="NewItemRow">
        <ItemRow textFieldOnly={true}/>
        <div className="NewItemRow-actions">
          <RaisedButton className="NewItemRow-button" label="Add" primary={true} />
          <RaisedButton className="NewItemRow-button" label="Cancel" />
        </div>
      </div>
    );
  }   
}

export default NewItemRow;
