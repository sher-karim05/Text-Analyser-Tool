import React from 'react'

export default function About(props) {
  return (
    <div className='container' style={{backgroundColor:props.mode === "dark"?"black":"white",color:props.mode === 'dark'? "white":"black"}}>
        <h1 className='my-3' style={{color:props.mode === 'dark'? "white":"black"}}>About Us</h1>
        <p className="para" style={{color:props.mode === 'dark'? "white":"black",backgroundColor:props.mode === "dark"?"black":"white"}}>Text-Utils is a web tool to assist r people in daily tasks by providing tools for manipulating text data.  Base 64 and URL encoder/decoder, and many other tools to handle text</p>
      </div>
  )
}
