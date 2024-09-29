import { useState } from "react";
import ConstantFooter from "../../constants/ConstantFooter";
import ConstantHeader from "../../constants/ConstantHeader";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/store";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContexts";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useAuth();
  const [showPass, setShowPass] = useState(false); // Controls password visibility
  const [loading, setLoading] = useState(false); // Loading state

  // navigation
  const navigate = useNavigate();

  // dispatch from redux
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Logic to handle login
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    setLoading(true); // Start loading
    try {
      const response = await axios.post("http://localhost:5000/hr/login", {
        email,
        password,
      });

      // Check if user data is large
      if (Object.keys(response.data.user).length > 1000) {
        console.log("Large user data");
      }

      // Save the user data and token after successful login
      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        dispatch(login(response.data.user)); // Dispatch login action
        setUser(response.data.user); // Set user context
        setEmail("");
        setPassword("");
        navigate("/dashboard"); // Navigate to dashboard
      }
    } catch (error) {
      alert(error.response?.data?.message || "Login failed. Please try again.");
      console.log("Login error:", error.response?.data?.message || error);
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <ConstantHeader />
      <div className="flex justify-center items-center flex-1">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
            Login
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"} // Toggle between text and password type
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your password"
                  required
                />
                <div
                  onClick={() => setShowPass(!showPass)} // Toggle password visibility
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  aria-label={showPass ? "Hide password" : "Show password"}
                >
                  {showPass ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={loading}
                className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
              <Link to={"/signup"}>Do not have an Account? Register here</Link>
            </div>
          </form>
        </div>
      </div>
      <ConstantFooter />
    </div>
  );
};

export default Login;
