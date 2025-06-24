import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Model from './Model'




const Scene = () => {
  return (
   <Canvas style={{
    width:'100%',
    height: '72vh'
      
    
   }}>
    <directionalLight intensity={3} position={[0, 3, 2]} />
    <Environment preset='city' />
    <Model />
   </Canvas>
  )
}

export default Scene
