import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';


export const Headder = () => {
  const navigate = useNavigate();
  return (
    <div>
     <HeadderStyle className='shadow-lg'> 
        
      <span><Link to="/">ThingsConnect</Link></span>

      <Link to=""><NotificationsIcon color="primary" /></Link>
  
      </HeadderStyle>
      
    </div>
  )
}

const HeadderStyle=styled.div`  
    font-size: 30px;
    font-weight:bold;
    padding-top: 40px;
    padding-left: 10px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 20px 25px;
`
