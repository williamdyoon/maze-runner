/**
 * ************************************
 *
 * @module  App.jsx
 * @author
 * @date
 * @description
 *
 * ************************************
 */

import React, { Component } from 'react';
import Demo from './components/Demo';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>HOT MODULE STUFF1</h1>
        <Demo />
      </div>
    );
  }
}

export default App;
