// ? pages
import Information from "./Information"
import Invite from "./Invite"
import Settings from "./Settings"
import UserProfile from "./UserProfile"
import SignUp from "./SignUp"
import Support from "./Support"
import Confirm from "./Confirm"
import GoBackBtn from "./GoBackBtn"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Website from "./features/website/Website"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="website" element={<Website />} />
          <Route path="/" element={<SignUp />} />
          <Route path="confirm" element={<Confirm />} />
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
