import React from 'react'

import {Accordion, AccordionItem} from "@nextui-org/react";

export  function FAQ() {
  const qns =["What is ProCase?","How to use ProCase?","How to connect mobile with case?"]

  
  const ans=["Procase is a mobile app to track our Health and giving health suggestions accordngly with the help of a smart mobile case.","Connect the ProCase to mobile app and enjoy.","Scan with given QR code on the box and attach the smart case to phone."]

  return (
   <div>
    <p className="text-2xl text-left font-bold pl-3 pb-5" >FAQ's</p>
    <div>
    <Accordion variant="splitted">
     

     {qns.map((value,key)=>(
       <AccordionItem key={key} aria-label="Accordion 1" title={value}>
       {ans[key]}
       </AccordionItem>

     ))}
     
   </Accordion>
    </div>
   </div>
  );
}

