import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name: '',
        age: '',
        height: ''
    }};
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.addSmurf(event, this.state.smurf)
    this.setState({ smurf: 
      { name: '', age: '', height: ''}});
    }

  handleInputChange = e => {
    e.persist()
    this.setState(prevState => ({
      smurf: {
          ...prevState.smurf,
        [e.target.name]: e.target.value
      }
    }));
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="Name"
            value={this.state.name}
            name="name"
            type="text"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Age"
            value={this.state.age}
            name="age"
            type="number"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Height"
            value={this.state.height}
            name="height"
            type="text"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
