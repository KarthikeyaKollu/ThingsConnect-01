import React,{useEffect,useState} from 'react'
import {Card} from "./card"
import { Button1 } from './Button'
import {readData} from "./firebaseExample"
export const HealthPage = () => {
  const [data, setData] = useState(0);


  const getData= async ()=>{
    var d = await readData("/UserData")
    setData(d)
  }
  useEffect(()=>{
    getData()
  },[data])

  return (
    <>
    <div className="p-6 grid grid-cols-2 gap-5">
        
    <Card title={"SpO2"} range={"100-200"} value={data.spo2} timestamp={"5"}/>
    <Card title={"BPM"} range={"100-200"} value={data.bpm} timestamp={"5"}/>
    <Card title={"Temp"} range={"100-200"} value={data.temp} timestamp={"5"}/>
     
    </div>

    <Button1/>
    </>
  )
}
