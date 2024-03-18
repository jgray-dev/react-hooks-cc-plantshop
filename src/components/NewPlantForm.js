import React, { useState } from "react";

function NewPlantForm({ submitNewPlant }) {
  const [newName, updateNewName] = useState(""); // Default states for our controlled
  const [newImage, updateNewImage] = useState("");
  const [newPrice, updateNewPrice] = useState(0);

  function handleSubmit(e) {
    // Check the form was filled out and the price is a positive number
    if (newName !== "" && newImage !== "" && newPrice > 0) {
      // Prevent page reload sicne we refresh our frontend manually
      e.preventDefault();
      // Create new object using values from our controlled form
      const newPlant = {
        name: newName,
        image: newImage,
        price: newPrice,
      };
      submitNewPlant(newPlant); // Pass our newPlant object up
    } else {
      alert("Please fill out the form completely and set a valid price!");
    }
  }

  // Form with onSubmit to call our handleSubmit, and onChange to update each state respectively
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          onChange={(e) => updateNewName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={(e) => updateNewImage(e.target.value)}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          onChange={(e) => updateNewPrice(e.target.value)}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
