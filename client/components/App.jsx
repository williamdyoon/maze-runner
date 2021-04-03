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

import DemoBox from './DemoBox';
// import DemoDice from './DemoDice';
// import DemoReactThreeFiber from './DemoReactThreeFiber';
import DemoEuler from './DemoEuler';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>🔥🔥🔥 3JS 🔥🔥🔥</h1>
        {/* <DemoEuler /> */}
        {/* <DemoReactThreeFiber /> */}
        {/* <DemoDice /> */}
        <br></br>
        <DemoBox />
      </div>
    );
  }
}

export default App;
