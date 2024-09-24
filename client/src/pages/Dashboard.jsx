// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
import Logout from "../components/Logout";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../constants/DashboardHeader";
import { useAuth } from "../contexts/AuthContexts";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

const Dashboard = () => {
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const navigate = useNavigate();
  const { user } = useAuth();

  // useEffect(() => {
  //   // Retrieve user data from localStorage
  //   const storedUser = localStorage.getItem("user");
  //   if (storedUser) {
  //     const userData = JSON.parse(storedUser);
  //     setUser(userData); // Set user state with the retrieved data
  //   }
  // }, []);

  return (
    <div className="mx-auto">
      <DashboardHeader />
      <div className="pl-[200px] ">
        <h1 className="text-xxl">Dashboard</h1>
        <h1>Hello {user?.name}</h1>
        Welcome to the Dashboard
      </div>
      <Sidebar />
      <Logout />
    </div>
  );
};
export default Dashboard;
