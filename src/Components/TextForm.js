import React, { useState } from 'react'

export default function TextForm(props) {
    const hadleclick = () => {
        // console.log("Uppercase Was Clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("on Change");
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter text here");
    return (
        <div>
            <h6>{props.heading}</h6>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label"></label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={hadleclick}>Convert to UpperCase</button>
        </div>
    );
}
