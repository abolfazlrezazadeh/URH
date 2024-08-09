import { useEffect, useMemo, useRef, useState } from "react"
import Map, { GeolocateControl, Marker, Source, Layer } from "react-map-gl"
import NavBar from "../components/NavBar"
import "mapbox-gl/dist/mapbox-gl.css"
import "./Bus.css"
import Pin from "../Pin"
import busStops from "../BusStops.json"

const mapIrToken = "YOUR_MAPIR_TOKEN" // Replace with your actual Map.ir token

const Bus = () => {
  const [latANDlng, setLatANDlng] = useState([])
  const [route, setRoute] = useState(null)
  const [counter, setCounter] = useState(1)
  const mapRef = useRef(null)

  // Memoize the pins to avoid unnecessary re-renders
  const pins = useMemo(
    () =>
      busStops.map((city, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={city.longitude}
          latitude={city.latitude}
          anchor="bottom"
          onClick={(e) => {
            e.originalEvent.stopPropagation()
            if (counter === 1) {
              setLatANDlng([city])
              setCounter(2)
            } else {
              setLatANDlng((prev) => {
                setCounter(1)
                return [...prev, city]
              })
            }
          }}
        >
          <Pin />
        </Marker>
      )),
    [counter],
  )

  // Fetch route data when two stops are selected
  useEffect(() => {
    if (latANDlng.length === 2) {
      const fetchRoute = async () => {
        try {
          // const url = `https://api.map.ir/v1/directions?origin=${latANDlng[0].longitude},${latANDlng[0].latitude}&destination=${latANDlng[1].longitude},${latANDlng[1].latitude}&key=${mapIrToken}`
          const url = `/api/v1/directions?origin=${latANDlng[0].longitude},${latANDlng[0].latitude}&destination=${latANDlng[1].longitude},${latANDlng[1].latitude}&key=${mapIrToken}`

          const response = await fetch(url)
          if (!response.ok) throw new Error("Network response was not ok")
          const data = await response.json()
          if (data.routes && data.routes.length > 0) {
            setRoute(data.routes[0].geometry)
          }
        } catch (error) {
          console.error("Error fetching route:", error)
        }
      }
      fetchRoute()
    }
  }, [latANDlng])

  return (
    <div>
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
              "x-api-key": mapIrToken,
            },
          }
        }}
      >
        <GeolocateControl position="top-left" />
        {pins}
        {route && (
          <Source
            id="route"
            type="geojson"
            data={{ type: "Feature", geometry: route }}
          >
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
    </div>
  )
}

export default Bus
