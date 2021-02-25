// Constructor
// render
// componentDidMount (Content Visible on screen)
// componentDidUpdate (Wait for updates)
// componentWillUnmount (wait until this component in not longer shown)
import React from 'react';

class LifeCycle extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {};
  //   }

  // Alternative to init a State
  state = {};
  componentDidMount() {
    this.setState({
      message: 'Update State using Component Did Mount Life Cycle Method',
    });
  }

  render() {
    return <h1> {this.state.message} </h1>;
  }
}

export default LifeCycle;
