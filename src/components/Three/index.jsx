import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import React, { useRef } from "react";
import RedBall from "../RedBall";
import GreenPlane from "../GreenPlane";
export default function Three() {
    const sphereRef = useRef(null)
    const orbitRef = useRef(null)
    return(
        <>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <OrbitControls ref={orbitRef} enableDamping={false} max/>

        <RedBall orbit={orbitRef}/>
        <GreenPlane/>
        <mesh position={[0,5,-5]}>
            <boxGeometry args={[10, 10, 1]} />
            <meshStandardMaterial color="#0000ff" />
        </mesh>
        <mesh position={[5,5,0]}>
            <boxGeometry args={[1, 10, 10]} />
            <meshStandardMaterial color="#00ffff" />
        </mesh>
        <ambientLight intensity={0.5} />
    </>
    )
    
}