import React from 'react';

//Rule #1 : extend Reach.Component
class Counter extends React.Component {

  //Rule #4: accept props in the constructor method
  //in Python, this is __init__
  constructor(props){
    super(props);
  }

 // Rule #2: must have render method
 render() {
//Rule #3: must return some JSX
//or a call to React.createElement
return (
  <div className='counter'>
    {this.props.initialValue}
  </div>
  );
 }
}

// const Counter = (props) => {
//   console.log(props);
//   return (
//     <div className='counter'>
//         {props.initialValue}
//     </div>
//   );
// };
//shorthand version (object destructuring):

// const Counter = ({finalValue, initialValue}) => {
//   return (
//     <div className='counter'>
//         {initialValue}
//     </div>
//   );
// };

export default Counter;