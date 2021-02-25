import React from 'react';

class PropsClass extends React.Component {
  render() {
    return <h1> {this.props.child} </h1>;
  }
}

export default PropsClass;
