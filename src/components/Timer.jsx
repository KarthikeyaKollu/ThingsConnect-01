import React, { useState, useEffect } from 'react';
import {Button} from "@nextui-org/react";
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import PauseCircleOutlineOutlinedIcon from '@mui/icons-material/PauseCircleOutlineOutlined';
import {CircularProgress, Card, CardBody, CardFooter, Chip} from "@nextui-org/react";


export function Timer() {
  const [minutes, setMinutes] = useState(1); // Change this to the desired number of minutes
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0 && minutes === 0) {
          clearInterval(interval);
          setIsActive(false);
        } else {
          if (seconds === 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
          } else {
            setSeconds(seconds => seconds - 1);
          }
        }
      }, 1000);
    } else if (!isActive && (seconds !== 0 || minutes !== 0)) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds, minutes]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setMinutes(1); // Change this to the desired number of minutes
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div >
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2  pb-20 z-0 mt-20 mr-3 overflow-hidden ">
 
    <CircularProgress
          classNames={{
            svg: "w-80 h-80 drop-shadow-md",
            indicator: "",
            track: "stroke-black/10",
            value: "text-3xl font-semibold text-white",
          }}
        //   value={""}
          strokeWidth={4}
          showValueLabel={true}
          className=""
          

        />
        <Chip
          classNames={{
            base: "border-1 border-black/30 w-130 h-10",
            content: "text-black/90 text-4xl font-bold",
          }}
          variant="bordered"
          className="absolute left-1/2 transform -translate-x-1/2 p-4  mt-10"
        >
          {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
        </Chip>
      </div>

     
      <div className="fixed  left-1/2 transform -translate-x-1/2  flex gap-10 bottom-1/4 ">
      
      {!isActive ? (
                <Button color="success" endContent={<PlayCircleFilledWhiteOutlinedIcon />} onClick={toggleTimer} size=''>
                    Start
                </Button>
                ) : (
                <Button color="success" endContent={<PauseCircleOutlineOutlinedIcon />} size='' onClick={toggleTimer}>
                    Pause
                </Button>
                )}

      
      <Button color="danger" variant="bordered" size='' startContent={<RestartAltOutlinedIcon/>} onClick={resetTimer} >
        Reset
      </Button>
    </div>





    </div>
  );
}


