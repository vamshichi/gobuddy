"use client"

import { useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { useGLTF, OrbitControls, Stage } from "@react-three/drei"

function AirplaneModel() {
  const { scene } = useGLTF("/models/airplane.glb")
  return (
    <primitive
      object={scene}
      scale={0.5}              // 👈 tweak this value up/down
      rotation={[0, Math.PI / 2, 0]}
      position={[0, 0, 0]}
    />
  )
}

export default function FlightLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-sky-100 flex items-center justify-center overflow-hidden">

      {/* runway */}
     
      {/* 3D plane */}
      <div className="plane w-96 h-96 px-18 pt-6 pb-4">
        <Canvas camera={{ position: [0, 2, 8], fov: 40 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 5, 5]} intensity={2} />
          <Stage environment="city" adjustCamera={true}>  {/* 👈 auto-fits model */}
            <AirplaneModel />
          </Stage>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

    </div>
  )
}