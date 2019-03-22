import React, { Component } from 'react';
import Home from './components/Home';
import KudoForm from './components/KudoForm';
import { Provider } from './contexts/KudosContext';
import axios from 'axios';


class App extends Component {
  state = {
    kudos: [],
    users: [],
    sender: "",
    title: "",
    body: "",
    receiver: "",
    modalState: false
  }

  componentDidMount() {
    axios.get('/api/kudos').then(kudos => {
      this.setState({
        kudos: kudos.data
      });
    }).catch(err => {
      console.log(err);
    });

    axios.get('/api/users').then(userList => {
      this.setState({
        users: userList.data
      });
    }).catch(err => {
      console.log(err);
    });
  }

  handleTextChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleUserChange = (e) => {
    console.log(e.target);
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  toggleForm = (e) => {
    if (e) {
      e.preventDefault();
    }
    if (this.state.modalState) {
      this.setState({
        modalState: false
      })
    } else {
      this.setState({
        modalState: true
      })
    }
  }

  sendKudo = (e) => {
    const { sender, receiver, title, body } = this.state;
    e.preventDefault();
    if (sender && receiver && title && body) {
      axios.post('/api/kudo', {
        sender: sender,
        title: title,
        body: body,
        receiver: receiver
      }).then(response => {
        axios.get('/api/kudos').then(kudos => {
          this.setState({
            kudos: kudos.data
          });
        }).catch(err => {
          console.log(err);
        });
        console.log(response);
      }).catch(err => {
        console.log(err);
      });
    }
  }

  render() {
    return (
      <Provider value={{
        kudos: this.state.kudos,
        toggleForm: this.toggleForm,
        modalState: this.state.modalState,
        handleTextChange: this.handleTextChange,
        handleUserChange: this.handleUserChange,
        users: this.state.users,
        sendKudo: this.sendKudo
      }}>
        <Home />
        <KudoForm />
      </Provider>
    );
  }
}

export default App;
