import React, { useState, useEffect } from "react";
import MyMapComponent from "./MyMapComponent";

function App(props) {
  const [isMarkerShown, setIsMarkerShown] = useState(false);

  const delayedShowMarker = () => {
    setTimeout(() => {
      setIsMarkerShown(true);
    }, 3000);
  };

  const handleMarkerClick = () => {
    setIsMarkerShown(false);
    delayedShowMarker();
  };

  useEffect(() => {
    delayedShowMarker();
    console.log("mount it!");
  }, []);

  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    return <div>Please fill your Google Maps API key in .env file</div>;
  }
  return (
    <div className="App">
      <MyMapComponent
        apiKey={apiKey}
        isMarkerShown={isMarkerShown}
        onMarkerClick={handleMarkerClick}
      />
    </div>
  );
}

export default App;
