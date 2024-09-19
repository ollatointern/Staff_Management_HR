import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import AdminRegistration from "./Auth/Registration/AdminRegistration"
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<AdminRegistration/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
