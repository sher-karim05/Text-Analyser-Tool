import React from 'react'
import { useState } from 'react'

// setText('Text updated.')   //correct way to change state
export default function TextForm(props) {
    const [text, setText] = useState('');

    //change text to uppercase
    const handleUpClick = () =>{
        let newText = text.toUpperCase()
        setText(newText)
    }

    //function to change text to lower case
    const handleLowClick =() =>{
        let lowCase = text.toLowerCase()
        setText(lowCase)
    }

    //Copy text function
    const handleCopyText = () =>{
      const text = document.querySelector('#myBox');
      text.select()
      navigator.clipboard.writeText(text.value)
    }
    const handleChange = (event)=>{
        setText(event.target.value)
    }

    //Remove extra spaces
    const removeExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    }
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'? "white":"black"}}>
        <h3 className='heading'>{props.heading}</h3>
      <div cassName="mb-3">
        <textarea name="textarea" id="myBox" value={text} onChange={handleChange} style={{backgroundColor:props.mode === "dark"?"black":"white",color:props.mode === 'dark'? "white":"black"}} cols="5" rows="8" className="form-control" placeholder='Enter a text'></textarea>
        <button className="btn btn-primary my-3 "  onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-primary my-3 m-3"  onClick={handleLowClick}>Convert To LowerCase</button>
        <button className="btn btn-primary my-3 m-3"  onClick={handleCopyText}>Copy</button>
        <button className="btn btn-primary my-3 m-3"  onClick={removeExtraSpaces}>Remove Extra Space</button>
      </div>
    </div>
    <div className="container" style={{color:props.mode === 'dark'? "white":"black"}} >
        <h4>Text Summary: </h4>
        <b>{text.split(" ").length } words and {text.length} Characters</b><br/>
        <h4>Time Required To Read:</h4>
        <b>{0.008 * text.split(" ").length} Minutes to read</b>
        <h4>Preview: </h4>
        <p>{text.length>0?text:'Enter your text to preview'}</p>
        <h4>Email:</h4>
    </div>
    </>
  )
}
