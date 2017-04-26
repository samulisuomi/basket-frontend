/**
 * EditItemRowOptions is a container component consisting of buttons related to the specific item.
 * It manages its own UI state such as the dialogs.
 */

import React from 'react';
import PropTypes from 'prop-types';

import { getInitialDialogsOpenState, getDialogsOpenState } from '../../helpers/dialogState';

import AssignUsers from './AssignUsers';
import Comments from './Comments';

import DeleteButtonDialog from '../DeleteButtonDialog/DeleteButtonDialog';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import IconButton from 'material-ui/IconButton';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import Face from 'material-ui/svg-icons/action/face';
import Comment from 'material-ui/svg-icons/communication/comment';
import ModeComment from 'material-ui/svg-icons/editor/mode-comment';

// Dialog IDs:
const ASSIGN_USERS_DIALOG = 'ASSIGN_USERS_DIALOG';
const COMMENTS_DIALOG = 'COMMENTS_DIALOG';
const dialogIds = [ASSIGN_USERS_DIALOG, COMMENTS_DIALOG];

class EditItemRowActions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogsOpen: getInitialDialogsOpenState(...dialogIds)
    }
  }

  handleOpen = (dialogId) => {
    this.setState({
      ...this.state,
      dialogsOpen: getDialogsOpenState(dialogId, ...dialogIds)
    });
  };

  handleClose = () => {
    this.setState({
      ...this.state,
      dialogsOpen: getInitialDialogsOpenState(...dialogIds)
    });
  };

  // Dialogs with only one close button:
  getDialogCloseAction = () => {
    return (
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={() => this.handleClose()}
      />
    );
  }

  render() {
    return (
      <div className="EditItemRowActions">
        <IconButton tooltip="Assign" onTouchTap={() => this.handleOpen(ASSIGN_USERS_DIALOG)}>
          {this.props.item.assigned.length ? <Face /> : <AccountCircle />}
        </IconButton>
        <IconButton tooltip="Comment" onTouchTap={() => this.handleOpen(COMMENTS_DIALOG)}>
          {this.props.item.comments.length ? <Comment /> : <ModeComment />}
        </IconButton>
        <DeleteButtonDialog
          tooltip="Delete"
          dialogTitle="Delete item?"
          dialogDeleteLabel="Delete"
          onDelete={this.props.onDeleteItem}
        >
          The item and its comments will be lost.
        </DeleteButtonDialog>
        <Dialog
          title={`Assign "${this.props.item.text}" to users`}
          actions={this.getDialogCloseAction()}
          autoDetectWindowHeight={false}
          style={{overflow: 'auto'}}
          modal={false}
          open={this.state.dialogsOpen.ASSIGN_USERS_DIALOG}
          onRequestClose={() => this.handleClose(false)}
        >
          <AssignUsers
            assigned={this.props.item.assigned}
            users={this.props.users}
            onAssignItem={this.props.onAssignItem}
            onUnassignItem={this.props.onUnassignItem}
          />
        </Dialog>
        <Dialog
          title={`Comments about ${this.props.item.text}`}
          actions={this.getDialogCloseAction()}
          autoDetectWindowHeight={false}
          style={{overflow: 'auto'}}
          modal={true}
          open={this.state.dialogsOpen.COMMENTS_DIALOG}
          onRequestClose={() => this.handleClose(false)}
        >
          <Comments
            comments={this.props.item.comments}
            onAddComment={this.props.onAddComment}
            onDeleteComment={this.props.onDeleteComment}
            loggedInAs={this.props.loggedInAs}
          />
        </Dialog>
      </div>
    );
  }
}

EditItemRowActions.propTypes = {
  item: PropTypes.object.isRequired,
  onAssignItem: PropTypes.func.isRequired,
  onUnassignItem: PropTypes.func.isRequired,
  onAddComment: PropTypes.func.isRequired,
  onDeleteComment: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  loggedInAs: PropTypes.string.isRequired
}

export default EditItemRowActions;
