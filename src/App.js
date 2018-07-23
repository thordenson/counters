import React from 'react';
import Counter from './Counter';
import Countdown from './Countdown';

function getRandomInt(max=1000) {
  return Math.floor(Math.random() * Math.floor(max));
}

function deleteCounterById(theID) {
  console.log(theID);
}



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // counterValues: [33, 11, 2]
      counterValues: []
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

  _deleteCounterById = (theBadGuysId) => {
    console.log(theBadGuysId);
    // Now I can delete!
    console.log(this.state.counterValues);
    let theNewArray = this.state.counterValues.filter(someGuy => someGuy.id !== theBadGuysId);
    console.log(theNewArray);
    this.setState({
      counterValues: theNewArray
    });
  }

  _convertNumToCounter = (obj) => {
    // console.log(obj);

    // if the value is even
    if (obj.value % 2 === 0) {
      return (
        <Counter
          key={obj.id}
          id={obj.id}
          initialValue={obj.value}
          finalValue={obj.value * 10}
          doClick={this._deleteCounterById}
        />
      );
    } else {
      return (
        <Countdown
          key={obj.id}
          id={obj.id}
          initialValue={obj.value}
          finalValue={obj.value * -10}
          doClick={this._deleteCounterById}
        />
      );

    }

    // React.createElement(Countdown, { ... })
  }

  render() {
    return (
      <div className='container'>
        <button onClick={this._handleClick}>+</button>
        <div className='counter-box'>
          {this.state.counterValues.map(this._convertNumToCounter)}
        </div>
      </div>
    );
  }
}

// App is a React Component
// const App = () => {
//   return (
//     <div className='container'>
//       <button onClick={handleClick}>+</button>
//       <div className='counter-box'>
//         {counterElements}
//       </div>
//     </div>
//   );
// };

export default App;

/*
<div>
  <button>+</button>
  <div>
    <div>
      3
    </div>
    <div>
      1
    </div>
    <div>
      1
    </div>
  </div>
</div>
*/