/**
 * EditItemRowActions 
 * TODO:
 */

import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui/svg-icons/action/delete';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import Comment from 'material-ui/svg-icons/communication/comment';
import ModeComment from 'material-ui/svg-icons/editor/mode-comment';

class EditItemRowActions extends React.Component {
  render() {
    return (
      <div className="EditItemRowActions">
        <IconButton className="EditItemRowActions-button" tooltip="Assign">
          <AccountCircle />
        </IconButton>
        <IconButton className="EditItemRowActions-button" tooltip="Comment">
          {this.props.item.comments.length > 0
            ?
              <Comment />
            : 
              <ModeComment />
          }
        </IconButton>
        <IconButton className="EditItemRowActions-button" tooltip="Delete">
          <Delete onTouchTap={this.props.onDeleteItem}/>
        </IconButton>
      </div>
    );
  }
}

EditItemRowActions.propTypes = {
  item: PropTypes.object.isRequired,
  onDeleteItem: PropTypes.func.isRequired
}

export default EditItemRowActions;
