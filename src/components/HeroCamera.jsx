/* eslint-disable react/prop-types */
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";

const HeroCamera = ({ children }) => {
  const groupRef = useRef();

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 15], 0.5, delta);
    easing.dampE(
      groupRef.current.rotation,
      [state.pointer.y / 3, -state.pointer.x / 5, 0],
      0.25,
      delta,
    );
  });

  return <group ref={groupRef}>{children}</group>;
};

export default HeroCamera;
