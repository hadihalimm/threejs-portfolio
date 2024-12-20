/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Lasse Harm (https://sketchfab.com/GreenLineStudio)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/coffee-cup-8acd10b3f80344d79202d8c2dbfa6e61
Title: Coffee Cup
*/
import { useGSAP } from "@gsap/react";
import { Float, useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useRef, useState } from "react";

const CoffeeCup = (props) => {
  const { nodes, materials } = useGLTF("/models/coffee_cup.glb");
  const coffeeRef = useRef();
  const [hovered, setHovered] = useState(false);

  useGSAP(() => {
    gsap
      .timeline({
        repeat: -1,
        repeatDelay: 0.5,
      })
      .to(coffeeRef.current.rotation, {
        y: hovered ? "+=2" : `+=${Math.PI * 2}`,
        x: hovered ? "+=2" : `-=${Math.PI * 2}`,
        duration: 2.5,
        stagger: {
          each: 0.15,
        },
      });
  });

  return (
    <Float floatIntensity={1}>
      <group
        ref={coffeeRef}
        rotation={[5, -0.1, 0]}
        {...props}
        dispose={null}
        onPointerEnter={() => setHovered(true)}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_0.geometry}
          material={materials.white}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials.brown}
        />
      </group>
    </Float>
  );
};

useGLTF.preload("/models/coffee_cup.glb");

export default CoffeeCup;
