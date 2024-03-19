import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const URL = "http://67.164.191.36:4000/plants"; // CHANGE TO URL JSON-SERVER IS RUNNING ON
  return (
    <div className="app">
      <Header />
      <PlantPage URL={URL} />{" "}
      {/*Pass URL as a prop so it can be used for fetching and we dont need to declare URL in any other file*/}
    </div>
  );
}

export default App;
