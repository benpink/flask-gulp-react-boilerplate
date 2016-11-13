import React from 'react';

export default function HelloWorld(props) {
  return (
    <h1>Hello {props.planet}!</h1>
  );
}

HelloWorld.propTypes = {
  planet: React.PropTypes.string
};
