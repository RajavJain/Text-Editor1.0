import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpClick=()=>{
        console.log("Button was Clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text has been successfully converted to UpperCase","success")
    }
    const handleLoClick=()=>{
        console.log("Button was Clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Text has been successfully converted to LowerCase","success")
    }
    const handleClearClick=()=>{
        // alert("Do you Really want to clear the Text?")
        setText("");
        props.showAlert("Text has been cleared Successfully","success");

    }
    const handleOnChange=(event)=>{
        console.log("Onchange");
        setText(event.target.value);
    }
    const handleOnCopy=()=>{
        // console.log("I am Copy Button");
        var copyText=document.getElementById("myBox");
        // console.log(text);
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Text has been copied Successfully","success");
        // alert("Successfully Copied!!");
    }
    const handleExtraSpaces=()=>{
        console.log("i am ecxtra spaces remover");
        var newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces has been removed Successfully","success");
    }
    const [text,setText]=useState('')

    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1> {props.heading}</h1>
            <div className="my-3">
                <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" value={text} rows="8" onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary my-3 mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary my-3 " onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-success my-3 mx-3" onClick={handleOnCopy}>Copy to ClipBoard</button>
            <button className="btn btn-danger my-3" onClick={handleClearClick}  >Clear above Text</button>

        </div>

        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your Summary-</h2>
            <p className='para'> words {text.split(" ").length} and {text.length} characters </p>
        </div>
        </>
    )
}
