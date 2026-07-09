import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';

// Distributes points evenly on a sphere (Fibonacci sphere)
function fibonacciSphere(count, radius) {
  const points = [];
  const phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = phi * i;
    const x = Math.cos(theta) * r;
    const z = Math.sin(theta) * r;
    points.push([x * radius, y * radius, z * radius]);
  }
  return points;
}

function SkillNode({ position, label, active }) {
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.045, 12, 12]} />
        <meshBasicMaterial color={active ? '#F2B85C' : '#5EEAD4'} transparent opacity={0.9} />
      </mesh>
      <Html center distanceFactor={7} style={{ pointerEvents: 'none' }}>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            color: active ? '#F2B85C' : '#C7CCDA',
            whiteSpace: 'nowrap',
            textShadow: '0 0 6px #0B0E14, 0 0 6px #0B0E14',
            fontWeight: active ? 600 : 400,
          }}
        >
          {label}
        </div>
      </Html>
    </group>
  );
}

function RotatingGroup({ items, activeCat }) {
  const groupRef = useRef();
  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.09;
  });
  const positions = fibonacciSphere(items.length, 2.6);
  return (
    <group ref={groupRef}>
      {items.map((item, i) => (
        <SkillNode
          key={item.name}
          position={positions[i]}
          label={item.name}
          active={activeCat === 'ALL' || item.cat === activeCat}
        />
      ))}
    </group>
  );
}

export default function SkillOrb({ items, activeCat }) {
  return (
    <div style={{ width: '100%', height: '480px' }}>
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <RotatingGroup items={items} activeCat={activeCat} />
        </Suspense>
      </Canvas>
    </div>
  );
}
