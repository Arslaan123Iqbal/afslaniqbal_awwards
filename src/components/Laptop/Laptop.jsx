import { Environment, Html, PresentationControls, useGLTF, useProgress } from '@react-three/drei'
import styles from './Laptop.module.scss'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import React, {useState} from 'react'


const Laptop = () => {


  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('/draco-gltf/');
    const laptop = useGLTF('./model.gltf',dracoLoader);



  return (
    <>
    
    <Environment preset='warehouse'/>

    <PresentationControls global polar={[-0.4, 0.2]} azimuth={[-0.4,0.2]}>
        <primitive object={laptop.scene} position-y={-1.2}>
          <Html  wrapperClass={styles.laptop} position={[0,1.5,-1.5]} transform distanceFactor={1.16} rotation-x={-0.25}>
            <iframe  src='https://portolio-git-main-arslaan123iqbal.vercel.app/'/>


          </Html>
        </primitive>
    </PresentationControls>
    </>
  )
}

export default Laptop