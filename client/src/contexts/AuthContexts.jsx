import { createContext, useState, useEffect, useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate(); // Call useNavigate here

  const [user, setUser] = useState(() => {
    const storeData = localStorage.getItem("user");
    try {
      return storeData ? JSON.parse(storeData) : null; // Return null explicitly
    } catch (error) {
      console.log("Error parsing stored data:", error);
      return null; // Ensure null is returned on error
    }
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const logout = () => {
    setUser(null); // Clear user state
    localStorage.removeItem("user"); // Remove user data from localStorage
    navigate("/"); // Redirect to login page after logout
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Add prop types validation for children
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
