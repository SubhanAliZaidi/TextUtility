// Naziya = "naziya"
import React, { useState } from 'react'


export default function TextUtils(props) {

    const [message, updateMessage] = useState('');
    const [dark, setdark] = useState({
        backgroundColor:'var(--bg-color)',
        color:'var(--fg-color)',
    })
    const [textposition, settextposition] = useState('Copy Text')

    const uppercase = () => {
        // this took the current message value which user enters in textarea and convert it into uppercase (basically Message gives the current value of textarea)
        return updateMessage(message.toUpperCase())
    }
    const lowercase = () => {
        // this took the current message value which user enters in textarea and convert it into lowercase (basically Message gives the current value of textarea)
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
    const copyToClipboard= () => {

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
                    <p><b>{(message.length) == 0 ? message.split(" ").length - 1 : message.split(' ').length}</b> Words, <b>{message.length}</b> Characters
                        <br />
                        {/* parseFloat(decimalPart.toPrecision(3)) */}
                        <b>{(message.length) == 0 ? (0.008 * (message.split(" ").length - 1)).toFixed(3) : (0.008 * (message.split(" ").length)).toFixed(3)} </b> Minutes To Read
                    </p>
                </div>
                <button className='btn btn-primary my-2' onClick={uppercase}>Convert To UpperCase</button>
                <button className='btn btn-primary mx-2 my-2' onClick={lowercase}>Convert To LowerCase</button>
                <button className='btn btn-primary my-2' onClick={reversestr}>Reverse</button>
                <button className='btn btn-primary mx-2 my-2' onClick={dashseperator}>Dash Seperator</button>
                <button className='btn btn-primary my-2' onClick={dashremover}>Dash Remover</button>
                <button className='btn btn-primary mx-2 my-2' onClick={copyToClipboard}>{textposition}</button>
                <br />
                <button className='btn btn-warning my-3 my-2' onClick={clearfunction}>Clear Text</button>
            </div>
            <div className='container backdark'>
                <h3>Preview</h3>
                <div className='my-2'>
                    <p>{message.length> 0 ? message : "Enter Something To The Text Box To Preview Text Here"}</p>
                </div>
            </div>
        </>
    )
}