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
import MainContainer from './containers/MainContainer.jsx';
import DemoMaterial from './components/DemoMaterial.jsx';
import Canvas from './components/Canvas';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>hello</h3>
        <DemoMaterial />
        <Canvas />
        <MainContainer />
        {/* <DemoMaterial /> */}
      </div>
    );
  }
}

export default App;
