import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimeClock } from '@mui/x-date-pickers/TimeClock';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { writeData,readData } from './firebaseExample'
import {Text} from '../Wrapper'
export function ResponsiveDateTimePickers() {


const [selectedTime, setSelectedTime] = useState(dayjs('2022-04-17T15:30'));
const [time, setTime] = useState('');
const [ftime, setfTime] = useState('');
const [cmd, setCmd] = useState('');


  const handleClick = async (data) => {
    writeData("motor/", data)
  }
  const handleSave = async () => {
    writeData("date/", selectedTime.format('HH:mm'));
    writeData("motor","-");
  }

  const get=async()=>{
   const data = await readData("date")
   const cmddata = await readData("motor");
   setCmd(cmddata)
   setfTime(data)
    console.log("firebase time ",ftime)
    
  }

 

  

  useEffect(() => {
    const interval = setInterval(async () => {
      const currentTime = new Date();
      const hours = currentTime.getHours().toString().padStart(2, '0');
      const minutes = currentTime.getMinutes().toString().padStart(2, '0');
      const newTime = `${hours}:${minutes}`;
      setTime(newTime);
      console.log("current time ", newTime);
      await get();
     
        if (newTime === ftime) {
          writeData("motor", "o")    
        }
       
      
    
      
      
    }, 5000);
  
    return () => clearInterval(interval);
  }, [selectedTime, ftime]);



useEffect(()=>{
 console.log(selectedTime.format('HH:mm'))
},[selectedTime])

  return (
    <div className='p-6'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoItem label="Controlled clock">
          <TimeClock value={selectedTime} onChange={(newValue) => setSelectedTime(newValue)} />
        </DemoItem>
       <div className='flex justify-end mr-24'> <Button variant="text" onClick={() => {handleSave()}}>save</Button></div>
      </LocalizationProvider>
  <Text text={"Manual controls........"}/>
      <div className='p-5 '>
        <Stack spacing={2} direction="row">
          <Button variant="outlined" onClick={() => handleClick("s")}>tablet</Button>
          <Button variant="outlined" onClick={() => handleClick("f")}>Open</Button>
          <Button variant="outlined" color='secondary' onClick={() => handleClick("b")}>Close</Button>

          <div className='pl-8'> <Button variant="outlined" color='error' onClick={() => handleClick("-")}>Reset</Button></div>
          
        </Stack>
       

      </div>
   
    </div>
  );
}