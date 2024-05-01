import React, { useEffect,useState } from 'react';
import { Wrapper } from './Wrapper';
import { Profile } from './components/Profile';
import { Suggestions } from './components/Suggestions';
import {Headder} from "./components/Header"
import {Page} from "./components/Page"
import {FAQ} from "./components/FAQ"
import {About} from "./components/About"
import {BluetoothReceiver} from "./components/BluetoothReceiver"
import {Light} from './components/Lights'
import {Exercises} from './components/Exercises'
import { BrowserRouter, Route, Routes, useLocation, Outlet } from 'react-router-dom';
import { Tabs, Tab } from '@nextui-org/react';
import { Link } from 'react-router-dom';

import {ResponsiveDateTimePickers} from './components/Schedule'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { Workout } from './components/Workout';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { HealthPage } from './components/HealthPage';

const App = () => {
  const { pathname } = useLocation();
  const [appHeight, setAppHeight] = useState(window.innerHeight);

 
  
  return (
    <>
       
      <div  className="flex flex-col gap-2" >
      <Headder/>

        
        <Routes>
          <Route path="/" element={<Wrapper />}>
            <Route index element={<Outlet />} />
          </Route>
          <Route path="/workout" element={<Exercises />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/faq" element={<FAQ/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/ble" element={<BluetoothReceiver/>} />
          <Route path="/breath" element={<Page type={"breath"}/>} />
          <Route path="/exercise" element={<Page type={"exercise"}/>} />
          <Route path="/walk" element={<Page type={"walk"}/>} />
          <Route path="/health" element={<HealthPage/>} />
          <Route path="/lights" element={<Light/>} />
          <Route path="/schedule" element={<ResponsiveDateTimePickers/>} />
        </Routes>


        
        <div className="flex justify-center fixed bottom-0 w-full bg-gray-100 p-2 z-50 ">
        <Tabs selectedKey={pathname} color="secondary" aria-label="Tabs" classNames="" size='lg' fullWidth radius='sm' variant="light" >

          <Tab key="/"  title={
            <div className="flex items-center space-x-2">
              
              <span><Link to="/"><HomeOutlinedIcon fontSize='large'/></Link></span>
            </div>}
            />

          <Tab key="/health"  title={
            <div className="flex items-center space-x-2">
            
              <span><Link to="/health"><FavoriteBorderIcon fontSize='large'/></Link></span>
            </div>} />

          <Tab key="/workout"  title={
            <div className="flex items-center space-x-2">
              
              <span><Link to="/workout"><FitnessCenterIcon fontSize='large'/></Link></span>
            </div>} />

            <Tab key="/profile"  title={
            <div className="flex items-center space-x-2">
              
              <span><Link to="/profile"><PermIdentityIcon fontSize='large'/></Link></span>
            </div>} />
            
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default App;