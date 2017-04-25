/**
 * EditItemRow displays editable item text field along with its options.
 */

import React from 'react';
import PropTypes from 'prop-types';
import './EditItemRow.css';

import EditItemRowOptions from '../EditItemRowOptions/EditItemRowOptions'

import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';

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
