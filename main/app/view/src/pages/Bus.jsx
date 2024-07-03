// Your imports
import { MapComponent, MapTypes } from "@neshan-maps-platform/mapbox-gl-react"
import "@neshan-maps-platform/mapbox-gl-react/dist/style.css"

function Bus() {
  // Your Code
  {
    /*Your Component Structure*/
  }
  {
    /*Your Component Structure*/
  }
  return (
    <div className="h-full">
      <p>slm</p>
      <MapComponent
        options={{
          mapKey: "web.de7040f291314729ae45f17b81324ae3",
          mapType: MapTypes.neshanVector,
        }}
      />
    </div>
  )
}

export default Bus
