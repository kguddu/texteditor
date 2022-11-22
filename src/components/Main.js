import React, { useState } from 'react'


const Main = () => {
    const [text, newText] = useState("");

    const handleUpperCase = () => {
        let upperCase = text.toUpperCase();
        newText(upperCase);
    }
    const handlelowerCase = () => {
        let lowerCase = text.toLowerCase();
        newText(lowerCase);
    }
    const handleExtraSpace = () => {
        let extraSpace = text.split(/[ ]+/);
        newText(extraSpace.join(" "));
    }
    const handleCopy = () => {
        let textCopy = document.getElementById("textcopy")
        textCopy.select();
        navigator.clipboard.writeText(textCopy.value)
    }
    const clearText = () => {
        newText('');
    }
    const onChangeHandle = (e) => {
        newText(e.target.value);

    }
    return (
        <div className='container'>
            <div className="input-field">
                <textarea id="textcopy" placeholder="Enter your text here" value={text} onChange={onChangeHandle}></textarea>
            </div>
            <div className='main-btn'>
                <button className='bg-btn' onClick={handleUpperCase}>UpperCase</button>
                <button className='bg-btn' onClick={handlelowerCase}>LowerCase</button>
                <button className='bg-btn' onClick={handleExtraSpace}>Remove Extraspace</button>
                <button className='bg-btn' onClick={clearText}>ClearText</button>
                <button className='bg-btn' onClick={handleCopy}>Copy Text</button>

            </div>
        </div>
    )
}

export default Main