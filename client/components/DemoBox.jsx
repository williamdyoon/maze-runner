/**
 * ************************************
 *
 * @module      DemoBox.jsx
 * @author      William Yoon
 * @date        2021-04-03
 * @description DemoBox using 3JS Library
 * @source      https://justinclanglinais.medium.com/using-three-js-to-make-a-3d-scene-in-react-js-e24178098eee
 *
 * ************************************
 */

import React, { Component } from 'react';
import * as THREE from 'three';

// 3D scene requires three main elements: scene, camera, and renderer
class DemoBox extends Component {
  componentDidMount() {
    // scene
    var scene = new THREE.Scene();

    // camera
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // renderer
    var renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth / 1.5, window.innerHeight / 1.5);
    this.mount.appendChild(renderer.domElement);

    // geometry object: width, height, length
    var geometry = new THREE.BoxGeometry(0.1, 0.5, 0.7);

    // material
    var material = new THREE.MeshStandardMaterial({ color: 'white' });

    // meshing geometry and material together
    var cube = new THREE.Mesh(geometry, material);

    // light effect
    const light = new THREE.HemisphereLight('skyblue', 'orange', 1);

    // add cube object to scene
    scene.add(cube);

    // add light to scene
    scene.add(light);

    // set camera position: z-axis position
    camera.position.z = 1;

    // animation
    var animate = function () {
      requestAnimationFrame(animate);

      // rotate object in x, y, and z axis at a random rate
      cube.rotation.x += Math.random() * 0.04;
      cube.rotation.y += Math.random() * 0.02;
      cube.rotation.z += Math.random() * 0.1;

      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;
      // cube.rotation.z += 0.01;

      // render the scene and camera
      renderer.render(scene, camera);
    };

    // animate!
    animate();
  }
  render() {
    return <div ref={(ref) => (this.mount = ref)} />;
  }
}
export default DemoBox;
