import GoToUser from "../components/GoToUser"
import NavBar from "../components/NavBar"
import Map from "react-map-gl"

const myMapIrToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjRjODY0MzAxNzFkYjQyNTk0ZThjNmY4Y2FkNDRiMmY3MDE3M2U4YzE5YTY2YTM2YzU1NTkxMjBhNGIyYmVlOWJiNzk2MzllNGVjMjZjNGVmIn0.eyJhdWQiOiIyNzk5MCIsImp0aSI6IjRjODY0MzAxNzFkYjQyNTk0ZThjNmY4Y2FkNDRiMmY3MDE3M2U4YzE5YTY2YTM2YzU1NTkxMjBhNGIyYmVlOWJiNzk2MzllNGVjMjZjNGVmIiwiaWF0IjoxNzIwMzQzOTkzLCJuYmYiOjE3MjAzNDM5OTMsImV4cCI6MTcyMjkzNTk5Mywic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.Fa3cJOu9qUPCSHBoWb5Tu42qAZkUjKwndI_-wH6rWa0NUFL8nnMxofoEn_S8KsNl0S5nlyXGleSBXhiSYxQajwHlFSgYZThTsjoC4x55rJMINZao6JN_d3jfRT720LInBso6Kq9Lp745QMo4CpLJkoBJDa3TBk7MxwChVNZh1rCEXr0CjHFJ1O43ROk5fM5cgOmdd2LHIczXM6U-4SM5rRJeAz5ubH17yd-_m5r9ZaK_w7DeAq_cYiv6xmtGkRyUG_oXxfwIAhbP9LjEUR0Buay8BHlriyxBumIuK298dx3IHKRdjXtxiCH9nHupGcZdWuFHsXBj2Wla80GmozK_3Q"

export default function Taxi() {
  return (
    <>
      <GoToUser />
      <Map
        initialViewState={{
          longitude: 45.07489773806866,
          latitude: 37.53557282180546,
          zoom: 14,
        }}
        style={{ width: "100%", height: "100dvh" }}
        // choose your style from https://help.map.ir/documentation/styles/
        mapStyle="https://map.ir/vector/styles/main/mapir-Dove-style.json"
        // send your api key along with every request to map.ir (get your api key here: https://corp.map.ir/registration)
        transformRequest={(url) => {
          return {
            url,
            headers: {
              "x-api-key": myMapIrToken,
            },
          }
        }}
      ></Map>
      <h1 className=" flex-center absolute inset-0 z-50 bg-gray-700/60 p-5 text-center text-2xl font-semibold text-red-500">
        این سرویس فعلا در دسترس نیست.
      </h1>
      <NavBar />
    </>
  )
}
