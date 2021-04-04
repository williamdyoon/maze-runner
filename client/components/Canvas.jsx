import React, { Component, useState, useRef } from 'react';
import * as d3 from 'd3';
import * as fc from 'd3fc';

class Canvas extends Component {
  componentDidMount() {
    // const xScale = d3.scaleLinear().domain([0, 10]);

    // const xAxis = d3.axisBottom(xScale);

    // const xAxisContainer = d3
    //   .select('#x-axis')

    //   .on('measure', (event) => {
    //     const { width } = event.detail;
    //     xScale.range([0, width]);
    //   })
    //   .on('draw', (event) => {
    //     d3.select(event.currentTarget).select('svg').call(xAxis);
    //   });

    // // Now that the event handlers are added, request a redraw
    // xAxisContainer.node().requestRedraw();

    const container = document.querySelector('d3fc-canvas');

    const xScale = d3.scaleLinear().domain([0, 1]);

    const yScale = d3.scaleLinear().domain([0, 1]);

    const gridline = fc
      .annotationCanvasGridline()
      .xScale(xScale)
      .yScale(yScale);

    d3.select(container)
      .on('draw', () => {
        gridline();
      })
      .on('measure', (event) => {
        const { width, height } = event.detail;
        xScale.range([10, width - 30]);
        yScale.range([5, height - 20]);

        const ctx = container.querySelector('canvas').getContext('2d');
        gridline.context(ctx);
      });

    container.requestRedraw();
    console.log('container.requestRedraw();:', container.requestRedraw());
  }
  render() {
    return <div ref={(ref) => (this.mount = ref)} />;
  }
}

// class Canvas extends Component {
//   constructor(props) {
//     super(props);
//   }
//   componentDidMount() {
//     this.renderGrid();
//   }
//   componentDidUpdate() {
//     this.renderGrid();
//   }
//   renderGrid() {
//     this.grid = d3.svg
//       .axis()
//       .scale(this.props.scale)
//       .orient(this.props.orient)
//       .ticks(this.props.ticks)
//       .tickSize(-this.props.len, 0, 0)
//       .tickFormat('');
//     var node = ReactDOM.findDOMNode(this);
//     d3.select(node).call(this.grid);
//   }
//   render() {
//     var translate = 'translate(0,' + this.props.h + ')';
//     return (
//       <g
//         className={this.props.className}
//         transform={this.props.gridType == 'x' ? translate : ''}
//       ></g>
//     );
//   }
// }

// class Canvas extends Component {
//   constructor(props) {
//     super(props);
//     this.myRef = React.createRef();
//   }
//   componentDidMount() {
//     //   // stuff happens here
//     const xScale = d3.scaleLinear().domain([0, 1]);
//     const yScale = d3.scaleLinear().domain([0, 1]);
//     const gridline = fc
//       .annotationCanvasGridline()
//       .xScale(xScale)
//       .yScale(yScale);
//     // const container = this.myRef;
//     //   const container = document.querySelector('d3fc-canvas');
//     // d3.select(container).on('draw', () => {
//     //   gridline();
//     // });
//     //     .on('measure', (event) => {
//     //       const { width, height } = event.detail;
//     //       xScale.range([10, width - 30]);
//     //       yScale.range([5, height - 20]);
//     //       const ctx = container.querySelector('canvas').getContext('2d');
//     //       gridline.context(ctx);
//     //     });
//     //   container.requestRedraw();
//   }
//   render() {
//     // return <div ref={this.myRef} />;
//     return (
//       <div>
//         <h1>testtesttest</h1>
//       </div>
//     );
//   }
// }

export default Canvas;
