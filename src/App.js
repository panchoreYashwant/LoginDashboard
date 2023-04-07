import logo from './logo.svg';
import './App.css';
import React, { createContext, useState } from 'react';
import TimeTrackerApp from './Components/TimeTrackerApp';
import LoginScreen from './Comp_2/Login';
import Dashboard from './Comp_2/DashBoard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
  

export const MyContext = createContext();
function App() {
  const[data,setData] = useState()

  return (
   <>
    <BrowserRouter>
    <Routes>
    <Route path = "/" element = {<LoginScreen/>}></Route>
    <Route path = "/dashboard" element = {<Dashboard/>}></Route>
    


    </Routes>
    </BrowserRouter>
  
    </>
  
  );
}

export default App;
