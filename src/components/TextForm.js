import React, {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("click");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase!!!","success");
    };
    
    const handleOnChange = (event)=>{
        // console.log("change");
        setText(event.target.value)
    };

    const handleLwClick = ()=>{
        let newText = text;
        setText(newText.toLowerCase());
        props.showAlert("Converted to LowerCase!!!","success");
    };
    
    const handleClearClick = ()=>{
        setText('');
        props.showAlert("Text Cleared!!!","success");
    };

    const handleCopyClick = ()=>{
        let newText = text;
        navigator.clipboard.writeText(newText);
        let cp = document.querySelector("#copy");
        cp.innerHTML = "Copied"
        setTimeout(() => {
            cp.innerHTML = "Copy"
        }, 500);
        props.showAlert("Copied to Clipboard","success");
    };

    const handleExtra = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Has Been Removed!!!","success");
    };

    const [text, setText] = useState("")
    return (
    <>
<div className="container">
    <h1>{props.heading}</h1>
        
    <div className="form-group">
      <label htmlFor="myBox">Enter the Text Below</label>
      <textarea className="form-control" value={text} onChange={handleOnChange} style={props.myStyle} id="myBox" rows="5"></textarea>
    </div>

    <div className='my-2 d-flex justify-center-center flex-wrap'>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>UpperCase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleLwClick}>LowerCase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>Clear</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" id="copy" onClick={handleCopyClick}>Copy</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleExtra}>Remove Extra Spaces</button>
    </div>
    </div>

    <div className="container my-3">
        <h2>Text Summary</h2>
        <p>{text.length>0 ? `${text.split(/\s+/).filter( (element)=>{ return element.length !== 0 }).length} words and ${text.length} character` : "Enter some Words or Characters"}</p>
        {/* here we have used /\s+/ because we have to split the text on both spaces and newline  */}
        <p>{text.length>0 ? 0.008 * text.split(/\s+/).filter( (element)=>{ return element.length !== 0 }).length : "Enter Something above to Get Minutes"} Minutes to read</p>

        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Enter Something above to Preview"}</p>
    </div>
    </>
    );
}
