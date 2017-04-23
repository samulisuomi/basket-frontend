import React from 'react';
import PropTypes from 'prop-types';
import './EditItemRow.css';

import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';

import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui/svg-icons/action/delete';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import Comment from 'material-ui/svg-icons/communication/comment';
import ModeComment from 'material-ui/svg-icons/editor/mode-comment';

const EditItemRow = (props) => (
  <div className="EditItemRow">
    <div className="EditItemRow-checkbox-container">
      <Checkbox onCheck={props.onToggleItem} checked={props.item.bought}/>
    </div>
    <div className="EditItemRow-TextField-container">
      <TextField
        id="EditItemRow-TextField-todoprops"
        fullWidth={true}
        placeholder=""
        // TODO: use CSS modules and define all the styles in CSS:
        inputStyle={props.item.bought && {
          'text-decoration': 'line-through',
          color: 'gray'
        }}
      />
    </div>
    <div className="EditItemRow-actions">
      <IconButton className="EditItemRow-button" tooltip="Assign">
        <AccountCircle />
      </IconButton>
      <IconButton className="EditItemRow-button" tooltip="Comment">
        {window.todochangethis && this.props.item.comments.length > 0
          ?
            <Comment />
          : 
            <ModeComment />
        }
      </IconButton>
      <IconButton className="EditItemRow-button" tooltip="Delete">
        <Delete />
      </IconButton>
    </div>
  </div>
);

EditItemRow.propTypes = {
  item: PropTypes.object,
  onToggleItem: PropTypes.func
}

export default EditItemRow;
