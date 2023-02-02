// Naziya = "naziya"
import React,{useState} from 'react'

function TextUtils(props){

    const [message, text] = useState('');
    const uppercase = (string) => {
        return text(string.target.value.toUpperCase())
    }
    const lowercase = (string) => {
        console.log('this is lower function')
    }
    
    return (
        <>
            <div className='container my-3'>
                <div className="mb-3">
                    <h2>Text Utility</h2>
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Your Text Below</label>
                    <textarea className="form-control" value={message} id="exampleFormControlTextarea1" rows="9" onChange={uppercase}></textarea>
                </div>
                <button className='btn btn-primary' onClick={uppercase}>Convert To UpperCase</button>
                <button className='btn btn-primary mx-2' onClick={lowercase}>Convert To LowerCase</button>
            </div>  
        </>
    )
}

export default TextUtils