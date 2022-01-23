<<<<<<< HEAD
import React, { Component } from "react";
import Navbar from "../Navbar.jsx";
import "../styles.scss";
=======
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
import Navbar from '../Navbar.jsx';
import '../styles.scss';
>>>>>>> 919873632107565e82fa43943809f45d42d4f077

class MainContainer extends Component {
  constructor(props) {
    // path refers to nodes of shortest path
    // onFire refers to nodes propagated from algo search
    super(props);
    this.state = {
      board: {},
      mouseIsPressed: false,
      entryNodeMode: false,
      targetNodeMode: false,
      wallMode: false,
<<<<<<< HEAD
      headPosition: "0,0",
      targetPosition: "9,9",
=======
      headPosition: '6,11',
      targetPosition: '6,18',
>>>>>>> 919873632107565e82fa43943809f45d42d4f077
      path: [],
      onFire: [],
    };
    this.addWallMode = this.addWallMode.bind(this);
    this.entryNodeMode = this.entryNodeMode.bind(this);
    this.targetNodeMode = this.targetNodeMode.bind(this);
    this.algorithm = this.algorithm.bind(this);
    this.clearBoard = this.clearBoard.bind(this);
  }

<<<<<<< HEAD
  // initialize the board state as an empty object
  // and populate it with object { `y, x`: { visited: false }, }
  componentDidMount() {
    const board = {};
=======
  // creation of available coordinates
  componentDidMount() {
    const board = {};
    this.setState({onFire: []});
>>>>>>> 919873632107565e82fa43943809f45d42d4f077
    for (let i = 0; i < 15; i++) {
      for (let j = 0; j < 30; j++) {
        board[`${i},${j}`] = {
          visited: false,
        };
      }
    }
    this.setState({ board });
<<<<<<< HEAD
    // console.log(this.state);
  }
  // enable wall mode
=======
  }

  // logic to be in add wall mode
>>>>>>> 919873632107565e82fa43943809f45d42d4f077
  addWallMode() {
    this.setState(
      {
        entryNodeMode: false,
        targetNodeMode: false,
        wallMode: true,
<<<<<<< HEAD
      },
      function () {
        // console.log('addwallmode', this.state);
      }
    );
  }
=======
      }
    );
  }

  // logic to be in add head node
>>>>>>> 919873632107565e82fa43943809f45d42d4f077
  entryNodeMode() {
    this.setState(
      {
        entryNodeMode: true,
        targetNodeMode: false,
        wallMode: false,
<<<<<<< HEAD
      },
      function () {
        // console.log('entrynodemode', this.state);
      }
    );
  }
=======
      }
    );
  }

  // logic to be in add tail node
>>>>>>> 919873632107565e82fa43943809f45d42d4f077
  targetNodeMode() {
    this.setState(
      {
        entryNodeMode: false,
        targetNodeMode: true,
        wallMode: false,
<<<<<<< HEAD
      },
      function () {
        // console.log('targetnodemode', this.state);
      }
    );
  }
=======
      }
    );
  }

  // logic to add walls when mouse button down
>>>>>>> 919873632107565e82fa43943809f45d42d4f077
  handleMouseDown(property) {
    if (this.state.wallMode === false) {
      return;
    }
    const board = { ...this.state.board };
    board[property].visited = true;
    board[property].wall = true;
    this.setState({ board: board, mouseIsPressed: true });
  }
<<<<<<< HEAD
=======

  // logic to paint walls by hovering cursor on grid
>>>>>>> 919873632107565e82fa43943809f45d42d4f077
  handleMouseEnter(property) {
    if (this.state.wallMode === false || this.state.mouseIsPressed === false) {
      return;
    }
    const board = { ...this.state.board };
    board[property].visited = true;
    board[property].wall = true;
    this.setState({ board: board });
  }
<<<<<<< HEAD
=======

  // logic to stop painting walls when mouse button is released
>>>>>>> 919873632107565e82fa43943809f45d42d4f077
  handleMouseUp() {
    if (this.state.wallMode === false) return;
    this.setState({ mouseIsPressed: false });
  }
<<<<<<< HEAD
=======

  // adding a head node
>>>>>>> 919873632107565e82fa43943809f45d42d4f077
  handleHead(coordinates) {
    if (this.state.entryNodeMode === false) return;
    this.setState({ headPosition: coordinates });
  }
<<<<<<< HEAD
=======

  // adding a tail node
>>>>>>> 919873632107565e82fa43943809f45d42d4f077
  handleTarget(coordinates) {
    if (this.state.targetNodeMode === false) return;
    this.setState({ targetPosition: coordinates });
  }
<<<<<<< HEAD
=======

  // logic to remove all walls/paths and reset head/tail node
