import React, { useState } from "react";

function PlantCard({ plant, updatePlant, deletePlant }) {
  const [inStock, setInStock] = useState(true); // default to in stock, flip state on button click to set out of stock
  const [newPrice, setNewPrice] = useState(plant.price); // default the new price to the original price
  const [editingPrice, setEditingPrice] = useState(false); // boolean for displaying either the price or a input box for a new price

  function handleEnter() {
    // When enter key is clicked (from input on line 25), set editing mode to false and use the passed function to update the plant
    setEditingPrice(!editingPrice);
    updatePlant(plant, newPrice);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />

      <h4>{plant.name}</h4>

      {editingPrice ? ( // Ternary to either display the price, or a text box to collect a new price
        <input
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
          onKeyDown={(e) => {
            // Listen for enter/escape key to be pressed (alternative to adding a form and using onSubmit)
            if (e.key === "Enter") {
              handleEnter();
            }
            if (e.key === "Escape") {
              setNewPrice(plant.price); // Revert to original plant price
              setEditingPrice(false); // Set editing state to false - will rerender card with the price rather than text box aswell
            }
          }}
        ></input>
      ) : (
        <p onClick={() => setEditingPrice(true)}>Price: ${plant.price}</p> // Render the price with a click event to set editing mode to true
      )}

      {inStock ? ( // Ternary to display either in stock or out of stock button (click event to flip the state)
        <button className="primary" onClick={() => setInStock(!inStock)}>
          In Stock
        </button>
      ) : (
        <button onClick={() => setInStock(!inStock)}>Out of Stock</button>
      )}
      <button
        style={{ backgroundColor: "#e396ff", color: "white" }}
        onClick={() => deletePlant(plant)}
      >
        Delete
      </button>
      {/*Advanced deliverable deletebutton with deleteplant function passed down */}
    </li>
  );
}

export default PlantCard;
