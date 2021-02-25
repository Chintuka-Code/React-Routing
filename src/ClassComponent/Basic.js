import React from 'react';
import PropsClass from './PropsinClass';

class Basic extends React.Component {
  render() {
    return (
      <div>
        <h1>Class Base Component </h1>
        <PropsClass child="This message is a props" />
      </div>
    );
  }
}

export default Basic;
