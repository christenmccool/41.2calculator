import React from 'react';
import {useParams} from 'react-router-dom';
import './Calculator.css'

const Calculator = () => {
  const {operation, num1, num2} = useParams();

  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;

  const renderAdd = (a, b) => (
    <div>
      <h3>{`${a} + ${b}`}</h3>
      <h1>{add(+a,+b)}</h1>
    </div>
  )
  const renderSubtract = (a, b) => (
    <div>
      <h3>{`${a} - ${b}`}</h3>
      <h1>{subtract(+a,+b)}</h1>
    </div>
  )
  const renderMultiply = (a, b) => (
    <div>
      <h3>{`${a} * ${b}`}</h3>
      <h1>{multiply(+a,+b)}</h1>
    </div>
  )
  const renderDivide = (a, b) => (
    <div>
      <h3>{`${a} / ${b}`}</h3>
      <h1>{divide(+a,+b)}</h1>
    </div>
  )
  
  return (
    <div className="Calculator">
      {operation==='add' ? renderAdd(num1, num2) : null}
      {operation==='subtract' ? renderSubtract(num1, num2) : null}
      {operation==='multiply' ? renderMultiply(num1, num2) : null}
      {operation==='divide' ? renderDivide(num1, num2) : null}
    </div>
  )
}

export default Calculator;
