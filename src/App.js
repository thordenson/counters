import React from 'react';
import Counter from './Counter.js';
import Countdown from './Countdown.js';

function getRandomInt(max=1000)




function convertNumToCounter(obj) {
  return (
    //interchangable from Counter to Countdown
    <Countdown 
    key={obj.id}
    id={obj.id} 
    initialValue={obj.value} 
    doClick={deleteCounterById}
    />
  );
} 

// This is not *quite* the React way
// let counterValues = [42, 3, 18, 29, 56, 11];
// let counterElements = counterValues.map(convertNumToCounter);


// this.  <= the link between methods
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counterValues: [{id: 54321, value: 42}]
    };
  }

  _handleClick = () => {
    let newObj = {
      id: (new Date()).getTime(),
      value: getRandomInt()
    };
    this.setState({
      counterValues: this.state.counterValues.concat(newObj)
    });
  }

_deleteCounterById = () => {
  console.log(theID);
}

  render() {
    return (
      <div className="container">
        <button onClick={this._handleClick}>+</button>
          <div className="counter-box">
            {this.state.counterValues.map(convertNumToCounter)}
          </div>
      </div>
    );
  }
}

// App is a React Component 
// const App = () => {
//   return (
//     <div className="container">
//       <button onClick={handleClick}>+</button>
//       <div className="counter-box">
//         {counterElements}

//       </div>
//     </div>
//   );
// };

export default App;