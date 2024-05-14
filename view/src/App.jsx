import Information from "./Information";
import Invite from "./Invite";
import Settings from "./Settings";
import UserProfile from "./UserProfile";
import SignUp from './SignUp'
import Support from './Support'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Confirm from "./Confirm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="Confirm" element={<Confirm />} />
          <Route path="information" element={<Information />} />
          <Route path="invite" element={<Invite />} />
          <Route path="settings" element={<Settings />} />
          <Route path="userprofile" element={<UserProfile />} />
          <Route path="support" element={<Support />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
