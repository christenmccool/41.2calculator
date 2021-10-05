import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Calculator from './Calculator';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/:operation/:num1/:num2">
        <Calculator />
      </Route>
      <Route><h1>Not found</h1></Route>
    </Switch>
  )
}

export default Routes;