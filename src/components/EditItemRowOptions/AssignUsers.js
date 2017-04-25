/**
 * AssignUsers displays a list of users that can be checked or checked off as assignees.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'material-ui/Checkbox';

const AssignUsers = (props) => (
  <div className="SendEmail">
    {props.users.map(user => 
      <div
        key={user}
      >
        <Checkbox />
        <span>{user}</span>
      </div>
    )}
    
    <p>
      <small>Invite more users to the list from the main options menu.</small>
    </p>
  </div>
);

AssignUsers.propTypes = {
  users: PropTypes.array.isRequired,
  assigned: PropTypes.array.isRequired
};

export default AssignUsers;