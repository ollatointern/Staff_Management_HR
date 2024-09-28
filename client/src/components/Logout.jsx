// import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { useAuth } from "../contexts/AuthContexts";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/store";

const Logout = () => {
  // const { logout } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Get the dispatch function

  const logoutHandler = () => {
    // logout();
    // localStorage.removeItem("user", "answers");
    // localStorage.removeItem("answers");
    ["user", "answers"].forEach((key) => localStorage.removeItem(key));

    dispatch(logout());
    navigate("/");
  };
  return (
    <div>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Logout;
