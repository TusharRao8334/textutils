import React, { useState } from 'react'

export default function TextForm(props) {

    // uppecase string logic
    const convertuppercase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    // lowercase string logic
    const convertlowercase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const cleartext = () => {
        let newText = " ";
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log("on Change");
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className="container">
                <h4>{props.heading}</h4>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label"></label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder="Enter Your Text here to opearte.......!"></textarea>
                </div>
                <button className="btn btn-primary btn-sm mx-1" onClick={convertuppercase}>Convert to UpperCase</button>
                <button className="btn btn-success btn-sm mx-1" onClick={convertlowercase}>Convert to LowerCase</button>
                <button className="btn btn-danger btn-sm mx-1" onClick={cleartext}>Clear Text</button>
            </div>
            <div className="container my-3">
                <h5>Text Summery as Follows :</h5>
                <p>The Above text contain {text.length} characters and {text.split(" ").length} words</p>
                <p>{0.008 * text.split(" ").length}Minutes to read above text</p>
                <h5>Preview Text</h5>
                <p>{text}</p>
            </div>
        </>
    );
}
