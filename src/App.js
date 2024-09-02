// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react'


function App() {
  const [ mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{

    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    },1200);
  }
  const toggleMode =()=>{
    if(mode=== 'dark'){
      setMode ('light');
      document.body.style.backgroundColor='white'
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils-Dark Mode';
      // setInterval(()=>{
      //   document.title="TextUtils is Amazing Mode";
      // },2000);
      // setInterval(() => {
      //   document.title = 'install Textutils Now'
      // },15000);
    }
    else{
      setMode ('dark');
     document.body.style.backgroundColor='#031e45'
     showAlert("Light mode has been enabled","success");
     document.title = "TextUtils-Light Mode"
    }
  }

  const redMoode=()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Dark mode has been enabled', 'success');
    }
    else{
      setMode('dark');
     document.body.style.backgroundColor = 'red';
     showAlert('Light mode has been enabled','success')
    }
  }

  const greenMode =()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert('Dark mode has been enabled',"success");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = "green";
      showAlert('light mode has been enabled','success')
    }
  }
  return (
    <>
   
  {/* <Navbar title="textUtils" home="About"/> */}
  {/* <Navbar/> */}
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} redMoode={redMoode} greenMode={greenMode}/>
  <Alert alert={alert}/>
<div className="container my-3">
  <Textform heading="Enter the text to analize below" mode={mode} showAlert ={showAlert}/>
 {/* <About/> */}
  </div>
  </>
  );

}

export default App;
