/**
 * ************************************
 *
 * @module      DemoReactThreeFiber.jsx
 * @author      William Yoon
 * @date        2021-04-03
 * @description Demo 3D using 3JS Library and react-three-fiber
 * @source     https://github.com/pmndrs/react-three-fiber
 * @incomplete  !!
 * ************************************
 */

import React, { Component, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { Canvas, useFrame } from '@react-three/fiber';

class Box extends Component {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x += 0.01));


render(){
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 2, 3]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}
}

  // const Box = (props) => {
//     // This reference will give us direct access to the mesh
//     const mesh = useRef();
//     // Set up state for the hovered and active state
//     const [hovered, setHover] = useState(false);
//     const [active, setActive] = useState(false);
//     // Rotate mesh every frame, this is outside of React without overhead
//     useFrame(() => (mesh.current.rotation.x += 0.01));
  
    
//     return (
//       <mesh
//         {...props}
//         ref={mesh}
//         scale={active ? 1.5 : 1}
//         onClick={(event) => setActive(!active)}
//         onPointerOver={(event) => setHover(true)}
//         onPointerOut={(event) => setHover(false)}
//       >
//         <boxGeometry args={[1, 2, 3]} />
//         <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//       </mesh>
//     );
//   };

export default Box;

// ReactDOM.render(
//   <Canvas>
//     <ambientLight />
//     <pointLight position={[10, 10, 10]} />
//     <Box position={[-1.2, 0, 0]} />
//     <Box position={[1.2, 0, 0]} />
//   </Canvas>,
//   document.getElementById('contents')
// );

// import { Canvas, useFrame } from 'react-three-fiber';
// useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
// scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
// <boxBufferGeometry args={[1, 1, 1]} />
