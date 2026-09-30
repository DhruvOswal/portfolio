import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

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

export default function Scene3D() {
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
