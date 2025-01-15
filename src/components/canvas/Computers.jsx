import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  MeshTransmissionMaterial,
  Text,
} from "@react-three/drei";
import { useControls } from "leva";
import CanvasLoader from "../Loader";

// Custom hook for mobile detection
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 750px)");
    const handleMediaQueryChange = (event) => setIsMobile(event.matches);

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return isMobile;
};

// Lighting Component
const Lighting = () => (
  <>
    <hemisphereLight intensity={0.15} groundColor="white" />
    <spotLight
      position={[30, 60, 10]}
      angle={0.12}
      penumbra={1}
      intensity={0.75}
      castShadow
      shadow-mapSize={1024}
    />
  </>
);

// Materialized Mesh Component
const MaterializedMesh = ({ children, materialProps }) => {
  return children.map((child, index) => (
    <mesh
      key={index}
      geometry={child.geometry}
      position={child.position}
      rotation={child.rotation}
    >
      <MeshTransmissionMaterial {...materialProps} />
    </mesh>
  ));
};

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/3D.glb");

  const materialProps = useControls({
    thickness: { value: 0.15, min: 0, max: 2, step: 0.05 },
    roughness: { value: 0.1, min: 0, max: 1, step: 0.1 },
    transmission: { value: 0.6, min: 0, max: 1, step: 0.1 },
    ior: { value: 0.5, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 1, min: 0, max: 1 },
    backside: { value: true },
  });

  return (
    <group rotation={[0, -Math.PI / 2, 0]} scale={isMobile ? 1.5 : 2}>
      <Lighting />
      <MaterializedMesh
        children={computer.scene.children}
        materialProps={materialProps}
      />
    </group>
  );
};

/*
const StaticText = () => (
  <Text
    fontSize={1}
    position={[0, 0, 0]} // Position the text independently
    rotation={[0, 0, 0]} // Ensure no rotation is applied
    color="white"
  >
    O
</Text>
);
*/

const ComputersCanvas = () => {
  const isMobile = useIsMobile();
  const [autoRotateSpeed, setAutoRotateSpeed] = useState(0);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [1, 5, 0], fov: 4 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate={true}
          autoRotateSpeed={autoRotateSpeed}
          onChange={(event) => setAutoRotateSpeed(0)}
        />
        {/* Rotating Computers */}
        <Computers isMobile={isMobile} />
        {/* Static Text */}
        <StaticText />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
