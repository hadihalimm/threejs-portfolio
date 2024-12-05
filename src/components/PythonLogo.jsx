/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Acvantad (https://sketchfab.com/Acvantad)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/python-programming-language-44d992bf56e244448e9ee5b4da083287
Title: Python Programming language
*/

import { Float, useGLTF } from "@react-three/drei";

const PythonLogo = (props) => {
  const { nodes, materials } = useGLTF("/models/python_logo.glb");
  return (
    <Float floatIntensity={2} speed={3}>
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.material}
          position={[-0.002, 0, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={2.501}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials[".001"]}
          position={[-0.002, 0, 0]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={2.501}
        />
      </group>
    </Float>
  );
};

useGLTF.preload("/models/python_logo.glb");

export default PythonLogo;