import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";


const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/3D.glb");

  
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[30, 60, 10]}
        angle={0.12}
        penumbra={1}
        intensity={0.75}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={0} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 2 : 4}
        position={isMobile ? [0, -2.5, -0.5] : [0, -4, -0.7]}
        rotation={[0, 1.2, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 750px)");

    // Set the initial value of the `isMobile` state variable
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
  
  const [autoRotateSpeed, setAutoRotateSpeed] = useState(1);

  const handleAngleChange = (angle) => {
    if (angle < 0.9) {
      setAutoRotateSpeed(-1);
    } else if (angle > 1.5) {
      setAutoRotateSpeed(1);
    }
  };

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate = {true}
          autoRotateSpeed={autoRotateSpeed}
          onChange={(event) => handleAngleChange(event.target.getAzimuthalAngle())}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
