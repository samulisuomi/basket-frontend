/**
 * AssignUsers displays a list of users that can be checked or checked off as assignees.
 */

import React from 'react';
import PropTypes from 'prop-types';
import './AssignUsers.css'
import Checkbox from 'material-ui/Checkbox';

const AssignUsers = (props) => (
  <div className="AssignUsers">
    {props.users.map(user => 
      <div className="AssignUsers-row"
        key={user}
      >
        <div className="AssignUsers-Checkbox-container">
          <Checkbox
            onCheck={(event, isInputChecked) => {
              if (isInputChecked) {
                props.onAssignItem(user);
              } else {
                props.onUnassignItem(user);
              }
            }}
            checked={props.assigned.indexOf(user) !== -1}
          />
        </div>
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
  assigned: PropTypes.array.isRequired,
  onAssignItem: PropTypes.func.isRequired
};

export default AssignUsers;