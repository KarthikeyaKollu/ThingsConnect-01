import {Button} from "@nextui-org/react";
import React, { useEffect, useRef,useState } from 'react';
import styled from 'styled-components'
import Lottie from 'lottie-web';
import animationData from '../Assets/h.json';
import {readData,writeData} from "./firebaseExample"


const LottieAnimation = ({ autoplay, width, height }) => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: animationContainer.current,
      animationData: animationData,
      renderer: 'svg',
      loop: true,
      autoplay: autoplay,
    });

    return () => {
      // Cleanup: Pause and destroy the animation when the component unmounts
      anim.stop();
      anim.destroy();
    };
  }, [autoplay]);

  return <div ref={animationContainer} style={{ width, height }} />;
};

export const Button1 = () => {

  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);

  const handleAnimationClick = () => {
    setIsAnimationPlaying(!isAnimationPlaying);
    if(!isAnimationPlaying){
      writeData("/UserData/status","true")
    }
    else writeData("/UserData/status","false")
  };

  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>

<Button color="primary"    onClick={handleAnimationClick}  className='cursor-pointer'>
  
        {!isAnimationPlaying? "Start Measuring":"Stop Measuring"}
    </Button>

    </div>
  )
}













const Buttton =styled.div`
 background-color: #2267e8;
 width: 350px;
 height: 60px;
 border-radius: 20px;
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: center;
 font-size: 30px;
 color: white;
 transition: transform 0.2s ease; /* Add a smooth transition effect */

  &:active {
    transform: scale(0.95); /* Apply scale transformation when clicked */
  }
 img{
  position: relative;
  left: -30px;
 }
 

`