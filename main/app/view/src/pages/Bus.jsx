import { MapComponent, MapTypes } from "@neshan-maps-platform/mapbox-gl-react"
import "@neshan-maps-platform/mapbox-gl-react/dist/style.css"

import nmp_mapboxgl from "@neshan-maps-platform/mapbox-gl"

export default function Bus() {
    const marker = new nmp_mapboxgl.Marker();
    return (marker);
    // return (
    //     <div className="h-full otln">
    //   <MapComponent
    //     options={{
    //       mapKey: "service.c8411825037246cf86e2f9cf6fa49d72",
    //       mapType: MapTypes.neshanRasterNight,
    //     }}
    //   />
    // </div>
    //   )
}
