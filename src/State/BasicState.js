// state is a js Object
// When state change component start re-render
// State Initialize when a component is created (inside a Constructor)
// State object can be only updated using the function setstate

import React from 'react';

class BasicState extends React.Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = { lat: null, message: 'This is a State Example' };
  }

  render() {
    if (this.state.lat) {
      return (
        <>
          <h1> {this.state.lat} </h1>
        </>
      );
    } else {
      return (
        <>
          <h1> {this.state.message} </h1>
        </>
      );
    }
  }
}

export default BasicState;
