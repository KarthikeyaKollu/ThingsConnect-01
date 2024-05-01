import React, { useEffect, useRef,useState } from 'react';
import animationData from '../Assets/walk.json';
import animationData1 from '../Assets/exercise.json';
import animationData2 from '../Assets/breath.json';
import Lottie from 'lottie-web';
import {Timer} from "./Timer"


export const Page = ({type}) => {
    const LottieAnimation3 = ({ autoplay, width, height, className }) => {
        const animationContainer = useRef(null);
        
      
        useEffect(() => {
            let ani = animationData
            if(type==="walk"){ani=animationData}
            else if(type==="exercise"){ani=animationData1}
            else if(type==="breath"){ani=animationData2}
          const anim = Lottie.loadAnimation({
            container: animationContainer.current,
            animationData: ani,
            renderer: "svg",
            loop: true,
            autoplay: autoplay
          });
      
          return () => {
            // Cleanup: Pause and destroy the animation when the component unmounts
            anim.stop();
            anim.destroy();
          };
        }, [autoplay]);
      
        return <div ref={animationContainer} className={className} style={{ width, height }} />;
      };
      
  return (
    <div className="">
        
    <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2  pl-6 pt-20">
      <LottieAnimation3 autoplay={true} width="300px" height="300px"/>
      
    </div>
    <Timer/>
    </div>
  )
}


