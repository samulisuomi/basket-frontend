/**
 * Comments displays a list of comments from the users and textbox to add more.
 */

import React from 'react';
import PropTypes from 'prop-types';
import './Comments.css';

import Moment from 'react-moment';
import Paper from 'material-ui/Paper';

const Comments = (props) => (
  <div className="Comments">
    {props.comments.map(comment => 
      <Paper className="Comments-comment"
        key={comment.id}
      >
        <div className="Comments-comment-header">
          <small>{comment.user}</small>
          <small><Moment calendar={true}>{comment.timestamp}</Moment></small>
        </div>
        <div className="Comments-comment-text">
          <p>{comment.text}</p>
        </div>
      </Paper>
    )}
  </div>
);

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
  onAddComment: PropTypes.func.isRequired,
  onDeleteComment: PropTypes.func.isRequired,
  loggedInAs: PropTypes.string.isRequired
};

export default Comments;