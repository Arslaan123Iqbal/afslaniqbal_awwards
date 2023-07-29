import { Canvas } from "@react-three/fiber";

import styles from "./ModelLaptop.module.scss";
import { useProgress, Html } from "@react-three/drei";
import { Suspense } from "react";
import Laptop from "../Laptop/Laptop";

function ModelLaptop() {


  function Loader() {
    const { progress } = useProgress()
    return <Html center>{progress} % loaded
   
    </Html>
  }
  return (
    <div className={styles.maincanavas}>

      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [-3, 1.5, 4],
        }}
      >
        <Suspense fallback={<Loader/>}>
        <Laptop/>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default ModelLaptop;
