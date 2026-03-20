"use client"

import { useGLTF } from "@react-three/drei"

export default function Plane(props: any) {
  const { scene } = useGLTF("/models/airplane.glb")

  return <primitive object={scene} scale={0.6} {...props} />
}