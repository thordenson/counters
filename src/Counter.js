import React from 'react';

// const Counter = (props) => {
//   console.log(props);
//   return (
//     <div className='counter'>
//         {props.initialValue}
//     </div>
//   );
// };
//shorthand version (object destructuring):

const Counter = ({finalValue, initialValue}) => {
  return (
    <div className='counter'>
        {initialValue}
    </div>
  );
};

export default Counter;