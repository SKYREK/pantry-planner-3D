import React from "react";
import { usePlane } from "@react-three/cannon";

function GreenPlane() {
  const [ref] = usePlane(() => ({
    position: [0, 0, 0],
    rotation: [-Math.PI / 2, 0, 0],
    fixed: true, // Make the plane immovable
  }));

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color="#00ff00" />
    </mesh>
  );
}

export default GreenPlane;
