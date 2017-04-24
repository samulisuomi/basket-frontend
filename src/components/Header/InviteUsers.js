import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

// TODO: replace with props and real data.
// TODO: add callback for updating the parent state of invitechanges
const availableEmails = [
  'aa@foo.com',
  'bb@foo.com',
  'cc@foo.com'
];

class InviteUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      adminUsers: ['jack@example.com'],
      otherUsers: ['jill@example.com'],
      newUsers: []
    };
  }

  handleUpdateInput = (searchText) => {
    this.setState({
      ...this.state,
      searchText: searchText
    });
  };

  handleSelect = () => {
    console.log(JSON.stringify(this.state));
    this.setState({
      ...this.state,
      searchText: '',
      newUsers: this.state.newUsers.concat([this.state.searchText])
    });
  };

  render() {
    return (
      <div>
        <p>Invite users to this shopping list.</p>
        <ul>
          {this.state.adminUsers.map(user => {
              return <li key={user} style={{color: 'rgba(0, 0, 0, 0.3)'}}>{user} (Admin)</li>
          })}
          {this.state.otherUsers.map(user => {
              return <li key={user}>{user}</li>
          })}
          {this.state.newUsers.map(user => {
              return <li key={user} style={{color: 'green'}}>{user}</li>
          })}
        </ul>
        <AutoComplete
          hintText="Enter an email address..."
          searchText={this.state.searchText}
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

export default InviteUsers;