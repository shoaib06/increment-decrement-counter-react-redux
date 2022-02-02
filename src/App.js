import React from 'react';
import './App.css';

import {incNumber, decNumber } from './actions/index';

import { useSelector, useDispatch } from 'react-redux';


const App = ()=>{
  const myState = useSelector((state)=>state.changeTheNumber);
  const dispatch= useDispatch();
  return (
    <>
      <div className='container'>
        <h1> Increment/Decrement counter</h1>
        <h3>Using React Redux</h3>
        <div className='quantity'>

          <a className='quantity__minus' title="Decrement" onClick={() =>dispatch(decNumber())} ><span> - </span></a>
          <input type="text" name="qunatity" className="quantity__input" value={myState}  />
          <a className='quantity__plus' title="Increment" onClick={() =>dispatch(incNumber(5))}><span> + </span></a>
        </div>
      </div>

     
    </>
  );
}

export default App;

