/**
 * Comments displays a list of comments from the users and textbox to add more.
 */

import React from 'react';
import PropTypes from 'prop-types';
import './Comments.css';

import DeleteButtonDialog from '../DeleteButtonDialog/DeleteButtonDialog';

import Moment from 'react-moment';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textFieldValue: ''
    };
  }

  handleTextFieldChange = (event) => {
    this.setState({
      textFieldValue: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.textFieldValue.length) {
      this.props.onAddComment(this.state.textFieldValue);
      this.setState({
        textFieldValue: ''
      });
    }
  }

  render() {
    return (
      <div className="Comments">
        {this.props.comments.length === 0 ? <small>No comments</small> : ''}
        {this.props.comments.map(comment => 
          <Paper className="Comments-comment"
            key={comment.id}
          >
            <div className="Comments-comment-header">
              <small className="Comments-comment-user">{comment.user}</small>
              <small className="Comments-comment-timestamp"><Moment calendar={true}>{comment.timestamp}</Moment></small>
              <DeleteButtonDialog
                tooltip="Delete"
                dialogTitle="Delete comment?"
                dialogDeleteLabel="Delete"
                onDelete={() => this.props.onDeleteComment(comment.id)}
              >
                This action can't be undone.
              </DeleteButtonDialog>
            </div>
            <div className="Comments-comment-text">
              <p>{comment.text}</p>
            </div>
          </Paper>
        )}
        <form onSubmit={this.handleSubmit}>
          <div className="Comments-footer">
            <div className="Comments-footer-input">
              <TextField
                id="Comments-footer-TextField"
                className="Comments-footer-TextField" 
                placeholder="Write a comment..."
                multiLine={true}
                autoFocus={true}
                value={this.state.textFieldValue}
                onChange={this.handleTextFieldChange}
              />
            </div>
            <div className="Comments-footer-send">
              <RaisedButton label="Send" type="Submit" primary={true} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
  onAddComment: PropTypes.func.isRequired,
  onDeleteComment: PropTypes.func.isRequired,
  loggedInAs: PropTypes.string.isRequired
};

export default Comments;