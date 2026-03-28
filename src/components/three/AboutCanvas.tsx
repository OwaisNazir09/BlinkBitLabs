"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function RingStack() {
  const g = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!g.current) return;
    const t = state.clock.elapsedTime;
    g.current.rotation.z = t * 0.1;
    g.current.rotation.x = Math.sin(t * 0.18) * 0.06;
  });

  const tones = ["#e5e5e5", "#d4d4d4", "#fafafa"];

  return (
    <Float speed={1.4} rotationIntensity={0.32} floatIntensity={0.42}>
      <group ref={g}>
        {[0, 1, 2].map((i) => (
          <mesh key={i} rotation={[Math.PI / 2.4, 0, i * 0.6]}>
            <torusGeometry args={[1.1 + i * 0.22, 0.04, 16, 64]} />
            <meshStandardMaterial
              color={tones[i]}
              emissive="#0a0a0a"
              emissiveIntensity={0.35}
              metalness={0.88}
              roughness={0.22}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

export function AboutCanvas() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 opacity-45"
      aria-hidden
    >
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[3, 2, 4]} intensity={0.95} color="#ffffff" />
        <pointLight position={[-2, -1, 3]} intensity={0.4} color="#a3a3a3" />
        <RingStack />
      </Canvas>
    </div>
  );
}
