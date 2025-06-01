import { useState } from "react";

function MyComponent() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Foods"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value.trim(); // Trim whitespace
    if (newFood) {
      setFoods((prevFoods) => [...prevFoods, newFood]); // Update state
      document.getElementById("foodInput").value = ""; // Clear input field
    }
  }

  function handleRemoveFood(index) {
    setFoods((prevFoods) => prevFoods.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food name" />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
}

export default MyComponent;
