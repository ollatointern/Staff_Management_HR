import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AdminRegistration from "./Auth/Registration/AdminRegistration";
import "./main.css";
import { useSelector } from "react-redux";
import Login from "./Auth/Registration/Login";
import Dashboard from "./pages/Dashboard";
import { AuthProvider } from "./contexts/AuthContexts";
import ProtectedRoute from "./components/ProtectedRoute";
import Assesments from "./pages/Assesments";
import BookSession from "./pages/BookSession";
import DownloadSummary from "./pages/DownloadSummary";
import MyActivities from "./pages/MyActivities";
import Packages from "./pages/Packages";
import Report from "./pages/Report";
import SessionManagement from "./pages/SessionManagement";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Login or Redirect to Dashboard if Authenticated */}
          <Route
            path="/"
            element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />}
          />

          {/* Signup Route */}
          <Route path="/signup" element={<AdminRegistration />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/assessments"
            element={
              <ProtectedRoute>
                <Assesments />
              </ProtectedRoute>
            }
          />
          <Route
            path="/booksession"
            element={
              <ProtectedRoute>
                <BookSession />
              </ProtectedRoute>
            }
          />
          <Route
            path="/downloadsummary"
            element={
              <ProtectedRoute>
                <DownloadSummary />
              </ProtectedRoute>
            }
          />
          <Route
            path="/myactivities"
            element={
              <ProtectedRoute>
                <MyActivities />
              </ProtectedRoute>
            }
          />
          <Route
            path="/packages"
            element={
              <ProtectedRoute>
                <Packages />
              </ProtectedRoute>
            }
          />
          <Route
            path="/report"
            element={
              <ProtectedRoute>
                <Report />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sessionmanagement"
            element={
              <ProtectedRoute>
                <SessionManagement />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
