import Information from "./pages/Information"
import Invite from "./pages/Invite"
import Settings from "./pages/Settings"
import UserProfile from "./pages/UserProfile"
import SignUp from "./pages/SignUp"
import Support from "./pages/Support"
import GoBackBtn from "./components/GoBackBtn"
import Website from "./pages/Website"
import Bus from "./pages/Bus"
import Podcast from "./pages/Podcast"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Taxi from "./pages/Taxi"
import QrCode from "./pages/QrCode"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="website" element={<Website />} />

          <Route path="bus" element={<Bus />} />
          <Route
            path="taxi"
            element={<Taxi />}
          />

          <Route
            path="qrcode"
            element={<QrCode />}
          />

          <Route path="podcast" element={<Podcast />} />
          <Route path="information" element={<Information />} />
          <Route path="invite" element={<Invite />} />
          <Route path="settings" element={<Settings />} />
          <Route path="userprofile" element={<UserProfile />} />
          <Route path="support" element={<Support />} />

          <Route path="*" element={<GoBackBtn />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
