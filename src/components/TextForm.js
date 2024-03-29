import React, { useState } from 'react'

export default function TextForm(props) {


    const [text, setText] = useState('')// isme state ko set kr diya hai initially as null and ek setText naam ka function bna diya hai and then hum usko update kr rhe hai.....takki hame baar baar change na krna pade har button ke liye.


    // FUNCTION FOR UPPER CASE BUTTON--------------
    const handleUpClick = () => {
        // console.log("Button was Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text has been successfully converted to UpperCase", "success")
    }


     // FUNCTION FOR LOWER CASE BUTTON--------------
    const handleLoClick = () => {
        // console.log("Button was Clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text has been successfully converted to LowerCase", "success")
    }


    // FUNCTION FOR CLEAR BUTTON--------------
    const handleClearClick = () => {
        //more optimization due to the window.confirm command
        let isExecuted = window.confirm("Are you sure to execute this action?");
        if(isExecuted===true)
        {
            setText("");
            props.showAlert("Text has been cleared Successfully", "success");
        }
        else{
            setText(text);
        }
    }


    // ye textArea mai lagaya hai taaki hum Text ko update kr sake through setText
    const handleOnChange = (event) => {
        // console.log("Onchange");
        setText(event.target.value);
    }



    // FUNCTION FOR COPY BUTTON--------------
    const handleOnCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text has been copied Successfully", "success");
    }



    // FUNCTION FOR CLEARING SPACE BUTTON--------------
    const handleExtraSpaces = () => {
        // console.log("i am extra spaces remover");
        var newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces has been removed Successfully", "success");
    }



    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1> {props.heading}</h1>
                <div className="my-3">

                    
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" value={text} rows="8" onChange={handleOnChange}></textarea>


                </div>
                <button disabled={text.length === 0} className="btn btn-primary my-2 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary my-2 mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary my-2 mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-success my-2 mx-1" onClick={handleOnCopy}>Copy to ClipBoard</button>
                <button disabled={text.length === 0} className="btn btn-danger my-2 mx-1" onClick={handleClearClick}  >Clear above Text</button>
            </div>



            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Summary-</h2>
                <p className='para'> words {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} and {text.length} characters </p>
            </div>
        </>
    )
}
