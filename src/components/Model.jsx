import { MeshTransmissionMaterial, Text, useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import React, { useRef } from 'react'
import { useControls, Leva } from 'leva';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to("Text", {
  opacity:0,
  duration: 2.2,
  
})

const Model = () => {
    const mesh = useRef();
    const { nodes } =useGLTF("./torus.glb")
    const { viewport } = useThree();

    useFrame( ()=> {
        mesh.current.rotation.x += 0.02
    }

    )

    const materialProps = useControls ({
        thickness: { value:0.2, min: 0, max: 3, step: 0.05},
        roughness: { value: 0, min: 0, max: 1, step: 0.1},
        transmission: { value: 1, min: 0, max: 1, step: 0.1},
        ior: { value: 1.2, min: 0, max: 3, step: 0.1},
        chromaticAberration: { value: 0.02, min: 0, max: 1},
        backside: { value: true},
    })

    return (
    <group scale={viewport.width / 4}>

        <Leva hidden={true} />
    <Text 
    fontSize={0.60} position={[0, -0.0005, -0.2]}
    lineHeight={1}
    font='./fonts/Poppins-Black.ttf'
    >
        KREATIVE.
    </Text>

        <mesh ref={mesh} {...nodes.Torus002}>
            <MeshTransmissionMaterial {...materialProps}/>
        </mesh>
    </group>
  )
}

export default Model