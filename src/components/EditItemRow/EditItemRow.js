/**
 * EditItemRow displays one item as a row that can be edited. 
 */

import React from 'react';
import PropTypes from 'prop-types';
import './EditItemRow.css';

import EditItemRowOptions from '../EditItemRowOptions/EditItemRowOptions'

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
        inputStyle={props.item.bought ? {
          textDecoration: 'line-through',
          color: 'gray'
        } : {}}
      />
    </div>
    <EditItemRowOptions
      item={props.item}
      onDeleteItem={props.onDeleteItem}
      onAssignItem={props.onAssignItem}
      onUnassignItem={props.onUnassignItem}
    />
  </div>
);

EditItemRow.propTypes = {
  item: PropTypes.object.isRequired,
  onToggleItem: PropTypes.func.isRequired,
  onEditItem: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onAssignItem: PropTypes.func.isRequired,
  onUnassignItem: PropTypes.func.isRequired,
  onAddComment: PropTypes.func,
  onRemoveComment: PropTypes.func,
}

export default EditItemRow;
