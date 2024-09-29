// import PropTypes from "prop-types"; // Import PropTypes
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContexts";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth(); // Get the user from authentication context

  if (!user) {
    return <Navigate to="/" />; // Redirect to Login if user is not authenticated
  }

  return children; // Return the children if user is authenticated
};

// Define prop types
// ProtectedRoute.propTypes = {
//   children: PropTypes.node.isRequired, // children should be a node and is required
// };

export default ProtectedRoute;
