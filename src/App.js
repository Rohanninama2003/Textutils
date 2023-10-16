import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';

import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
   const [mode,setmode] =useState('light');
   const [alert,setalert] =useState(null);

   const showalert =(message,type)=>{
         setalert({
          msg: message,
          type: type
         })

         setTimeout(() =>{
              setalert(null);
         },1200);
   }
    const togglemode =()=>{
      if(mode==='light'){
        setmode('dark');
        document.body.style.backgroundColor='#43484d';
        showalert("Dark mode has enabled","success");
        document.title='Textutils-Dark mode';
      }
      else {
        setmode('light');
        document.body.style.backgroundColor='white';
        showalert("Light mode has enabled","success");
        document.title='Textutils-Light mode';
      }
    }
  return (
    <>   
        <BrowserRouter>
       <Navbar title="Textutils" mode={mode} togglemode={togglemode}/>
       <Alert alert={alert}/>
       
       
       <div className="container my-3"> 
       <Routes>
            <Route exact path="/about" element={<About/>}></Route>
            <Route
              exact path="/"
              element={
                <Textarea showalert={showalert} title="enter text to analyse" mode={mode}/>
              }
            ></Route>
          </Routes>
      
       
       {/* <About/> */}  
       </div>
       </BrowserRouter>
       
       </>  
  );
}

export default App;
