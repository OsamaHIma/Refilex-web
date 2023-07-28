"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useEffect, useState, useMemo } from "react";
import { OrbitControls, Preload, useGLTF, useTexture } from "@react-three/drei";
import { RepeatWrapping, Vector2 } from "three";
import CanvasLoader from "./CanvasLoader";

const Phone = ({ isMobile }) => {
  const phone = useGLTF("/models/samsung/scene.gltf");
  const [phoneTexture] = useTexture([
    "/models/samsung/textures/Display_ActiveArea_baseColor.jpg",
  ]);

  // The UV coordinates of the phone screen
  const uvTopLeft = new Vector2(0.076, 0.35);
  const uvTopRight = new Vector2(0.928, 0.35);
  const uvBottomLeft = new Vector2(0.076, 0.65);
  const uvBottomRight = new Vector2(0.928, 0.65);

  // The UV coordinates of the phone screen as an array
  const uv = useMemo(
    () => [uvTopLeft, uvBottomLeft, uvTopRight, uvBottomRight],
    [uvTopLeft, uvBottomLeft, uvTopRight, uvBottomRight]
  );

  // Set the texture to repeat to fit the screen size
  phoneTexture.wrapS = RepeatWrapping;
  phoneTexture.wrapT = RepeatWrapping;
  phoneTexture.repeat.set(1, 1);

  // Rotate the phone mesh every frame
  useFrame(({ clock }) => {
    phone.scene.rotation.y = clock.getElapsedTime() * 0.6; // Modify rotation speed here
  });

  return (
    <mesh>
      <ambientLight intensity={10} />
      <pointLight intensity={10} position={[10, 10, 10]} />

      <hemisphereLight intensity={0.15} groundColor="black" />

      <directionalLight
        color={0x4066ff}
        intensity={8.8}
        position={[-1, 1, 1]}
      />

      <spotLight
        color={0xffb978}
        intensity={6.8}
        position={[10, -10, 5]}
        angle={Math.PI / 4}
        penumbra={0.5}
        decay={2}
        distance={100}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive
        rotation={[0, 0, 0]}
        object={phone.scene}
        scale={5}
        position={[0, -10, -1.5]}
      >
        {/* Add the image to the phone screen */}
        <mesh
          name="phone-screen"
          position={[0, 2.6, 0.15]}
          scale={[2.4, 5.2, 5]}
        >
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial map={phoneTexture} uv={uv} />
        </mesh>
      </primitive>
    </mesh>
  );
};

const PhoneCanvas = () => {
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
      // frameloop="demand"
      dpr={[1, 2]}
      camera={{ position: [0, 0, 80], fov: 25, rotation: [0, 0, 0] }}
      gl={{ preserveDrawingBuffer: true }}
      className="cursor-grab active:cursor-grabbing"
      onError={(error) => {
        console.error("err", error);
      }}
      style={{ height: "400px", width: "170px" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Phone isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default PhoneCanvas;
