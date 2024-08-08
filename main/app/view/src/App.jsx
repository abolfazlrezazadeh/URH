import Information from "./pages/Information"
import Invite from "./pages/Invite"
import Settings from "./pages/Settings"
import UserProfile from "./pages/UserProfile"
import Support from "./pages/Support"
import GoBackBtn from "./components/GoBackBtn"
import Website from "./pages/Website"
import Bus from "./pages/Bus"
import Podcast from "./pages/Podcast"
import Developing from "./pages/Developing"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Taxi from "./pages/Taxi"
import Payment from "./pages/Payment"

import Nfc from "./pages/Nfc"
import Ndef from "./pages/Ndef"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Website />} />

          <Route path="bus" element={<Bus />} />
          <Route path="taxi" element={<Taxi />} />

          <Route path="payment" element={<Payment />} />
          <Route path="podcast" element={<Podcast />} />

          <Route path="user">
            <Route index element={<Information />} />
            <Route path="invite" element={<Invite />} />
            <Route path="settings" element={<Settings />} />
            <Route path="userprofile" element={<UserProfile />} />
            <Route path="support" element={<Support />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="developing" element={<Developing />} />
          </Route>

          <Route path="nfc" element={<Nfc />} />
          <Route path="ndef" element={<Ndef />} />

          <Route path="*" element={<GoBackBtn />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
