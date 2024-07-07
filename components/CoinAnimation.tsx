"use client";
import { OrbitControls, useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const CoinAnimation = () => {
  const coinRef = useRef(null);
  const logoRef = useRef(null);

  const [texture] = useTexture(["/assets/images/logo.png"]);

  useFrame(() => {
    // coinRef.current.rotation.y += 0.01; // Rotate around Y-axis
    coinRef.current.rotation.x += 0.01; // Rotate around X-axis (optional)
  });

  useEffect(() => {
    // ..coin animation
    gsap.to(logoRef.current, {
      rotationY: 360,
      duration: 8,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <mesh ref={coinRef} scale={[2, 2, 2]}>
      <cylinderGeometry args={[1, 1, 0.2, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const ThreeDCoin = () => {
  return (
    // <Canvas camera={{ position: [10, 5, 1], fov: 30 }}>
    <Canvas camera={{ position: [1, 12, 0], fov: 30 }}>
      <ambientLight intensity={2} />
      <pointLight position={[10, 10, 10]} />
      <CoinAnimation />
      <OrbitControls
        enableRotate={false}
        enableZoom={false}
        enablePan={false}
      />
    </Canvas>
  );
};

// const CoinAnimation = () => {
//   const coinRef = useRef(null);
//   const logoRef = useRef(null);

//   const [texture] = useTexture(["/assets/images/logo.png"]);

//   useFrame(() => {
//     // coinRef.current.rotation.y += 0.01; // Rotate around Y-axis
//     coinRef.current.rotation.z += 0.01; // Rotate around X-axis (optional)
//   });

//   useEffect(() => {
//     // ..coin animation
//     gsap.to(logoRef.current, {
//       rotationY: 360,
//       duration: 8,
//       repeat: -1,
//       ease: "linear",
//     });
//   }, []);

//   return (
//     <mesh ref={coinRef} scale={[2, 2, 2]} rotation={[2, 1.6, 2]}>
//       <cylinderGeometry args={[1, 1, 0.2, 32]} />
//       <meshStandardMaterial map={texture} />
//     </mesh>
//   );
// };

// const ThreeDCoin = () => {
//   return (
//     // <Canvas camera={{ position: [10, 5, 1], fov: 30 }}>
//     <Canvas camera={{ position: [1, 12, 0], fov: 30 }}>
//       <ambientLight intensity={2} />
//       <pointLight position={[10, 10, 10]} />
//       <CoinAnimation />
//       <OrbitControls
//         enableRotate={false}
//         enableZoom={false}
//         enablePan={false}
//       />
//     </Canvas>
//   );
// };

export default ThreeDCoin;
