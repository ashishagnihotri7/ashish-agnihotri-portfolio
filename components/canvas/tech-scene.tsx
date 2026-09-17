// File: components/canvas/tech-scene.tsx
"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// Theme & Optimization Config (Cyberpunk Neon)
const CONFIG = {
  dustCount: 150,
  colors: {
    serverCore: "#06b6d4", // Bright Cyan
    container: "#3b82f6", // Bright Blue
    dataStream: "#6366f1", // Neon Indigo
    microservice: "#ffffff", // Pure White
  },
} as const;

function DataStreamDust() {
  const pointsRef = useRef<THREE.Points>(null!);
  const [positions, initialY] = useMemo(() => {
    const coords = new Float32Array(CONFIG.dustCount * 3);
    const origY = new Float32Array(CONFIG.dustCount);
    for (let i = 0; i < CONFIG.dustCount; i++) {
      const idx = i * 3;
      coords[idx] = (Math.random() - 0.5) * 20;
      coords[idx + 1] = (Math.random() - 0.5) * 20;
      coords[idx + 2] = (Math.random() - 0.5) * 10 - 5;
      origY[i] = coords[idx + 1];
    }
    return [coords, origY];
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.05;
    const time = state.clock.getElapsedTime();
    const array = pointsRef.current.geometry.attributes.position
      .array as Float32Array;

    for (let i = 0; i < CONFIG.dustCount; i++) {
      const idx = i * 3;
      array[idx + 1] = initialY[i] + Math.sin(time * 1.5 + array[idx]) * 0.5;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color={CONFIG.colors.serverCore}
        transparent
        opacity={0.6}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function MicroservicesTesseract() {
  const groupRef = useRef<THREE.Group>(null!);
  const innerCubeRef = useRef<THREE.Mesh>(null!);
  const outerCubeRef = useRef<THREE.Mesh>(null!);
  const dataBusRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    if (innerCubeRef.current) {
      innerCubeRef.current.rotation.x += delta * 0.3;
      innerCubeRef.current.rotation.y += delta * 0.4;
      const pulse = 1 + Math.sin(time * 4) * 0.08;
      innerCubeRef.current.scale.set(pulse, pulse, pulse);
    }
    if (outerCubeRef.current) {
      outerCubeRef.current.rotation.x -= delta * 0.2;
      outerCubeRef.current.rotation.y -= delta * 0.3;
      outerCubeRef.current.rotation.z += delta * 0.15;
    }
    if (dataBusRef.current) {
      dataBusRef.current.rotation.z += delta * 0.8;
      dataBusRef.current.rotation.x += delta * 0.5;
    }
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        state.pointer.x * 0.8,
        0.05,
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -state.pointer.y * 0.8,
        0.05,
      );
    }
  });

  return (
    <Float speed={3} rotationIntensity={0.8} floatIntensity={1.5}>
      <group ref={groupRef} scale={1.2}>
        <mesh ref={innerCubeRef}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color={CONFIG.colors.serverCore}
            emissive={CONFIG.colors.serverCore}
            emissiveIntensity={0.8}
            wireframe={false}
            transparent
            opacity={0.9}
          />
        </mesh>
        <mesh ref={outerCubeRef}>
          <boxGeometry args={[1.8, 1.8, 1.8]} />
          <meshStandardMaterial
            color={CONFIG.colors.container}
            emissive={CONFIG.colors.container}
            emissiveIntensity={1}
            wireframe
          />
        </mesh>
        <group ref={dataBusRef}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[2.5, 0.02, 16, 100]} />
            <meshBasicMaterial
              color={CONFIG.colors.dataStream}
              transparent
              opacity={0.8}
            />
          </mesh>
          <mesh position={[2.5, 0, 0]}>
            <octahedronGeometry args={[0.15, 0]} />
            <meshBasicMaterial color={CONFIG.colors.microservice} />
          </mesh>
          <mesh position={[-2.5, 0, 0]}>
            <octahedronGeometry args={[0.12, 0]} />
            <meshBasicMaterial color={CONFIG.colors.serverCore} />
          </mesh>
          <mesh position={[0, 2.5, 0]}>
            <octahedronGeometry args={[0.18, 0]} />
            <meshBasicMaterial color={CONFIG.colors.dataStream} />
          </mesh>
        </group>
      </group>
    </Float>
  );
}

export default function TechScene() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={1.5} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={3}
          color="#06b6d4"
        />
        <MicroservicesTesseract />
        <DataStreamDust />
      </Canvas>
    </div>
  );
}
