import React, {Component} from 'react';
import './EditItemRow.css';

import ItemRow from '../ItemRow/ItemRow'

import RaisedButton from 'material-ui/RaisedButton';

class EditItemRow extends Component {
  render() {
    return (
      <div className="EditItemRow">
        <ItemRow/>
        <div className="EditItemRow-actions">
          <RaisedButton className="EditItemRow-button" label="Save" primary={true} />
          <RaisedButton className="EditItemRow-button" label="Discard" />
        </div>
      </div>
    );
  }   
}

export default EditItemRow;
