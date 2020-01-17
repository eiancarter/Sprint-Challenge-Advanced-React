import React from 'react';
import './App.css';
import PlayerCard from './components/PlayerCard';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
    console.log('constructor works!')
  }

  componentDidMount(){

    axios
    .get(`http://localhost:5000/api/players`)
    .then(response => {
      console.log(response)
      this.setState({
        followers: response.data
      });
    })
    .catch( error => {
      console.log('try again!', error);
    })
  }

  componentWillUnmount() {
  }


  componentDidUpdate(prevProps, prevState) {
    console.log('update is woking!', prevState.cards, this.state.cards);
    console.log('followers is working!', this.state.followers);
  }

  render() {
    return (
      <div className="App">
        <PlayerCard players={this.state.players} />
      </div>
    );
  }
}

export default App;
