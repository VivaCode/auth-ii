import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {
    state = {
        users: []
    };

  render() {
    return (
      <div>
        <h2>User List</h2>
        <ul>
            {this.state.users.map(user => (<li key={user.id}>{user.username}</li>))}
        </ul>
      </div>
    );
  }
  componentDidMount() {
      const token = localStorage.getItem('jwt');
      const endpoint = 'http://localhost:8000/users';
      const options = {
          headers: {
              Authorization: token,
          },
      };
      axios
        .get(endpoint, options)
        .then(res => {
            console.log(res.data);
            this.setState({users:res.data.users});
        })
        .catch(err => {
            console.log('ERROR', err)
        });
  }
}

export default Users;