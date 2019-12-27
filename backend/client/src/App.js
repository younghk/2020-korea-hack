import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { render } from 'jade';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: []
    }
  }

  getUsers = _ => {
    console.log('try getUsers')
    const apiURL = 'http://localhost:3001/'
    axios.get(apiURL+'users').then((data) => {
      console.log(data.data.users);
      this.setState({
        users: data.data.users,
      });
    }).catch(error => console.log(error));
  }

  componentDidMount = () =>{
    this.getUsers();
  }

  showUsers = user => <div key={user.id}>{user.username}</div>

  render(){
    const { users } = this.state;
    return (
      <div className="App">
        {users.map(this.showUsers)}
      </div>
    );
  }
}

export default App;
