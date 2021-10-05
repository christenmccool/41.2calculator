import React from 'react';
import {useParams} from 'react-router-dom';
import './Calculator.css'

const Calculator = () => {
  const {operation, num1, num2} = useParams();

  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;

  const withRender = (opFunc, opSym) => {
    return function(a,b) {
      const result = opFunc(a,b);
      return (
        <div>
          <h3>{`${a} ${opSym} ${b}`}</h3>
          <h1>{opFunc(+a,+b)}</h1>
        </div>
      )
    }
  }

  const addWithRender = withRender(add, '+');
  const subtractWithRender = withRender(subtract, '-');
  const multiplyWithRender = withRender(multiply, '*');
  const divideWithRender = withRender(divide, '/');

  return (
    <div className="Calculator">
      {operation==='add' ? addWithRender(num1, num2) : null}
      {operation==='subtract' ? subtractWithRender(num1, num2) : null}
      {operation==='multiply' ? multiplyWithRender(num1, num2) : null}
      {operation==='divide' ? divideWithRender(num1, num2) : null}
    </div>
  )
}

export default Calculator;
