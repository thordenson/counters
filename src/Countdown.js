import React from 'react';

// Rule #1: extend React.Component
class Countdown extends React.Component {
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

    setInterval(this._decreaseValue, 10);
  }

  // Always write helper functions
  // as arrow functions.
  // Helps keep the bugs away :)
  _decreaseValue = () => {
    // calculate the new currentValue
    let newCurrentValue = this.state.currentValue - 1;

    if (newCurrentValue >= this.props.finalValue) {
      // then, set the new currentValue in state
      // but, I must call this.setState
      // I cannot alter this.state directly
      this.setState({
        currentValue: newCurrentValue
      });
    }
  }

  // _reportMyId = (event) => {
  //   // "event" is a "Synthetic Event"
  //   console.log(event);
  //   this.props.doClick(this.props.id);
  // }
/*
  btn.addEventListener('click', (event) => {
    this.props.doClick(this.props.id)
  })
*/
  // Rule #2: must have render method
  render() {
    // Rule #3: must return some JSX
    // or a call to React.createElement
    return (
      <div
        className='counter'
        onClick={(event) => {
          // "event" is a "Synthetic Event"
          console.log(event);
          this.props.doClick(this.props.id);
        }}
      >
        {this.state.currentValue}
        {/* this is a comment */}
      </div>
    );
  }
}

// lalala

export default Countdown;