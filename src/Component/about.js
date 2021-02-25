import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h6> Click Here to Navigate</h6>
      <Link to="/main/term">Term and Condition</Link>
    </div>
  );
};

export default About;
