import React, { useEffect, useRef,useState } from 'react';
import {Accordion, AccordionItem,Avatar} from "@nextui-org/react";

import animationData from '../Assets/walk.json';
import animationData1 from '../Assets/exercise.json';
import animationData2 from '../Assets/water.json';
import animationData3 from '../Assets/breath.json';
import Lottie from 'lottie-web';
import {Tabs, Tab,Card, CardBody} from "@nextui-org/react";
import { Link  } from "react-router-dom";
import {Button} from "@nextui-org/react";
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';

const LottieAnimation = ({ autoplay, width, height, className }) => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: animationContainer.current,
      animationData: animationData,
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


const LottieAnimation1 = ({ autoplay, width, height, className }) => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: animationContainer.current,
      animationData: animationData1,
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

const LottieAnimation2 = ({ autoplay, width, height, className }) => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: animationContainer.current,
      animationData: animationData2,
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

const LottieAnimation3 = ({ autoplay, width, height, className }) => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: animationContainer.current,
      animationData: animationData3,
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




export const Suggestions = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="flex w-full flex-col items-center">
            
          <Accordion variant="splitted" selectionMode="multiple" className="fixed left-1/2 transform -translate-x-1/2 p-6 grid grid-cols-2 gap-5">

                            <AccordionItem key="1" aria-label="Accordion 1" startContent={
                                <div style={{ transform: "scale(1.5)" }}><LottieAnimation2 autoplay={true} width="70px" height="50px" className="" /></div>
                              }
                              
                              title="Drink Water"
                              >
                              {"Water is the elixir of life."}
                            </AccordionItem>


                            <AccordionItem key="2" aria-label="Accordion 1" startContent={
                                <div style={{ transform: "scale(1.5)" }}><LottieAnimation autoplay={true} width="70px" height="50px" className="" /></div>
                              }
                              
                              title="Walking">
                              <div className="flex items-end justify-end">
                              <Button color="success" endContent={<KeyboardDoubleArrowRightOutlinedIcon/>}>
                              <Link to="/walk">Practise Here</Link> </Button></div>  
                            </AccordionItem>



                            <AccordionItem key="3" aria-label="Accordion 1" startContent={
                                <div style={{ transform: "scale(1.5)" }}><LottieAnimation1 autoplay={true} width="70px" height="50px" className="" /></div>
                              }
                              
                              title="Exercise">
                              <div className="flex items-end justify-end">
                              <Button color="success" endContent={<KeyboardDoubleArrowRightOutlinedIcon/>}>
                              <Link to="/exercise">Practise Here</Link> </Button></div>  
                            </AccordionItem>


                              <AccordionItem key="4" aria-label="Accordion 1" startContent={
                                  
                                  <div style={{ transform: "scale(2)" }}><LottieAnimation3 autoplay={true} width="70px" height="50px" className="" /></div>
                                }
                                
                                title="Breathing">
                                <div className="flex items-end justify-end">
                              <Button color="success" endContent={<KeyboardDoubleArrowRightOutlinedIcon/>}>
                              <Link to="/breath">Practise Here</Link> </Button></div>  
                              </AccordionItem>
             </Accordion>   
    </div>  

  );
}

