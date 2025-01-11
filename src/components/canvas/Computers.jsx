import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  MeshTransmissionMaterial,
  Text,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

import { useControls } from "leva";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/3D.glb");

  const materialProps = useControls({
    thickness: { value: 0.2, min: 0, max: 2, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 0.8, min: 0, max: 1, step: 0.1 },
    ior: { value: 1, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.2, min: 0, max: 1 },
    backside: { value: true },
  });

  const { viewport } = useThree();

  return (
    <group rotation={[0, -Math.PI / 2, 0]} scale={viewport.width * 2}>
      {/* Lighting */}
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[30, 60, 10]}
        angle={0.12}
        penumbra={1}
        intensity={0.75}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={0.8} />
      <Text fontSize={0.1}></Text>
      {/* Apply MeshTransmissionMaterial */}
      {/* Traverse the children and assign the material */}
      {computer.scene.children.map((child, index) => (
        <mesh
          key={index}
          geometry={child.geometry}
          position={child.position}
          rotation={child.rotation}
        >
          <MeshTransmissionMaterial {...materialProps} />
        </mesh>
      ))}
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 750px)");

    // Set the initial value of the isMobile state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const [autoRotateSpeed, setAutoRotateSpeed] = useState(0);

  const handleAngleChange = (angle) => {
    setAutoRotateSpeed(0);
  };

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [12, 0, 0], fov: 1.4 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate={true}
          autoRotateSpeed={autoRotateSpeed}
          onChange={(event) =>
            handleAngleChange(event.target.getAzimuthalAngle())
          }
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
