/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders TotalsDisplay and MarketsContainer
 *
 * ************************************
 */

import React, { Component } from 'react';
// import from child components...

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: [],
    };
  }

  componentDidMount() {
    const nodes = buildGrid();
    this.setState({ nodes });

    //  [{x:0, y:0}, {x:1, y:0},{x:0, y:1}]
  }

  render() {
    const { nodes } = this.state;
    const grid = [];

    nodes.forEach((node) => {
      let id = [node.x, node.y]; //[0,0]
      if ((node.x === 0 && node.y === 0) || (node.x === 9 && node.y === 9)) {
        grid.push(<div className="gridNodeColor" id={id}></div>);
      } else {
        grid.push(<div className="grid" id={id}></div>);
      }
      // console.log('id', id
    });
    console.log('grid:', grid);
    return <div className="gridContainer">{grid}</div>;
  }
}

const buildGrid = () => {
  const nodes = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const thisNode = {
        x: j,
        y: i,
        // headNode: [0,0],
        // target: [9,9]
      };
      nodes.push(thisNode);
    }
  }
  return nodes;
};

export default MainContainer;
