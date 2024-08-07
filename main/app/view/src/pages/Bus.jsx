import { useEffect, useMemo, useRef, useState } from "react";
import Map, { GeolocateControl, Marker, Source, Layer } from "react-map-gl";
import NavBar from "../components/NavBar";
import "mapbox-gl/dist/mapbox-gl.css";
import "./Bus.css";
import Pin from "../Pin";

import busStops from "../BusStops.json";

// Replace with your Mapbox access token
const mapboxAccessToken = "YOUR_MAPBOX_ACCESS_TOKEN";

const Bus = () => {
  const [latANDlng, setLatANDlng] = useState([]);
  const [route, setRoute] = useState(null);
  const mapRef = useRef(null);

  let counter = 1;

  const pins = useMemo(
    () =>
      busStops.map((city, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={city.longitude}
          latitude={city.latitude}
          anchor="bottom"
          onClick={(e) => {
            if (counter === 1) {
              setLatANDlng([city]);
              counter++;
            } else {
              setLatANDlng((x) => {
                counter--;
                return [...x, city];
              });
            }
            e.originalEvent.stopPropagation();
          }}
        >
          <Pin />
        </Marker>
      )),
    []
  );

  useEffect(() => {
    if (latANDlng.length === 2) {
      const fetchRoute = async () => {
        const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${latANDlng[0].longitude},${latANDlng[0].latitude};${latANDlng[1].longitude},${latANDlng[1].latitude}?geometries=geojson&access_token=${mapboxAccessToken}`;
        const response = await fetch(url);
        const data = await response.json();
        if (data.routes && data.routes.length > 0) {
          setRoute(data.routes[0].geometry);
        }
      };
      fetchRoute();
    }
  }, [latANDlng]);

  return (
    <>
      <NavBar />
      <Map
        ref={mapRef}
        initialViewState={{
          longitude: 45.0732025,
          latitude: 37.550639,
          zoom: 15,
        }}
        style={{ width: "100%", height: "100dvh" }}
        mapStyle="https://map.ir/vector/styles/main/mapir-Dove-style.json"
        transformRequest={(url) => {
          return {
            url,
            headers: {
              "x-api-key": mapboxAccessToken, // Replace this line if using Mapbox style
            },
          };
        }}
      >
        <GeolocateControl position="top-left" />
        {pins}
        {route && (
          <Source id="route" type="geojson" data={route}>
            <Layer
              id="route-line"
              type="line"
              paint={{
                "line-color": "#888",
                "line-width": 6,
              }}
            />
          </Source>
        )}
      </Map>
    </>
  );
};

export default Bus;