import {Card} from "./components/card"
import {Button} from "./components/Button"


import {readData,writeData} from "./components/firebaseExample"
import React, { useEffect, useRef,useState } from 'react';
import _debounce from 'lodash/debounce';
import {getLocation} from "./components/geoLocation"
import {getGyroscope} from "./components/gyroScope"

import {NextUIProvider} from "@nextui-org/react";
import "./input.css"
import styled from "styled-components"
import StraightenRoundedIcon from '@mui/icons-material/StraightenRounded';
import { Device } from "./components/Device";

import medical from "./Assets/medical.jpg"
import homeautomation from "./Assets/homeautomation.jpg"
import smartwatch from "./Assets/smartwatch.png"
import airpods from "./Assets/airpods.jpg"
import ExploreIcon from '@mui/icons-material/Explore';


export function Wrapper() {
  const display_flex ={ 
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around"
  }

  const [data, setData] = useState(0);


  const getData= async ()=>{
    var d = await readData("/Data")
    setData(d)
    console.log(data)
  }

  const getLoc= async ()=>{
    var defaults= await readData("/PanicButton")
    if (defaults=="true"){
      var d = await getLocation()
      writeData("/Location",d);
      console.log(d)
    }
    
  }



  const getGyro= ()=>{
    getGyroscope((orientationValues) => {
      console.log('Orientation values:', orientationValues);
      var gyro =orientationValues;
      writeData("/gyro/alpha",gyro.alpha);
      writeData("/gyro/beta",gyro.beta);
      writeData("/gyro/gamma",gyro.gamma);
      
    });
  }

  const debouncedGetData = _debounce(getData, 1000);
  const debouncedGetGyro = _debounce(getGyro, 1000);
  const debouncedGetLoc = _debounce(getLoc, 1000);

  useEffect(()=>{
    //debouncedGetLoc()
    

    debouncedGetData();
    
   // debouncedGetGyro()
    
  })

  return (
    <>
    <NextUIProvider>
    
    <div className="p-6 grid grid-cols-2 gap-5">
    <Device title="Smart Watch" image={smartwatch} route="/health" button="See Device" />
    <Device title="Medical Dispenser" image={medical} button="See Device" route="/schedule" />
    <Device title="Home Automation" image={homeautomation} button="See Device" route="/Lights" />
    </div>
    <Text text={"Explore more ...."}/>
    <div className="p-6 pb-20 grid grid-cols-2 gap-5">
    <Device title="Earbuds" image={airpods} button="Connect" />
    </div>

    </NextUIProvider>
    </>
   

  );
}


const Cards=styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    margin-left: 30px;
    margin-right: 30px;
    margin-top: -10px;
`

export const Text=({text})=>{

  return(
    <TextDiv>
      <span>{text}</span>
      <ExploreIcon fontSize="medium"/>
    </TextDiv>

  )
};


const TextDiv=styled.div`

   display: flex;
    justify-content:space-between;
    margin-top:40px;
    margin-left: 30px;
    margin-right: 30px;
    align-items: center;
      
    font-size: 15px;
    font-weight: bold;
`