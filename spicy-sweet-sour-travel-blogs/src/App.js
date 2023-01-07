import React from "react";
import { TravelContext } from "./utils/travelContext";
// import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <TravelContext.Provider value="">
      <div>Welcome Spicy Sweet Sour</div>
    </TravelContext.Provider>
  );
};

export default App;
