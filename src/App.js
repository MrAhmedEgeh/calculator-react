import React, {useState} from 'react';
/*--importing css-----*/
import './App.css';
/*--importing components-----*/
import Buttons from './ButtonGrid/Buttons';
import Results from './Results/Results.js';

function App() {
  const [inputs, setInputs] = useState("");
  const [outputs, setOutputs] = useState([]);
  const [result, setResult] = useState(null);

 const calculator = () => {
   console.log(outputs);
   // if the last element is (/ * + -) meaning that there's no last operand then add zero as last operand
  if(outputs[outputs.length - 1] === '/'||outputs[outputs.length - 1] === '*'|outputs[outputs.length - 1] === '+'||outputs[outputs.length - 1] === '-'){outputs.push("0"); console.log(outputs)}
  if(outputs.includes('/')){
    setOutputs(...outputs, divisons(outputs));
  }
  if(outputs.includes("*")){
    setOutputs(...outputs, multiplication(outputs));
  }

  if(outputs.includes('-')){
    setOutputs(...outputs, subtract(outputs));
  }

  if(outputs.includes('+')){
    setOutputs(...outputs, summation(outputs));
  }

  if(outputs.length === 1){
    setResult(outputs[0]);
    setInputs(outputs[0]);
    setOutputs([]);
  }
 }
const divisons = (param) =>{
  while(param.includes("/")){
    let i = param.indexOf("/");
  let num = parseFloat(param[i-1]);
  let num2 = parseFloat(param[i+1]);
  param.splice(i-1, 3, (num/num2));
  }
  return param;
}
const multiplication = (param) =>{
  while(param.includes("*")){
    let i = param.indexOf("*");
  let num = parseFloat(param[i-1]);
  let num2 = parseFloat(param[i+1]);
  param.splice(i-1, 3, (num*num2));
  }
  return param;
}


const summation = (param) =>{
  while(param.includes("+")){
    let i = param.indexOf("+");
  let num = parseFloat(param[i-1]);
  let num2 = parseFloat(param[i+1]);
  param.splice(i-1, 3, (num+num2));
  }
  return param;

}
const subtract = (param) =>{
  while(param.includes("-")){
    let i = param.indexOf("-");
  let num = parseFloat(param[i-1]);
  let num2 = parseFloat(param[i+1]);
  param.splice(i-1, 3, (num-num2));
  }
  return param;
}
//console.log(outputs);

  return (

    <div className="App">
      <Results inputs={inputs} result={result}/>
       <Buttons setResult={setResult} calculator={calculator} outputs={outputs} setOutputs={setOutputs} setInputs={setInputs} inputs={inputs} />
    </div>
  );
}

export default App;
