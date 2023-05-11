import React, { useState } from 'react';

export default function TextArea(props) {

    let textStyle = {
        margin: "15px",
        marginLeft: "16px",
        marginRight: "16px"
    }
    let myStyle = {
        backgroundColor: (props.mode==='light')?'white':'grey',
        color: (props.mode==='light')?'black':'white'
      }

    const [text,setText] = useState('');

   const handleChange = (event)=>{
    setText(event.target.value);
    // props.showAlert('Done','success');
   }
   const upperCase = ()=>{
    let upperText = text.toUpperCase();
    setText(upperText);
    props.showAlert('Done uppercase','success');
   }

    
  return (
    <div>
    <div className="form-floating" style={textStyle}>
  <textarea className="form-control" placeholder="Enter your feedback here" value={text} style={myStyle} id="floatingTextarea" rows="8" onChange={handleChange}></textarea>
  <label for="floatingTextarea" >{props.heading}</label>
   </div>
   <button className={`btn btn-primary mx-3 text-${props.mode==='light'?'dark':'light'}`} onClick={upperCase}>Convert to uppercase</button>
   <div className="container my-4 mx-2" style={myStyle}>
    <h2>Preview</h2>
    <p>{text.length>0?text:'Enter something to preview'}</p>
   </div>
  </div>
  
  )
}
