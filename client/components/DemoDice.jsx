/**
 * ************************************
 *
 * @module      DemoDice.jsx
 * @author      William Yoon
 * @date        2021-04-03
 * @description DemoDice using 3JS Library and react-three-fiber
 * @source      https://www.smashingmagazine.com/2020/11/threejs-react-three-fiber/
 * @incomplete  !!!
 * ************************************
 */

// react hooks: useRef, useState, useMemo
import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import * as THREE from 'three';
import five from '../assets/five.png';

// const Box = (props) => {
//   const mesh = useRef();

//   const [active, setActive] = useState(false);

//   useFrame(() => {
//     mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
//   });

//   const texture = useMemo(() => new THREE.TextureLoader().load(five), []);

//   return <Box />;
};
const Box = (props) => {
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [2, 2, 2] : [1.5, 1.5, 1.5]}
      onClick={(e) => setActive(!active)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshBasicMaterial attach="material" transparent side={THREE.DoubleSide}>
        <primitive attach="map" object={texture} />
      </meshBasicMaterial>
    </mesh>
  );
};
