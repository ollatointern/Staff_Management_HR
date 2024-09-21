import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminRegistration from "./Auth/Registration/AdminRegistration";
import "./main.css";
import Login from "./Auth/Registration/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Login />} />
          <Route path="/signup" element={<AdminRegistration />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
