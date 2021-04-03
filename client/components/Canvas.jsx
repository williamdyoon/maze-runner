import React, { Component, useState, useRef } from 'react';
// const container = document.querySelector('d3fc-canvas');
import d3 from 'd3';
import fc from 'd3-fc';

const xScale = d3.scaleLinear().domain([0, 1]);

const yScale = d3.scaleLinear().domain([0, 1]);

const gridline = fc.annotationCanvasGridline().xScale(xScale).yScale(yScale);

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

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}

// container.requestRedraw();

export default Canvas;
