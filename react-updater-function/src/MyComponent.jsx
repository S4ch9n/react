//updater function : A function passed as an argument ot setState() usually ex . setYear(year + 1)
//allow for safe updates based on the previous state used with multiple state updates and asyncronous functions .

import React, { useState } from "react";

function Mycomponent(){
  const [count , setCount ] = useState(0);
  //By convetion , its common to name the pending state argument for the first letter of the state variable name , like a for age . however you may also call it like prevAge or someting else that you find clearer.
  const increment = () => {
    //Take the PENDING state to calculate NEXT state.
    // React puts your updater function in a queue (waiting in line).
    // During the next render , it will call them in the same order.
    setCount( c => c + 1);
    setCount( c => c + 1);
    setCount( c => c + 1);
  }
  const decrement = () => {
    setCount(c => c - 1);
    setCount(c => c - 1);
    setCount(c => c - 1);
  }
  const reset = () => {
    setCount(0);
  }

  return(
    <div className="counter-container">
      <p className="count-display"> Count : {count}</p>
      <button className="counter-button" onClick={increment}> Increment</button>

      <button className="counter-button" onClick={reset}> Reset</button>

      <button className="counter-button" onClick={decrement}> decrement</button>
    </div>
  );
}
export default Mycomponent