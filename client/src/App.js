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

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  toggleForm = (e) => {
    e.preventDefault();
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

  render() {
    return (
      <Provider value={{ kudos: this.state.kudos,
                        toggleForm: this.toggleForm,
                        modalState: this.state.modalState,
                        handleChange: this.handleChange,
                        users: this.state.users }}>
        <Home />
        <KudoForm/>
      </Provider>
    );
  }
}

export default App;
