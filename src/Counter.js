import React from 'react';

// Rule #1: extend React.Component
class Counter extends React.Component {
  // Rule #4: accept props in the
  // constructor method
  // In Python, this is __init__
  constructor(props){
    super(props);

    // State is *my* stuff.
    // It is always an object.
    this.state = {
      currentValue: props.initialValue
    };

    setInterval(this._increaseValue, 1000);
  }

  // Always write helper functions as arrow functions.
  // Helps keep the bugs away :)
  _increaseValue = () => {
    // calculate the new currentValue
    let newCurrentValue = this.state.currentValue + 1;

    // then, set the new currentValue in state
    // but, I must call this.setState
    // I cannot alter this.state directly
    this.setState({
      currentValue: newCurrentValue
    });
  }

  // Rule #2: must have render method
  render() {

    // Rule #3: must return some JSX
    // or a call to React.createElement
    return (
      <div className='counter'>
        {this.state.currentValue}
      </div>
    );
  }
}



// Counter is a React Component
// const Counter = ({
//   finalValue,
//   initialValue
// }) => {
//   // console.log(props);
//   return (
//     <div className='counter'>
//       {initialValue}
//     </div>
//   );
// };

export default Counter;