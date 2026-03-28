"use client";

import React, { useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface GeometricObjectProps {
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}

interface FloatingObject {
  id: number;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  rotationSpeed: [number, number, number];
  floatSpeed: number;
  type: 'box' | 'sphere' | 'icosahedron' | 'tetrahedron';
  color: THREE.Color;
}

// Detect device capability level
function getDeviceCapability() {
  if (typeof window === 'undefined') return 'medium';
  const width = window.innerWidth;
  const cores = navigator.hardwareConcurrency || 4;
  
  // Mobile detection
  if (width < 768) return 'low';
  // Tablet/low-end
  if (width < 1024 || cores <= 2) return 'medium';
  // Desktop/high-end
  return 'high';
}

function FloatingObject({ 
  object, 
  mouse 
}: { 
  object: FloatingObject;
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const targetRotation = useRef({ x: 0, y: 0 });
  const currentRotation = useRef({ x: 0, y: 0 });
  
  // Cubic easing function for smoother motion
  const easeInOutCubic = (t: number) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };
  
  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    // Mouse interaction with parallax effect - very smooth
    const mouseInfluence = 0.25;
    targetRotation.current.x = mouse.current.y * mouseInfluence + (object.rotation[0] || 0);
    targetRotation.current.y = mouse.current.x * mouseInfluence + (object.rotation[1] || 0);
    
    // Ultra smooth rotation following with cubic easing
    const lerpFactor = Math.min(delta * 1.8, 1);
    currentRotation.current.x = THREE.MathUtils.lerp(
      currentRotation.current.x,
      targetRotation.current.x,
      easeInOutCubic(lerpFactor)
    );
    currentRotation.current.y = THREE.MathUtils.lerp(
      currentRotation.current.y,
      targetRotation.current.y,
      easeInOutCubic(lerpFactor)
    );
    
    // Apply rotations with slower, more elegant speeds
    const elapsedTime = state.clock.getElapsedTime();
    meshRef.current.rotation.x = currentRotation.current.x + object.rotationSpeed[0] * elapsedTime * 0.5;
    meshRef.current.rotation.y = currentRotation.current.y + object.rotationSpeed[1] * elapsedTime * 0.5;
    meshRef.current.rotation.z += object.rotationSpeed[2] * delta * 0.6;
    
    // Smooth floating animation with gentle curves
    const time = elapsedTime * object.floatSpeed * 0.6;
    const offsetY = Math.sin(time) * 0.4 + Math.cos(time * 0.5) * 0.25;
    const offsetX = Math.cos(time * 0.6) * 0.3;
    const offsetZ = Math.sin(time * 0.7) * 0.25;
    
    meshRef.current.position.y = object.position[1] + offsetY;
    meshRef.current.position.x = object.position[0] + offsetX;
    meshRef.current.position.z = object.position[2] + offsetZ;
  });
  
  const geometry = useMemo(() => {
    switch (object.type) {
      case 'box':
        return new THREE.BoxGeometry(1, 1, 1, 8, 8, 8);
      case 'sphere':
        return new THREE.IcosahedronGeometry(0.7, 5);
      case 'icosahedron':
        return new THREE.IcosahedronGeometry(0.8, 5);
      case 'tetrahedron':
        return new THREE.TetrahedronGeometry(0.9, 2);
      default:
        return new THREE.BoxGeometry(1, 1, 1, 8, 8, 8);
    }
  }, [object.type]);
  
  const geometry_computed = useMemo(() => {
    const geom = geometry as THREE.BufferGeometry;
    geom.computeVertexNormals();
    geom.normalizeNormals();
    return geom;
  }, [geometry]);
  
  return (
    <mesh 
      ref={meshRef} 
      position={object.position} 
      scale={object.scale}
      geometry={geometry_computed}
      castShadow
      receiveShadow
    >
      <meshStandardMaterial
        color={object.color}
        emissive={object.color}
        emissiveIntensity={0.25}
        wireframe={false}
        roughness={0.3}
        metalness={0.8}
        envMapIntensity={1}
      />
    </mesh>
  );
}

function GeometricScene({ mouse }: GeometricObjectProps) {
  const [deviceLevel] = useState(() => getDeviceCapability());
  
  // Adjust object count based on device
  const objectCount = deviceLevel === 'low' ? 4 : deviceLevel === 'medium' ? 6 : 8;
  
  const objects = useMemo(() => {
    const objs: FloatingObject[] = [];
    const colors = [
      new THREE.Color(0.3, 0.7, 1.0),      // Cyan
      new THREE.Color(0.5, 0.2, 1.0),      // Purple
      new THREE.Color(0.9, 0.3, 0.8),      // Magenta
      new THREE.Color(0.2, 0.8, 0.9),      // Light Cyan
      new THREE.Color(0.8, 0.4, 1.0),      // Violet
      new THREE.Color(0.3, 0.9, 0.7),      // Teal
      new THREE.Color(1.0, 0.4, 0.6),      // Pink
      new THREE.Color(0.4, 0.6, 1.0),      // Sky Blue
    ];
    
    const types: Array<'box' | 'sphere' | 'icosahedron' | 'tetrahedron'> = ['box', 'sphere', 'icosahedron', 'tetrahedron'];
    
    for (let i = 0; i < objectCount; i++) {
      const angle = (i / objectCount) * Math.PI * 2;
      const distance = 2.5 + Math.random() * 3;
      
      objs.push({
        id: i,
        position: [
          Math.cos(angle) * distance,
          (Math.random() - 0.5) * 4,
          Math.sin(angle) * distance,
        ],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
        scale: 0.6 + Math.random() * 0.8,
        rotationSpeed: [
          (Math.random() - 0.5) * 1.2,
          (Math.random() - 0.5) * 1.2,
          (Math.random() - 0.5) * 1.2,
        ],
        floatSpeed: 0.3 + Math.random() * 0.4,
        type: types[i % types.length],
        color: colors[i % colors.length],
      });
    }
    
    return objs;
  }, [objectCount]);
  
  return (
    <>
      <fog attach="fog" args={['#000000', 1, 20]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={0.6} color="#ffffff" castShadow />
      <pointLight position={[-5, -5, 5]} intensity={0.4} color="#6600ff" castShadow />
      <directionalLight position={[0, 5, 0]} intensity={0.25} castShadow />
      
      {objects.map((obj) => (
        <FloatingObject key={obj.id} object={obj} mouse={mouse} />
      ))}
    </>
  );
}

export function HeroCanvas({
  mouseRef,
}: {
  mouseRef: React.MutableRefObject<{ x: number; y: number }>;
}) {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
      aria-hidden
    >
      <Canvas
        camera={{ position: [0, 1.5, 7], fov: 45 }}
        dpr={typeof window !== 'undefined' && window.devicePixelRatio > 2 ? 1.5 : 1}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          depth: true,
          stencil: false,
          precision: "highp",
        }}
        shadows="soft"
        style={{ background: "transparent" }}
        onCreated={({ gl }) => {
          gl.setClearColor("#000000", 0);
          gl.outputColorSpace = THREE.SRGBColorSpace;
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFShadowMap;
        }}
      >
        <GeometricScene mouse={mouseRef} />
      </Canvas>
    </div>
  );
}