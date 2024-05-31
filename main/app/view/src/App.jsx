// ? pages
import Information from "./pages/Information"
import Invite from "./pages/Invite"
import Settings from "./pages/Settings"
import UserProfile from "./pages/UserProfile"
import SignUp from "./pages/SignUp"
import Support from "./pages/Support"
import Confirm from "./Confirm"
import GoBackBtn from "./components/GoBackBtn"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Website from "./pages/Website"
import Bus from "./pages/Bus"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="website" element={<Website />} />
          <Route path="confirm" element={<Confirm />} />
          <Route path="bus" element={<Bus />} />
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
