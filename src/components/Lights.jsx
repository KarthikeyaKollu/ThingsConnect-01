import React,{useState,useEffect} from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AddIcon from '@mui/icons-material/Add';
import {readData,writeData} from "./firebaseExample"

export  function Light() {
    
  const listDefaults = [
    {
      title: "Bedroom",

      status:false
    },
    {
      title: "Kitchen",
  
      status:false
    },
    {
      title: "HallLights",

      status:false
    },
    {
      title: "Outdoor",

      status:false
    },
    {
      title: "Bedroom 2",
      status:false
    },
    {
      title: "Bathroom",

      status:false
    },
  ];

  const [lights, setLights] = useState(listDefaults);
  const [state, setstate] = useState(0);
  const toggleStatus = (index) => {
    const updatedLights = [...lights]; // Create a copy of the array
    updatedLights[index].status = !updatedLights[index].status; // Toggle the status
    writeData('/test',updatedLights);
    setLights(updatedLights); // Update the state
    setstate(state+1);
  };


  useEffect(()=>{

    getData()
         
 },[state])

 const getData=async ()=>{

   const userData=await readData("/test");
   console.log(userData);
    setLights(userData)
  console.log("first")
 }

  return (
    <div> 
        <h1 className="text-center font-2xl font-bold">Control Electronics</h1>
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 p-5 ">
      {lights.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => toggleStatus(index)} className={`${item.status && "bg-yellow-400"}`}>
          <CardBody className="overflow-visible p-0 ">
            <div
            
              className="w-full object-cover h-[100px] flex items-center justify-center "
              
            >
                    <LightbulbIcon fontSize="large" />

            </div>

          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}

      <Card shadow="sm" isPressable>
          <CardBody className="overflow-visible p-0 ">
            <div
            
              className="w-full object-cover h-[140px] flex items-center justify-center "
              
            >
                    <AddIcon fontSize="large" />

            </div>

          </CardBody>
        </Card>
    </div>
        
          </div>
  );
}
