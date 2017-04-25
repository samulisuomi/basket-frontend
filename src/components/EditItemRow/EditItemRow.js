/**
 * EditItemRow allows the user to edit their items.
 * TODO: It manages its own UI state but is otherwise a presentational component. 
 */

import React from 'react';
import PropTypes from 'prop-types';
import './EditItemRow.css';

import EditItemRowActions from '../EditItemRowActions/EditItemRowActions'

import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';

// TODO: Fix warning "Warning: TextField is changing a controlled input of type text to be uncontrolled."
const EditItemRow = (props) => (
  <div className="EditItemRow">
    <div className="EditItemRow-checkbox-container">
      <Checkbox onCheck={props.onToggleItem} checked={props.item.bought}/>
    </div>
    <div className="EditItemRow-TextField-container">
      <TextField
        id={`EditItemRow-TextField-${props.item.id}`}
        fullWidth={true}
        placeholder=""
        value={props.item.text}
        onChange={(event) => {
          event.preventDefault();
          props.onEditItem(props.item.id, event.target.value);
        }}
        // TODO: use CSS modules and define all the styles in CSS:
        inputStyle={props.item.bought ? {
          textDecoration: 'line-through',
          color: 'gray'
        } : {}}
      />
    </div>
    <EditItemRowActions item={props.item} onDeleteItem={props.onDeleteItem} />
  </div>
);

EditItemRow.propTypes = {
  item: PropTypes.object.isRequired,
  onToggleItem: PropTypes.func.isRequired,
  onEditItem: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired
}

export default EditItemRow;
