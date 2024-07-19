import { useMemo } from "react"
import Map, { GeolocateControl, Marker } from "react-map-gl"
// import Map, { Marker } from "react-map-gl"
import NavBar from "../components/NavBar"
import "mapbox-gl/dist/mapbox-gl.css"
import "./Bus.css"
import Pin from "../Pin"

import CITIES from '../BusStops.json'

const mapIrToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjRjODY0MzAxNzFkYjQyNTk0ZThjNmY4Y2FkNDRiMmY3MDE3M2U4YzE5YTY2YTM2YzU1NTkxMjBhNGIyYmVlOWJiNzk2MzllNGVjMjZjNGVmIn0.eyJhdWQiOiIyNzk5MCIsImp0aSI6IjRjODY0MzAxNzFkYjQyNTk0ZThjNmY4Y2FkNDRiMmY3MDE3M2U4YzE5YTY2YTM2YzU1NTkxMjBhNGIyYmVlOWJiNzk2MzllNGVjMjZjNGVmIiwiaWF0IjoxNzIwMzQzOTkzLCJuYmYiOjE3MjAzNDM5OTMsImV4cCI6MTcyMjkzNTk5Mywic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.Fa3cJOu9qUPCSHBoWb5Tu42qAZkUjKwndI_-wH6rWa0NUFL8nnMxofoEn_S8KsNl0S5nlyXGleSBXhiSYxQajwHlFSgYZThTsjoC4x55rJMINZao6JN_d3jfRT720LInBso6Kq9Lp745QMo4CpLJkoBJDa3TBk7MxwChVNZh1rCEXr0CjHFJ1O43ROk5fM5cgOmdd2LHIczXM6U-4SM5rRJeAz5ubH17yd-_m5r9ZaK_w7DeAq_cYiv6xmtGkRyUG_oXxfwIAhbP9LjEUR0Buay8BHlriyxBumIuK298dx3IHKRdjXtxiCH9nHupGcZdWuFHsXBj2Wla80GmozK_3Q"


const App = () => {

   const pins = useMemo(
     () =>
       CITIES.map((city, index) => (
         <Marker
           key={`marker-${index}`}
           longitude={city.longitude}
           latitude={city.latitude}
           anchor="bottom"
           onClick={(e) => {
             // If we let the click event propagates to the map, it will immediately close the popup
             // with `closeOnClick: true`
             e.originalEvent.stopPropagation()
           }}
         >
           <Pin />
         </Marker>
       )),
     [],
   )

  return (
    <div>
      <NavBar />
      <Map
        initialViewState={{
          longitude: 45.0732025,
          latitude: 37.550639,
          zoom: 15,
        }}
        style={{ width: "100%", height: "100dvh" }}
        // choose your style from https://help.map.ir/documentation/styles/
        mapStyle="https://map.ir/vector/styles/main/mapir-Dove-style.json"
        // send your api key along with every request to map.ir (get your api key here: https://corp.map.ir/registration)
        transformRequest={(url) => {
          return {
            url,
            headers: {
              "x-api-key": mapIrToken, //Mapir api key
            },
          }
        }}
      >
        <GeolocateControl position="top-left" />
        {pins}
      </Map>
    </div>
  )
}

export default App
