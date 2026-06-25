'use client';

import { useGLTF, Center, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

interface LogoProps {
  rotationState?: React.RefObject<{ y: number }>;
}

export function LogoNovare3d({ rotationState }: LogoProps) {
  const { scene } = useGLTF('/models/logo3d.glb');
  const groupRef = useRef<THREE.Group>(null);
  const modelRef = useRef<THREE.Group>(null);

  const gradientTexture = useTexture('/textures/logo-gradient.png');

  const [scale, setScale] = useState(0.016);

  useFrame(() => {
    if (groupRef.current && rotationState?.current) {
      groupRef.current.rotation.y = rotationState.current.y;
    }
  });

  useEffect(() => {
    const escutarResize = () => {
      if (window.innerWidth < 768) {
        setScale(0.01);
      } else {
        setScale(0.016);
      }
    };

    escutarResize();

    window.addEventListener('resize', escutarResize);
    return () => window.removeEventListener('resize', escutarResize);
  }, []);

  useMemo(() => {
    gradientTexture.wrapS = THREE.RepeatWrapping;
    gradientTexture.wrapT = THREE.RepeatWrapping;

    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;

        mesh.material = new THREE.MeshStandardMaterial({
          map: gradientTexture,
          roughness: 0.1,
          metalness: 0.2,
        });
      }
    });
  }, [scene, gradientTexture]);

  return (
    <Center>
      <group ref={groupRef}>
        <primitive ref={modelRef} object={scene} scale={scale} />
      </group>
    </Center>
  );
}

useGLTF.preload('/models/logo3d.glb');
