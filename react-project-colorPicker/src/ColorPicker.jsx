import React, { useState } from "react";

// Function component: ColorPicker
function ColorPicker() {
  // Step 1: Declare a state variable `color` with initial value "#FFFFFF".
  // `setColor` is used to update the value of `color`.
  const [color, setColor] = useState("#FFFFFF");

  // Step 2: Define a function `handleColorChange` that takes an event (e).
  // This function updates the `color` state to the value selected from the color picker input.
  function handleColorChange(e) {
    setColor(e.target.value);
  }

  // Step 3: Return JSX to render the component UI.
  return (
    <div className="color-pick-container">
      {/* Display the title of the color picker */}
      <h1>Color Picker</h1>

      {/* Step 4: Display the selected color dynamically. 
          Use inline style to set the background color of this section to the selected color. */}
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Selected color: {color}</p> {/* Show the selected color's hex code */}
      </div>

      {/* Step 5: Render a label and an input of type "color" */}
      <label>Select a color: </label>
      <input
        type="color"
        value={color} // Bind the input value to the current state
        onChange={handleColorChange} // Call `handleColorChange` on color selection
      />
    </div>
  );
}

// Export the component so it can be used in other files
export default ColorPicker;


// Execution Process:
// The ColorPicker component initializes with a default color state of #FFFFFF (white).

// The handleColorChange function listens for changes in the <input type="color"> element.

// When the user picks a color, the onChange event triggers handleColorChange, which updates the color state with the selected value.

// The new color value is reflected both in the text (Selected color: {color}) and the background color of the .color-display div dynamically.

// The UI updates instantly due to React's reactivity when the state changes.