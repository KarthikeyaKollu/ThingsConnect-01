import React, { useEffect, useRef,useState } from 'react';
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import animationData from '../Assets/walk.json';
import image1 from '../Assets/cycling.jpg' 
import image2 from '../Assets/drinking water.jpg' 
import image3 from '../Assets/jogging.jpg' 
import image4 from '../Assets/skipping.jpg' 
import image5 from '../Assets/workout.png' 
import Lottie from 'lottie-web';
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
  







export  function Exercises() {
  const list = [
    {
      title: "Cycling",
      img: image1,
      price: "5KM",
    },
    {
      title: "Drinking",
      img: image2,
      price: "2L",
    },
    {
      title: "Running",
      img: image3,
      price: "3KM",
    },
    {
      title: "Skipping",
      img: image4,
      price: "100",
    },
    {
      title: "WeightLifting",
      img: image5,
      price: "1HR",
    },
    {
      title: "..",
      img: image1,
      price: "$8.00",
    },
    {
      title: "....",
      img: image1,
      price: "$7.50",
    },
    {
      title: "..",
      img: image1,
      price: "$12.20",
    },
    {
      title: ".",
      img: image1,
      price: "$12.20",
    },
    {
      title: ".",
      img: image1,
      price: "$12.20",
    },
    {
      title: ".",
      img: image1,
      price: "$12.20",
    },
  ];

  return (
    <div className="gap-4 grid grid-cols-2 sm:grid-cols-4 p-5 overflow-y-auto">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <img
             
              width="100%"
              alt={item.title}
              className="object-cover h-[140px] shadow-sm rounded-lg w-[100%]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
