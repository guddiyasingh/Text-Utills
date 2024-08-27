// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react'


function App() {
  const [ mode,setMode] = useState('light');

  const toggleMode =()=>{
    if(mode=== 'dark'){
      setMode ('light');
      document.body.style.backgroundColor='white'
    }
    else{
      setMode ('dark');
     document.body.style.backgroundColor='#031e45'
    }
  }
  return (
    <>
   
  {/* <Navbar title="textUtils" home="About"/> */}
  {/* <Navbar/> */}
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<div className="container my-3">
  <Textform heading="Enter the text to analize below" mode={mode}/>
 {/* <About/> */}
  </div>
  </>
  );

}

export default App;
