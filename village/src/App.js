import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  } 
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        this.setState(() => ({ smurfs: res.data }));
      })
      .catch(err => {
        console.error('Server Error', err);
      });
  }

  addSmurf = (e, smurf) => {
    e.preventDefault();
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        this.setState(() => ({ smurfs: res.data }));
      })
      .catch(err => {
        console.error('Server Error', err);
      });
  }

  render() {
    return (
      <div className="App">
        <div className="navBar">
          <NavBar />
        </div>
        <Route path='/smurf-form' render={props => <SmurfForm addSmurf={this.addSmurf}/>} />
        <Route exact path='/' render={props => <Smurfs smurfs={this.state.smurfs} />} />
      </div>
    );
  }
}

export default App;
