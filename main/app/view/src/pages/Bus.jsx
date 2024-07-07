import * as React from "react"
import Map from "react-map-gl"
import NavBar from "../components/NavBar"

// import mapbox css
import "mapbox-gl/dist/mapbox-gl.css"

// please import our css too :)
import "./Bus.css"

const YOUR_MAPIR_TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjRjODY0MzAxNzFkYjQyNTk0ZThjNmY4Y2FkNDRiMmY3MDE3M2U4YzE5YTY2YTM2YzU1NTkxMjBhNGIyYmVlOWJiNzk2MzllNGVjMjZjNGVmIn0.eyJhdWQiOiIyNzk5MCIsImp0aSI6IjRjODY0MzAxNzFkYjQyNTk0ZThjNmY4Y2FkNDRiMmY3MDE3M2U4YzE5YTY2YTM2YzU1NTkxMjBhNGIyYmVlOWJiNzk2MzllNGVjMjZjNGVmIiwiaWF0IjoxNzIwMzQzOTkzLCJuYmYiOjE3MjAzNDM5OTMsImV4cCI6MTcyMjkzNTk5Mywic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.Fa3cJOu9qUPCSHBoWb5Tu42qAZkUjKwndI_-wH6rWa0NUFL8nnMxofoEn_S8KsNl0S5nlyXGleSBXhiSYxQajwHlFSgYZThTsjoC4x55rJMINZao6JN_d3jfRT720LInBso6Kq9Lp745QMo4CpLJkoBJDa3TBk7MxwChVNZh1rCEXr0CjHFJ1O43ROk5fM5cgOmdd2LHIczXM6U-4SM5rRJeAz5ubH17yd-_m5r9ZaK_w7DeAq_cYiv6xmtGkRyUG_oXxfwIAhbP9LjEUR0Buay8BHlriyxBumIuK298dx3IHKRdjXtxiCH9nHupGcZdWuFHsXBj2Wla80GmozK_3Q"

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Map
        initialViewState={{
          longitude: 51.375433528216654,
          latitude: 35.73356434056531,
          zoom: 11,
        }}
        style={{ width: '100svh', height: '100svh' }}
        // choose your style from https://help.map.ir/documentation/styles/
        mapStyle="https://map.ir/vector/styles/main/mapir-xyz-style.json"
        // send your api key along with every request to map.ir (get your api key here: https://corp.map.ir/registration)
        transformRequest={(url) => {
          return {
            url,
            headers: {
              "x-api-key": YOUR_MAPIR_TOKEN, //Mapir api key
            },
          }
        }}
      />
    </div>
  )
}

export default App
