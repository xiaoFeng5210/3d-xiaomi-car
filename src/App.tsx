import './App.css'
import {Suspense, useEffect, useRef} from "react";
import {Canvas, useFrame} from '@react-three/fiber'
import {Stats, OrbitControls} from '@react-three/drei'
import * as Three from 'three'
import XiaomiSuv from "./components/xiaomi-suv.tsx";
import SpotlightPlane from "./components/spotlight-plane.tsx";
import * as React from "react";

function App() {
  const canvasRef = useRef<HTMLDivElement>(null)
  const camera = {fov: 55, near: 0.1, far: 1000, position: [3, 3, 3]}
  
  return (
    <div ref={canvasRef} className="w-screen h-screen text-amber-700 text-3xl">
      <Canvas camera={camera as any}>
        <Suspense>
          <color attach="background" args={["#d4cfa3"]}/>
          <ambientLight intensity={2} color={0x404040}/>
          {/*<directionalLight position={[-15, 15, 0]} color="white" intensity={3} receiveShadow castShadow/>*/}
          <spotLight position={[0, 15, 0]} color="#ffffff" intensity={20} penumbra={0.2} decay={1} distance={30}
                     angle={Math.PI / 8} castShadow />
          <spotLight position={[0, 50, 0]} intensity={25} penumbra={1} angle={0.3} castShadow decay={1}/>
          <SpotlightPlane/>
          {/*模型展示*/}
          <XiaomiSuv/>
          <OrbitControls/>
          <Stats/>
          <axesHelper/>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
