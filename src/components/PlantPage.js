import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ URL }) {
  const [plants, updatePlants] = useState([]);
  const [search, updateSearch] = useState("");

  useEffect(() => {
    // useEffect to populate our plants state with a fetch on page load
    fetch(URL)
      .then((r) => r.json())
      .then((data) => updatePlants(data));
  }, []);

  function updatePlant(plant, newPrice) {
    // PATCH to update price when a user updates the price (This function is passed down to each individual plant card)
    fetch(`${URL}/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: newPrice }),
    }).then(() => rerenderPlants()); // Re-render our frontend
  }

  // This does not feel like the correct method, but I'm unsure how to get my state to update/re-render the frontend without it
  function rerenderPlants() {
    // Dummy function to be called whenever modifying plants - refreshes our frontend
    fetch(URL)
      .then((r) => r.json())
      .then((data) => updatePlants(data));
  }

  function deletePlant(plant) {
    // DELETE to remove a plant when the user clicks the delete button (This function is passed down to each individual plant card)
    fetch(`${URL}/${plant.id}`, {
      method: "DELETE",
    }).then(() => rerenderPlants()); // Re-render our frontend
  }

  function submitNewPlant(plant) {
    // POST to add a new plant when the user submits our form (This function is only passed to our form component)
    fetch(`${URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(plant),
    }).then(() => rerenderPlants()); // Re-render our frontend
  }

  return (
    <main>
      <NewPlantForm submitNewPlant={submitNewPlant} />
      <Search updateSearch={updateSearch} />
      <PlantList
        search={search}
        deletePlant={deletePlant}
        updatePlant={updatePlant}
        plants={plants}
      />
    </main>
  );
}

export default PlantPage;
