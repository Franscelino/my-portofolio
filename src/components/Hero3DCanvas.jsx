import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

const AnimatedSphere = () => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Sphere ref={meshRef} visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#00E5FF"
        attach="material"
        distort={0.4}
        speed={1.2}
        roughness={0.3}
        metalness={0.9}
        wireframe={true}
      />
    </Sphere>
  );
};

const Particles = () => {
  const particlesRef = useRef();
  const particleCount = 200;
  
  // Create random positions for particles
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20;
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      particlesRef.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#FFFFFF"
        sizeAttenuation
        transparent
        opacity={0.35}
      />
    </points>
  );
};

const Hero3DCanvas = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} color="#00E5FF" />
        <directionalLight position={[-10, -10, -5]} intensity={0.3} color="#FFFFFF" />
        
        {/* Animated main sphere */}
        <AnimatedSphere />
        
        {/* Floating particles */}
        <Particles />
      </Canvas>
    </div>
  );
};

export default Hero3DCanvas;
