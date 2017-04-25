/**
 * InviteUsers allows adding new users to the shopping list.
 */

import React from 'react';
import PropTypes from 'prop-types';

import AutoComplete from 'material-ui/AutoComplete';

// TODO: replace with real data
const availableEmails = [
  'joe@example.com',
  'jill@example.com',
  'jack@example.com',
  'foo@bar.com'
];

const validateEmail = (email) => {
  const atIndex = email.indexOf("@");
  const dotIndex = email.indexOf(".")
  return atIndex !== -1
    && dotIndex !== -1
    && dotIndex - atIndex > 1
};

class InviteUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      errorText: null
    };
  }

  handleUpdateInput = (searchText) => {
    this.setState({
      searchText: searchText,
      errorText: !searchText.length || validateEmail(searchText)
        ? null
        : 'The entered email address is not valid'
    });
  };

  handleSelect = () => {
    if (this.state.searchText.length && validateEmail(this.state.searchText)) {
      this.props.onAddUser(this.state.searchText);
      this.setState({
        searchText: '',
        errorText: null
      });
    }
  };

  render() {
    return (
      <div>
        <p>Invite users to this shopping list.</p>
        <ul>
          {this.props.users.map((user, index) => {
            return (
              <li key={user}>
                {user}
                <span
                  style={{cursor: index !== 0 ? 'pointer' : 'default', marginLeft: '8px', color: index !== 0 ? 'red': 'gray'}}
                  onTouchTap={() => this.props.onRemoveUser(user)}
                >
                  ×
                </span>
              </li>
            );
          })}
        </ul>
        <AutoComplete
          hintText="Enter an email address..."
          searchText={this.state.searchText}
          errorText={this.state.errorText}
          onUpdateInput={this.handleUpdateInput}
          onNewRequest={this.handleSelect}
          dataSource={availableEmails}
          filter={AutoComplete.caseInsensitiveFilter}
        />
        <p>
          <small>The users will receive an email notification.</small>
        </p>
      </div>
    );
  }
}

InviteUsers.propTypes = {
  users: PropTypes.array.isRequired,
  onAddUser: PropTypes.func.isRequired,
  onRemoveUser: PropTypes.func.isRequired
}

export default InviteUsers;