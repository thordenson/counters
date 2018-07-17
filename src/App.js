import React from 'react';
import Counter from './Counter.js';

const App = () => {
  return (
    <div className="container">
      <button>+</button>
      <div className="counter-box">

        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        
      </div>
    </div>
  );
};


export default App;