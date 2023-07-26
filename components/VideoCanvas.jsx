"use client";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  useVideoTexture,
} from "@react-three/drei";

import * as THREE from "three";

import CanvasLoader from "./CanvasLoader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./models/laptob/scene.gltf");

  const screen = computer.scene.children[2];

  const videoTexture = useVideoTexture("/myWork.mp4", {
    autoplay: true,
    playsInline: true,
    controls: true,
    
  });
  // videoTexture.rotation = Math.PI / 8;
  useEffect(() => {
    if (videoTexture) {
      videoTexture.flipY = true;
      screen.material = new THREE.MeshBasicMaterial({ map: videoTexture });
    }
  }, [videoTexture]);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 1 : 3}
        position={isMobile ? [0, -3, -2.2] : [-2, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handelChanges = (ev) => {
      setIsMobile(ev.matches);
    };
    mediaQuery.addEventListener("change", handelChanges);
    return () => {
      mediaQuery.removeEventListener("change", handelChanges);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="cursor-grab active:cursor-grabbing"
      onError={(error) => {
        console.error("err", error);
      }}
      style={{ height: "400px" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
            enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