>>>>>>> 919873632107565e82fa43943809f45d42d4f077
  clearBoard() {
    const board = {};
    for (let i = 0; i < 15; i++) {
      for (let j = 0; j < 30; j++) {
        board[`${i},${j}`] = {
          visited: false,
        };
      }
    }
    this.setState({
      board: board,
      mouseIsPressed: false,
      entryNodeMode: false,
      targetNodeMode: false,
      wallMode: false,
      headPosition: '6,11',
      targetPosition: '6,18',
      path: [],
      onFire: [],
    });
  }
<<<<<<< HEAD
  algorithm() {
    const { headPosition, targetPosition, board, path, onFire } = this.state;

    if (path.length !== 0) {
      const board = Object.assign(board);
      // console.log('1', JSON.stringify(board));
=======

  // algo to find shortest path between head and tail node
  algorithm() {

    if (this.state.path.length !== 0) {
      const board = Object.assign(this.state.board);
>>>>>>> 919873632107565e82fa43943809f45d42d4f077
      for (const property in board) {
        board[property].visited = false;
        if (board[property].previousNode) delete board[property].previousNode;
      }
<<<<<<< HEAD
      // console.log('2', JSON.stringify(board));
=======
>>>>>>> 919873632107565e82fa43943809f45d42d4f077
      this.setState({
        board: board,
        path: [],
      });
    }

<<<<<<< HEAD
    const nodes = Object.assign(board);
    const head = headPosition;
    const target = targetPosition;
    nodes[head].visited = true;
    nodes[head].previousNode = null;

    const queue = [{ [head]: nodes[head] }];
    const fire = onFire.slice();

    const helper = (queue, fire) => {
      // console.log('base queue every time helper is called', JSON.stringify(queue))
      // console.log('fire:', fire);
=======
    const nodes = Object.assign(this.state.board);
    const head = this.state.headPosition;
    const target = this.state.targetPosition;

    nodes[head].visited = true;
    nodes[head].previousNode = null;
    const queue = [{ [head]: nodes[head] }];
    const fire = this.state.onFire.slice();

    function helper(queue, fire) {
>>>>>>> 919873632107565e82fa43943809f45d42d4f077
      for (let i = 0; i < queue.length; i++) {
        if (Object.keys(queue[i]) == target) {
          const path = [];
          let previousNode = queue[i][target].previousNode;
          while (previousNode !== null) {
            path.push(previousNode);
            previousNode = nodes[previousNode].previousNode;
          }
<<<<<<< HEAD
          // console.log('path1', path);
=======
>>>>>>> 919873632107565e82fa43943809f45d42d4f077
          return path;
        }
      }
      const position = Object.keys(queue[0]);
<<<<<<< HEAD
      let string = position[0];
      const arrPosition = position[0].split(",");

=======
      // position = ['0,0']
      const string = position[0];
      // string -> '0,0'
      const arrPosition = position[0].split(',');
      // 'arrPosition -> ['0', '0']
      // console.log('arrPosition', JSON.stringify(arrPosition))
      //want to check [-1,0] [1,0] [0,1] [0,-1]
      // i = -1 and i = 1
>>>>>>> 919873632107565e82fa43943809f45d42d4f077
      for (let i = -1; i < 2; i++) {
        if (i !== 0) {
          const newPosition = `${Number(arrPosition[0]) + i},${Number(
            arrPosition[1]
          )}`;
          const newPosition2 = `${Number(arrPosition[0])},${
            Number(arrPosition[1]) + i
          }`;

          if (
            nodes[newPosition] !== undefined &&
            nodes[newPosition].visited === false
          ) {
            nodes[newPosition].visited = true;
            fire.push(newPosition);
<<<<<<< HEAD
            // console.log("nodes[newPosition", nodes[newPosition])
=======
>>>>>>> 919873632107565e82fa43943809f45d42d4f077
            nodes[newPosition].previousNode = string;
            queue.push({ [newPosition]: nodes[newPosition] });
          }
          if (
            nodes[newPosition2] !== undefined &&
            nodes[newPosition2].visited === false
          ) {
            nodes[newPosition2].visited = true;
            fire.push(newPosition2);
            nodes[newPosition2].previousNode = string;
            queue.push({ [newPosition2]: nodes[newPosition2] });
          }
        }
      }
      queue.shift();
<<<<<<< HEAD
      // console.log('queue', queue);
      if (queue.length === 0) return undefined;

=======
      if (queue.length === 0) {
        return undefined;
      }
>>>>>>> 919873632107565e82fa43943809f45d42d4f077
      return helper(queue.slice(), fire);
    };

    const array = helper(queue, fire);
    if (array === undefined) {
      alert("No path found. Try again.");
    }
    array.pop();
<<<<<<< HEAD
    const path1 = array.reverse();
    // console.log('path', path);
    // console.log('fire', fire);
=======
    const path = array.reverse();
>>>>>>> 919873632107565e82fa43943809f45d42d4f077
    fire.pop();
    const finalFire = fire.slice();

    setTimeout(
      function () {
        console.log("settimeeout");
        return this.setState({
          onFire: [],
          path: path1,
        });
      }.bind(this),
      finalFire.length * 25
    );
    this.setState({ path: path, onFire: finalFire });
  }

  render() {
    const { board, onFire, path, headPosition, targetPosition } = this.state;
    const grid = [];
    for (const property in board) {
<<<<<<< HEAD
      let id = property;
      if (onFire.includes(property) && onFire.length !== 0) {
=======
      const id = property;

      // populating grid with propagation nodes from algo search
      if (this.state.onFire.includes(property) && this.state.onFire.length !== 0) {
>>>>>>> 919873632107565e82fa43943809f45d42d4f077
        grid.push(
          <button
            id={id}
            key={id}
            className={
              "onFire" + " " + "anim-delay-" + onFire.indexOf(property)
            }
            onMouseDown={() => {
              this.handleMouseDown(property);
            }}
            onMouseOver={() => {
              this.handleMouseEnter(property);
            }}
            onMouseUp={() => {
              this.handleMouseUp(property);
            }}
            onClick={() => {
              this.handleHead(property);
              this.handleTarget(property);
            }}
            onFocus={() => void 0}
          ></button>
        );
<<<<<<< HEAD
      } else if (path.includes(property)) {
        grid.push(
          <button
            id={id}
            className={"path" + " " + "anim-delay-2-" + path.indexOf(property)}
=======
      }
      // populating grid with nodes of shortest path
      else if (this.state.path.includes(property)) {
        grid.push(
          <button
            id={id}
            key={id}
            className={
              'path' + ' ' + 'anim-delay-2-' + this.state.path.indexOf(property)
            }
>>>>>>> 919873632107565e82fa43943809f45d42d4f077
            onMouseDown={() => {
              this.handleMouseDown(property);
            }}
            onMouseOver={() => {
              this.handleMouseEnter(property);
            }}
            onMouseUp={() => {
              this.handleMouseUp(property);
            }}
            onClick={() => {
              this.handleHead(property);
              this.handleTarget(property);
            }}
            onFocus={() => void 0}
          ></button>
        );
<<<<<<< HEAD
      } else if (property === headPosition) {
=======
      // populating grid with head node
      } else if (property === this.state.headPosition) {
>>>>>>> 919873632107565e82fa43943809f45d42d4f077
        grid.push(
          <button
            id={id}
            key={id}
            className="head"
            onMouseDown={() => {
              this.handleMouseDown(property);
            }}
            onMouseOver={() => {
              this.handleMouseEnter(property);
            }}
            onMouseUp={() => {
              this.handleMouseUp(property);
            }}
            onClick={() => {
              this.handleHead(property);
              this.handleTarget(property);
            }}
            onFocus={() => void 0}
          ></button>
        );
<<<<<<< HEAD
      } else if (property === targetPosition) {
=======
      // populating grid with tail node
      } else if (property === this.state.targetPosition) {
>>>>>>> 919873632107565e82fa43943809f45d42d4f077
        grid.push(
          <button
            id={id}
            key={id}
            className="target"
            onMouseDown={() => {
              this.handleMouseDown(property);
            }}
            onMouseOver={() => {
              this.handleMouseEnter(property);
            }}
            onMouseUp={() => {
              this.handleMouseUp(property);
            }}
            onClick={() => {
              this.handleHead(property);
              this.handleTarget(property);
            }}
            onFocus={() => void 0}
          ></button>
        );
      // populating grid with wall nodes 
      } else if (board[property].wall === true) {
        grid.push(
          <button
            id={id}
            key={id}
            className="wallGrid"
            onMouseDown={() => {
              this.handleMouseDown(property);
            }}
            onMouseOver={() => {
              this.handleMouseEnter(property);
            }}
            onMouseUp={() => {
              this.handleMouseUp(property);
            }}
            onClick={() => {
              this.handleHead(property);
              this.handleTarget(property);
            }}
            onFocus={() => void 0}
          ></button>
        );
      // pushing all remaining nodes to the grid
      } else {
        grid.push(
          <button
            id={id}
            key={id}
            className="regularGrid"
            onMouseDown={() => {
              this.handleMouseDown(property);
            }}
            onMouseOver={() => {
              this.handleMouseEnter(property);
            }}
            onMouseUp={() => {
              this.handleMouseUp(property);
            }}
            onClick={() => {
              this.handleHead(property);
              this.handleTarget(property);
            }}
            onFocus={() => void 0}
          ></button>
        );
      }
    }
    return (
      <div>
        <div className="navbar">
          <Navbar
            clearBoard={this.clearBoard}
            runAlgo={this.algorithm}
            addWallMode={this.addWallMode}
            entryNodeMode={this.entryNodeMode}
            targetNodeMode={this.targetNodeMode}
          />
        </div>
        <div className="gap"></div>
        <div className="gridContainer">{grid}</div>
      </div>
    );
  }
}
export default MainContainer;
