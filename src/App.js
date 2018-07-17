import React from 'react';
import Counter from './Counter.js';

const handleClick = () => {
  console.log('haaay');
}

const App = () => {
  return (
    <div className="container">
      <button onClick={handleClick}>+</button>
      <div className="counter-box">

        <Counter finalValue='100' initialValue='42'/>
        <Counter finalValue='100' initialValue='3' />
        <Counter finalValue='100' initialValue='18'/>
        <Counter finalValue='100' initialValue='56'/>
        <Counter finalValue='100' initialValue='29'/>
        
      </div>
    </div>
  );
};


export default App;