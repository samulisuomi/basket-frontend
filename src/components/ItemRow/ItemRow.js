import React from 'react';
import PropTypes from 'prop-types';
import './ItemRow.css';

import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';

import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui/svg-icons/action/delete';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import Comment from 'material-ui/svg-icons/communication/comment';
import ModeComment from 'material-ui/svg-icons/editor/mode-comment';

class ItemRow extends React.PureComponent {
  render() {
    return (
      <div className="ItemRow">
        <div style={{visibility: this.props.textFieldOnly ? 'hidden' : 'visible'}}>
          <Checkbox />
        </div>
        <div className="ItemRow-input-container">
          <TextField id="ItemRow-input-todoprops" autoFocus={true} fullWidth={true} placeholder={this.props.placeholder} />
        </div>
        <div style={{visibility: this.props.textFieldOnly ? 'hidden' : 'visible'}}>
          <IconButton className="ItemRow-button" tooltip="Assign">
            <AccountCircle />
          </IconButton>
          <IconButton className="ItemRow-button" tooltip="Comment">
            {this.props.commentCount > 0
              ?
                <Comment />
              : 
                <ModeComment />
            }
          </IconButton>
          <IconButton className="ItemRow-button" tooltip="Delete">
            <Delete />
          </IconButton>
        </div>
      </div>
    );
  }
}

ItemRow.propTypes = {
  placeholder: PropTypes.string,
  textFieldOnly: PropTypes.bool,
  commentCount: PropTypes.number
}

export default ItemRow;
