import React from "react";
import MyMapComponent from "./MyMapComponent";

function App() {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    return <div>Please fill your Google Maps API key in .env file</div>;
  }
  return (
    <div className="App">
      <MyMapComponent apiKey={apiKey} isMarkerShown />
    </div>
  );
}

export default App;
