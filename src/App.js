import React from 'react';
import Counter from './Counter.js';

const handleClick = () => {
  console.log('haaay');
}

function convertNumToCounter(value) {
  return (
    <Counter initialValue={value} />
  );
} 

//This is not *quite* the React way
let counterValues = [42, 3, 18, 29, 56, 11];
let counterElements = counterValues.map(convertNumToCounter);

// App is a React Component 
const App = () => {
  return (
    <div className="container">
      <button onClick={handleClick}>+</button>
      <div className="counter-box">
        {counterElements}
        {/*  <Counter finalValue='100' initialValue='42'/>
         <Counter finalValue='100' initialValue='3' />
         <Counter finalValue='100' initialValue='18'/>
         <Counter finalValue='100' initialValue='56'/>
         <Counter finalValue='100' initialValue='29'/>
         */}

      </div>
    </div>
  );
};


export default App;