import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Wireframe icosahedron that slowly tumbles — the "signature" 3D element
function TumblingIcosahedron() {
  const meshRef = useRef();
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.08;
      meshRef.current.rotation.y += delta * 0.12;
    }
  });
  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.9}>
      <mesh ref={meshRef} scale={2.1}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#7C5CFF" wireframe transparent opacity={0.55} />
      </mesh>
    </Float>
  );
}

function InnerCore() {
  const meshRef = useRef();
  useFrame((_, delta) => {
    if (meshRef.current) meshRef.current.rotation.y -= delta * 0.2;
  });
  return (
    <mesh ref={meshRef} scale={1.15}>
      <octahedronGeometry args={[1, 0]} />
      <meshBasicMaterial color="#B8FF3D" wireframe transparent opacity={0.35} />
    </mesh>
  );
}

// Ambient particle field drifting in the background
function ParticleField({ count = 700 }) {
  const pointsRef = useRef();
  const positions = useRef(
    Float32Array.from({ length: count * 3 }, () => (Math.random() - 0.5) * 14)
  ).current;

  useFrame((_, delta) => {
    if (pointsRef.current) pointsRef.current.rotation.y += delta * 0.015;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#8B93A7"
        size={0.018}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

export default function Scene3D({ variant = 'hero' }) {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ParticleField />
        </Suspense>
      </Canvas>
    </div>
  );
}
