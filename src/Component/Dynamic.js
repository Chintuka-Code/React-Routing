import React from 'react';
import { Link } from 'react-router-dom';

const Dynamic = (props) => {
  console.log(props);
  return (
    <div>
      <h6> This is my Dynamic Route</h6>
      if(props.match.params.name == 'rajat')
      {<h1>This is my name: {props.match.params.name} </h1>}
      else{<h1> {props.match.params.name} is chutiya </h1>}
    </div>
  );
};

export default Dynamic;
