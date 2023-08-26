import React, { useRef, useState } from "react";
import { useBox, useSphere } from "@react-three/cannon";

export default function RedBall(props) {
  const { orbit } = props;
  const sphereRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState([0, 0, 0]);
  const [intersection, setIntersection] = useState(null);

  const [ref, api] = useBox(() => ({
    mass: 100,
    position: [0, 5, 0],
    args: [0, 0, 0],
    onCollide: () => {
        console.log("Collided!!!");
    },
  }));

  const handlePointerDown = (event) => {
    setIsDragging(true);
    orbit.current.enabled = false;
    const intersected = event.intersections[0];
    if (intersected && intersected.object === sphereRef.current) {
      const { point } = intersected;
      setIntersection(point);

      const { x, y, z } = sphereRef.current.position;
      setOffset([point.x - x, point.y - y, point.z - z]);
    }
  };

  const handlePointerMove = (event) => {
    if (isDragging) {
      const { point } = event.intersections[0];
      if (point) {
        api.position.set(
          point.x - offset[0],
          point.y - offset[1],
          point.z - offset[2]
        );
      }
    }
  };

  const handlePointerUp = () => {
    orbit.current.enabled = true;
    setIsDragging(false);
    setIntersection(null);
  };

  return (
    <mesh
      ref={(node) => {
        sphereRef.current = node;
        ref.current = node; // Connect the ref to the physics body
      }}
      position={[0, 0, 0]}
      isDraggable={true}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onClick={() => setIsDragging(!isDragging)}
      onPointerLeave={handlePointerUp}
    >
      <boxGeometry args={[5, 10 , 5]} />
      <meshStandardMaterial color="#ff0000" />
    </mesh>
  );
}
