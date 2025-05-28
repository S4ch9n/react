// Importing React and the useState hook from the React library
import React, { useState } from "react"; // Only accessing useState from the React library

function Mycomponent() {
  // Declaring a state variable `name` with the initial value "Guest"
  // useState returns an array with two elements: a stateful variable and a setter function
  const [name, setName] = useState("Guest");

  // Declaring a state variable `age` with the initial value 0
  const [age, setAge] = useState(0);

  // Declaring a state variable `isEmployed` with the initial value true
  const [isEmployed, setIsEmployed] = useState(true);

  // Function to update the name state to "John"
  const updateName = () => {
    setName("John");
  };

  // Function to increment the age state by 1
  const incrementAge = () => {
    setAge(age + 1); // Increments age by 1 when the button is clicked
  };

  // Function to toggle the employment status
  const toggleStatus = () => {
    setIsEmployed(!isEmployed); // Toggles between true and false
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>

      <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleStatus}>Toggle Status</button>
    </div>
  );
}

export default Mycomponent;
