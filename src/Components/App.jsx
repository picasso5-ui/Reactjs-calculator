import React ,{useState} from 'react'
import Button from "../Components/Button";
import Input from '../Components/Input';
import './App.css'
import * as math from 'mathjs';//install mathjs


function App() {
const [text,setText] = useState("");
const [result,setResult] = useState("");

const addToText = (val) =>{
setText((text)=>[...text,val + " "])
}

const resetInput =() =>{
    setText("")
    setResult("")
}

const calculateResult = () =>{
    const input = text.join("") //Remove comamas inside our text string
    setResult(math.evaluate(input))

}


    const buttonColor = 'orangered'
    return(
        <div className='App'>
             <div className="calc-wrapper">
              <Input text={text} result={result}/>
                <div className="rows">
                <Button symbol="7" handleClick={addToText}/>
                <Button symbol="8" handleClick={addToText}/>
                <Button symbol="9" handleClick={addToText}/>
                <Button symbol="/" color={buttonColor} handleClick={addToText}/>
                </div>
                <div className="rows">
                <Button symbol="4" handleClick={addToText}/>
                <Button symbol="5" handleClick={addToText}/>
                <Button symbol="6" handleClick={addToText}/>
                <Button symbol="*" color={buttonColor} handleClick={addToText}/>
                </div>
                <div className="rows">
                <Button symbol="1" handleClick={addToText}/>
                <Button symbol="2" handleClick={addToText}/>
                <Button symbol="3" handleClick={addToText} />
                <Button symbol="+" color={buttonColor} handleClick={addToText}/>
                </div>
                <div className="rows">
                <Button symbol="0" handleClick={addToText}/>
                <Button symbol="." handleClick={addToText}/>
                <Button symbol="="  handleClick={calculateResult}/>
                <Button symbol="-" color={buttonColor} handleClick={addToText}/>
                </div>
                <Button  symbol="clear" color='green' handleClick={resetInput}/>
             </div>
        </div>
    )
}
export default App;