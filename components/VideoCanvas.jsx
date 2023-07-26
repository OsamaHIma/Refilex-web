"use client";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import * as THREE from "three";

import { toast } from "react-toastify";
import CanvasLoader from "./CanvasLoader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./models/laptob/Laptop.gltf");

  const screen = computer.scene.children[2];

 
  const [video, setVideo] = useState(null);
  useEffect(() => {
   const vid = document.createElement('video');
   vid.src = './myWork.mp4';
   vid.autoplay = true;
//    vid.play();
   vid.loop = true;
   setVideo(vid);
 }, []);
  useEffect(() => {
    if (video) {
        // video.play();
      const texture = new THREE.VideoTexture(video);
    //   texture.flipX = true;
      texture.minFilter = THREE.NearestFilter;
      texture.magFilter = THREE.NearestFilter;
      texture.generateMipmaps = false;
    //   texture.encoding = THREE.sRGBEncoding;
      texture.format = THREE.RGBFormat;
      screen.material = new THREE.MeshBasicMaterial({ map: texture });
       
    }
  }, [video]);

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
        scale={isMobile ? 0.9 : 0.95}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
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
          //   enableZoom={false}
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










// "use client";
// import { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// import * as THREE from "three";
// // import { work_video } from "video.";
// import { toast } from "react-toastify";
// import CanvasLoader from "./CanvasLoader";

// const Computers = ({ isMobile }) => {
//   const computer = useGLTF("./models/desktop_pc/PC.gltf");
//   const screen =
//     computer.scene.children[0].children[0].children[0].children[142]
//       .children[0];

//   const [video] = useState(() => {
//     const vid = document.createElement("video");
//     vid.src = './myWork.mp4';
//     vid.loop = true;
//     vid.muted = true;
//     vid.autoplay = true;
//     vid.playsInline = true;
//     const playPromise = vid.play();

//     if (playPromise !== undefined) {
//       playPromise
//         .then((_) => {
//           // Automatic playback started!
//           // Show playing UI.
//           console.log("loading...");
//         })
//         .catch((error) => {
//           toast.error(
//             `Something went wrong while loading the video error: ${error}`
//           );
//         });
//     }
//     return vid;
//   });

//   const VideoToView = new THREE.VideoTexture(video);
//   VideoToView.minFilter = THREE.NearestFilter;
//   VideoToView.magFilter = THREE.NearestFilter;
//   VideoToView.generateMipmaps = false;
//   VideoToView.encoding = THREE.sRGBEncoding;

//   screen.material = new THREE.MeshBasicMaterial({
//     map: VideoToView,
//   });

//   return (
//     <mesh>
//       <hemisphereLight intensity={0.15} groundColor="black" />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <pointLight intensity={1} />
//       <primitive
//         object={computer.scene}
//         scale={isMobile ? 0.7 : 1}
//         position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
//         rotation={[-0.01, -0.2, -0.1]}
//       />
//     </mesh>
//   );
// };

// const ComputersCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 500px)");
//     setIsMobile(mediaQuery.matches);
//     const handelChanges = (ev) => {
//       setIsMobile(ev.matches);
//     };
//     mediaQuery.addEventListener("change", handelChanges);
//     return () => {
//       mediaQuery.removeEventListener("change", handelChanges);
//     };
//   }, []);

//   return (
//     <Canvas
//       frameloop="demand"
//       dpr={[1, 2]}
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//       className="cursor-grab active:cursor-grabbing"
//       onError={(error) => {
//         console.error("err", error);
//       }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Computers isMobile={isMobile} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default ComputersCanvas;
