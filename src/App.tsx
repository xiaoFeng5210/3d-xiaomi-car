import './App.css'
import {Suspense, useEffect, useRef} from "react";
import {Canvas, useFrame} from '@react-three/fiber'
import {Stats, OrbitControls} from '@react-three/drei'
import * as Three from 'three'
import XiaomiSuv from "./components/xiaomi-suv.tsx";

function App() {
  const canvasRef = useRef<HTMLDivElement>(null)
  const camera = {fov: 55, near: 0.1, far: 1000, position: [16, 12, -16]}
  
  return (
    <div ref={canvasRef} className="w-screen h-screen text-amber-700 text-3xl">
      <Canvas camera={camera as any}>
        <Suspense>
          <color attach="background" args={"#d4cfa3"}/>
          <ambientLight intensity={0.2} color={0x404040}/>
          <spotLight position={[0, 15, 0]} intensity={2} penumbra={1} angle={0.3} castShadow/>
          <hemisphereLight args={[0xddeeff, 0x0f0e0d, 0.02]} intensity={5}/>
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
