import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
function App() {
const [mode, setMode] = useState('light')
const toggleMode = () =>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor="black"
    // document.body.style.color="white"
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='rgb(193 125 77)'; 
    // document.body.style.color='black' 
  }
}
return (
    <>
     <Navbar title='Text Analyser' aboutText='About Text Analyser' mode={mode} toggleMode={toggleMode}/>
     <div className="container">
     <TextForm heading='Enter Text To Analyse✍🔠' mode={mode}/>
     <About mode={mode}/>
     </div>
    </>
  );
}

export default App;

