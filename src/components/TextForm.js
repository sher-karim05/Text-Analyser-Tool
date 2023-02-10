import React from 'react'
import { useState } from 'react'

// setText('Text updated.')   //correct way to change state
export default function TextForm(props) {
    const [text, setText] = useState('Enter text here...');

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

    const handleChange = (event)=>{
        setText(event.target.value)
    }
  return (
    <>
    <div className='container '>
        <h3 className='heading'>{props.heading}</h3>
      <div className="mb-3">
        <textarea name="textarea" id="myBox" value={text} onChange={handleChange} cols="5" rows="8" className="form-control" ></textarea>
        <button className="btn btn-primary my-3 "  onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-success my-3 ml-3"  onClick={handleLowClick}>Convert To LowerCase</button>
      </div>
    </div>
    <div className="container">
        <h4>Text Summary: </h4>
        <b>{text.split(" ").length } words and {text.length} Characters</b><br/>
        <h4>Time Required To Read:</h4>
        <b>{0.008 * text.split(" ").length} Minutes to read</b>
        <h4>Preview: </h4>
        <p>{text}</p>
        <b></b>
    </div>
    </>
  )
}
