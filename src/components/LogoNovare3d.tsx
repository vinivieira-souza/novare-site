'use client';

import { useGLTF, Center } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';

interface LogoProps {
  rotationState?: React.RefObject<{ y: number }>;
}

const MODEL_PATH = '/models/logo3d(gradient - compressed).glb';

export function LogoNovare3d({ rotationState }: LogoProps) {
  const { scene } = useGLTF(MODEL_PATH);
  const groupRef = useRef<THREE.Group>(null);
  const { size } = useThree();

  const currentScale = size.width < 1000 ? 15.0 : 20.0;

  useFrame(() => {
    if (groupRef.current && rotationState?.current) {
      groupRef.current.rotation.y = rotationState.current.y;
    }
  });

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
        <primitive object={scene} scale={currentScale} />
      </group>
    </Center>
  );
}

useGLTF.preload(MODEL_PATH);