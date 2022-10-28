import './Input.css';
import React from 'react';

function input({text,result}) {
    return (
        <div className='Input-wrapper'>
       <div className="result">
           <h1>{result}</h1>
       </div>
       <div className="test">
         <h3>{text}</h3>
       </div>
        </div>
    );
}

export default input;