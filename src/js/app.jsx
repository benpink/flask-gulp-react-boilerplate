import React from 'react';
import HelloWorld from './components/hello-world';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      planet: 'world'
    };
  }
  render() {
    return <HelloWorld planet={this.state.planet} />;
  }
}
