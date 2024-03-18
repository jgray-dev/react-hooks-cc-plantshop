import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, search, updatePlant, deletePlant }) {
  // Filter our plants
  const filteredPlants = plants.filter((plant) => {
    return (
      plant.name.toLowerCase().includes(search.toLowerCase()) || search === ""
    );
  });
  // Map each plant to a card with individual delete and update functions
  const plantCards = filteredPlants.map((plant) => {
    return (
      <PlantCard
        plant={plant}
        key={plant.id}
        deletePlant={deletePlant}
        updatePlant={updatePlant}
      />
    );
  });
  //Render our cards
  return <ul className="cards">{plantCards}</ul>;
}

export default PlantList;
