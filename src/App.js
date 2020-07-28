import React, { useState, useEffect } from "react";
import { Marker } from "react-google-maps";
import MyMapComponent from "./MyMapComponent";

const blueIcon =
  "https://mt.google.com/vt/icon?color=ff004C13&name=icons/spotlight/spotlight-waypoint-blue.png";

function App(props) {
  const [isMarkerShown, setIsMarkerShown] = useState(false);

  const delayedShowMarker = () => {
    setTimeout(() => {
      setIsMarkerShown(true);
    }, 1000);
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

  const markers = [
    {
      position /* LatLngLiteral */: { lat: -34.597, lng: 150.644 },
      icon /* Icon */: {
        anchor: { x: 0, y: 0 },
        labelOrigin: { x: 0, y: 0 },
        // origin: {x:0,y:0},
        // scaledSize: ?,
        // size: ?,
        url: blueIcon
      },
      label /* MarkerLabel */: {
        // color: '',
        // fontFamily: '',
        fontSize: "14px",
        fontWeight: "bold",
        text: "Foo"
      }
    }
  ];

  return (
    <div className="App">
      <MyMapComponent
        apiKey={apiKey}
        isMarkerShown={isMarkerShown}
        onMarkerClick={handleMarkerClick}
      >
        {markers.map((markerProps, index) => (
          <Marker key={index} {...markerProps} />
        ))}
      </MyMapComponent>
    </div>
  );
}

export default App;
