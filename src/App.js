
import React, { useState } from 'react'
import About from './components/About'
import Alert from './components/Alert'
import {
  Route,
  Router,
  Link
} from "react-router-dom";

import Form from "./components/Form"
import Nav from "./components/Nav"



const App = () => {
  const [alert, setalert] = useState(null)

 const showAlert  = (message,type)=>{
setalert({
  msg:message,
  type:type
})
setTimeout(() => {
  setalert(null)
}, 1500);
 }
 
const [mode, setmode] = useState('dark')
const toggleMode = ()=>{
  if(mode === "light"){
    setmode("dark")
    showAlert( "Light mode has been enabled","success")
  }else{
    setmode("light")
  }
}

  return (
   <>
     <Nav mode = {mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>

    <div className='container mt-5'>

        

    <Form Heading="Enter your text"/>
          

    


    </div>
 
 
        </>
  )
}

export default App