'use client'

import { useGLTF, Center, useTexture } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

export function LogoNovare3d() {
  const { scene } = useGLTF("/models/logo3d.glb");
  const modelRef = useRef<THREE.Group>(null);

  const gradientTexture = useTexture("/textures/logo-gradient.png");

  const [escala, setEscala] = useState(0.016);

  useEffect(() => {
    const escutarResize = () => {
      if (window.innerWidth < 768) {
        setEscala(0.01);
      } else {
        setEscala(0.016);
      }
    };

    escutarResize();

    window.addEventListener("resize", escutarResize);
    return () => window.removeEventListener("resize", escutarResize);
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
      <primitive ref={modelRef} object={scene} scale={escala} />
    </Center>
  );
}

useGLTF.preload("/models/logo3d.glb");
