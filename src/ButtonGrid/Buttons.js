import React from 'react';
import './Button.css';

let Buttons = ({setResult, outputs, setOutputs, inputs, setInputs, calculator}) => {
    const clickHandler = (e) => {

        if(!isNaN(e.target.textContent) || e.target.textContent === '.'){
            numberClicked(e.target.textContent);
        }else if(isNaN(e.target.textContent) && e.target.textContent !== '=' && e.target.textContent !== '.' &&
        outputs[outputs.length - 1] !== '/'&&outputs[outputs.length - 1] !== '*'&&outputs[outputs.length - 1] !== '+' && outputs[outputs.length - 1] !== '-'){
            operatorClicked(e.target.textContent);
        }else if(e.target.textContent === '='){
            equalClicked();
            calculator();
        }
    }
    const numberClicked = (el) => {
        setInputs(inputs+el);
    }

    const operatorClicked = (el) =>{
        //setOutputs([inputs, el]);  // submit number, operator
        outputs.push(inputs, el);
        console.log(outputs);
        setInputs("");
    }
    const equalClicked = () =>{
        outputs.push(inputs)  // submit number, operator
        setInputs("");
    }
    const acButton = () =>{
        setInputs("");
        setOutputs([]);
        setResult(null);
    }
    const cButton = () =>{
        setInputs("");
    }

    return(
        <div className="buttons">
            <button onClick={acButton} className="ac">AC</button>
            <button onClick={cButton} className="c">C</button>
            <button onClick={clickHandler}>1</button>
            <button onClick={clickHandler}>2</button>
            <button onClick={clickHandler}>3</button>
            <button onClick={clickHandler} className="sp">/</button>
            <button onClick={clickHandler}>4</button>
            <button onClick={clickHandler}>5</button>
            <button onClick={clickHandler}>6</button>
            <button onClick={clickHandler}className="sp">*</button>
            <button onClick={clickHandler}>7</button>
            <button onClick={clickHandler}>8</button>
            <button onClick={clickHandler}>9</button>
            <button onClick={clickHandler} className="sp">+</button>
            <button onClick={clickHandler}>0</button>
            <button onClick={clickHandler}>.</button>
            <button onClick={clickHandler}>=</button>
            <button onClick={clickHandler} className="sp">-</button>
        </div>
    );
}

export default Buttons;