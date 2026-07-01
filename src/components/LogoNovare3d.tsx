'use client';

import { useGLTF, Center, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

interface LogoProps {
  rotationState?: React.RefObject<{ y: number }>;
}

export function LogoNovare3d({ rotationState }: LogoProps) {
  const { scene } = useGLTF('/models/logo3d(gradient - compressed).glb');
  const groupRef = useRef<THREE.Group>(null);
  const modelRef = useRef<THREE.Group>(null);

  const [scale, setScale] = useState(20.0);

  useFrame(() => {
    if (groupRef.current && rotationState?.current) {
      groupRef.current.rotation.y = rotationState.current.y;
    }
  });

  useEffect(() => {
    const escutarResize = () => {
      if (window.innerWidth < 768) {
        setScale(15.0);
      } else {
        setScale(20.0);
      }
    };

    escutarResize();

    window.addEventListener('resize', escutarResize);
    return () => window.removeEventListener('resize', escutarResize);
  }, []);

  useMemo(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;

        if (mesh.material && 'roughness' in mesh.material) {
          const standardMaterial = mesh.material as THREE.MeshStandardMaterial;

          standardMaterial.roughness = 0.2;
        }
      }
    });
  }, [scene]);
  return (
    <Center>
      <group ref={groupRef}>
        <primitive ref={modelRef} object={scene} scale={scale} />
      </group>
    </Center>
  );
}

useGLTF.preload('/models/logo3d.glb');
