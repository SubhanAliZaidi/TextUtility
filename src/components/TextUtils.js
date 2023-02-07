// Naziya = "naziya"
import React, { useState } from 'react'


export default function TextUtils(props) {

    document.title = 'Nazloop - Home';
    const [message, updateMessage] = useState('');
    const dark = {
        backgroundColor: 'var(--bg-color)',
        color: 'var(--fg-color)',
    }
    const [textposition, settextposition] = useState('Copy Text')

    const uppercase = () => {
        return updateMessage(message.toUpperCase())
    }
    const lowercase = () => {
        return updateMessage(message.toLowerCase())
    }
    const clearfunction = () => {
        return updateMessage('')
    }
    const reversestr = () => {
        return updateMessage(message.split("").reverse().join(""));
    }
    const dashseperator = () => {
        return updateMessage(message.split(' ').join("-"));
    }
    const dashremover = () => {
        return updateMessage(message.split('-').join(" "));
    }
    const allSpaceRemover = () => {
        return updateMessage(message.split(' ').join(""));
    }
    const spaceRemover = () => {
        return updateMessage(message.split(/\s+/).join(" "));
    }
    const singleSpaceRemover = () => {
        return updateMessage(message.split("  ").join(" "));
    }
    function toTitleCase() {
        return updateMessage(message.toLowerCase().split(' ').map(function (word) {
            return (word.charAt(0).toUpperCase() + word.slice(1))
        }).join(' '))
    }
    const copyToClipboard = () => {
        const changeText = () => {
            settextposition('Copy Again')
        }
        navigator.clipboard.writeText(message);
        settextposition('Copied Successfully')
        setTimeout(changeText, 2000)
    }
    const onchangehandler = (event) => {
        updateMessage(event.target.value)
    }

    return (
        <>
            <div className='container backdark my-3'>
                <div className="mb-3">
                    <h2>Text Utility</h2>
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter / Paste Your Text Below</label>
                    <textarea autoFocus className="form-control" style={dark} value={message} rows="10" id='textarea' onChange={onchangehandler}></textarea>
                </div>
                <div className='my-2'>
                    <h4>Text Summary</h4>
                    <p><b>{message.split(/\s+/).filter((elements) => { return elements.length !== 0 }).length}</b> Words, <b>{message.length}</b> Characters
                        <br />
                        {/* parseFloat(decimalPart.toPrecision(3)) */}
                        <b>{(0.008 * (message.split(/\s+/).filter((elements) => { return elements.length !== 0 }).length)).toFixed(3)} </b> Minutes To Read
                    </p>
                </div>
                <button disabled={message.length === 0} className='btn btn-primary my-2' onClick={uppercase}>Convert To UpperCase</button>
                <button disabled={message.length === 0} className='btn btn-primary mx-2 my-2' onClick={lowercase}>Convert To LowerCase</button>
                <button disabled={message.length === 0} className='btn btn-primary my-2' onClick={toTitleCase}>Convert To Title Case</button>
                <button disabled={message.length === 0} className='btn btn-primary mx-2 my-2' onClick={reversestr}>Reverse</button>
                <button disabled={message.length === 0} className='btn btn-primary my-2' onClick={dashseperator}>Dash Seperator</button>
                <button disabled={message.length === 0} className='btn btn-primary mx-2 my-2' onClick={dashremover}>Dash Remover</button>
                <button disabled={message.length === 0} className='btn btn-primary my-2' onClick={allSpaceRemover}>All Space Remover</button>
                <button disabled={message.length === 0} className='btn btn-primary mx-2 my-2' onClick={spaceRemover}>Space Remover</button>
                <button disabled={message.length === 0} className='btn btn-primary my-2' onClick={singleSpaceRemover}>Single Space Remover</button>
                <br />
                <button disabled={message.length === 0} className='btn btn-success mx-2 my-2' onClick={copyToClipboard}>{textposition}</button>
                <button disabled={message.length === 0} className='btn btn-warning my-3 my-2' onClick={clearfunction}>Clear Text</button>
            </div>
            <div className='container backdark'>
                <h3>Preview</h3>
                <div className='my-2'>
                    <p>{message.length > 0 ? message : "Nothing To Preview"}</p>
                </div>
            </div>
        </>
    )
}