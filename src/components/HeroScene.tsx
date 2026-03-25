import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function Planet() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x += 0.002;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#00f2ff"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          wireframe
        />
      </Sphere>
    </Float>
  );
}

function Grid() {
  return (
    <gridHelper args={[20, 20, 0x00f2ff, 0x111111]} position={[0, -2, 0]} rotation={[0, 0, 0]} />
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 1, 5]} />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#bc13fe" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#00f2ff" />
        <spotLight position={[0, 5, 0]} intensity={0.5} penumbra={1} color="#ffffff" />
        <Planet />
        <Grid />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        <fog attach="fog" args={['#000000', 5, 15]} />
      </Canvas>
    </div>
  );
}
