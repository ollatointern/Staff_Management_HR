// import { Link } from "react-router-dom";
// import Logout from "./Logout";

// const Sidebar = () => {
//   const handleClick = () => {};
//   return (
//     <div className="w-[200px] h-full overflow-y-auto overflow-x-hidden bg-gray-100 flex flex-col">
//       <Link to="/dashboard" className="py-3 px-4 hover:bg-blue-200">
//         Dashboard
//       </Link>
//       <Link to="/packages" className="py-3 px-4 hover:bg-blue-200">
//         Packages
//       </Link>
//       <Link to="/languages" className="py-3 px-4 hover:bg-blue-200">
//         Assessment
//       </Link>
//       <Link to="/downloadsummary" className="py-3 px-4 hover:bg-blue-200">
//         Download Summary
//       </Link>
//       <Link to="/report" className="py-3 px-4 hover:bg-blue-200">
//         Report
//       </Link>
//       <Link to="/booksession" className="py-3 px-4 hover:bg-blue-200">
//         Book Session
//       </Link>
//       <Link to="/sessionmanagement" className="py-3 px-4 hover:bg-blue-200">
//         Session Management
//       </Link>
//       <Link to="/myactivities" className="py-3 px-4 hover:bg-blue-200">
//         My Activity
//       </Link>
//       <Logout onClick={handleClick} className="mt-[10px] ml-[5px]" />
//     </div>
//   );
// };

// export default Sidebar;

import { NavLink } from "react-router-dom";
import Logout from "./Logout";

const Sidebar = () => {
  const handleClick = () => {
    // Logic to handle logout, e.g., clear user data, redirect, etc.
    localStorage.removeItem("user"); // Clear user from local storage
    // Optionally, redirect to the login page or update the authentication state
  };

  return (
    <div className="w-[200px] h-full overflow-y-auto overflow-x-hidden bg-gray-100 flex flex-col">
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `py-3 px-4 ${isActive ? "bg-blue-300" : "hover:bg-blue-200"}`
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/packages"
        className={({ isActive }) =>
          `py-3 px-4 ${isActive ? "bg-blue-300" : "hover:bg-blue-200"}`
        }
      >
        Packages
      </NavLink>
      <NavLink
        to="/languages"
        className={({ isActive }) =>
          `py-3 px-4 ${isActive ? "bg-blue-300" : "hover:bg-blue-200"}`
        }
      >
        Assessment
      </NavLink>
      <NavLink
        to="/downloadsummary"
        className={({ isActive }) =>
          `py-3 px-4 ${isActive ? "bg-blue-300" : "hover:bg-blue-200"}`
        }
      >
        Download Summary
      </NavLink>
      <NavLink
        to="/report"
        className={({ isActive }) =>
          `py-3 px-4 ${isActive ? "bg-blue-300" : "hover:bg-blue-200"}`
        }
      >
        Report
      </NavLink>
      <NavLink
        to="/booksession"
        className={({ isActive }) =>
          `py-3 px-4 ${isActive ? "bg-blue-300" : "hover:bg-blue-200"}`
        }
      >
        Book Session
      </NavLink>
      <NavLink
        to="/sessionmanagement"
        className={({ isActive }) =>
          `py-3 px-4 ${isActive ? "bg-blue-300" : "hover:bg-blue-200"}`
        }
      >
        Session Management
      </NavLink>
      <NavLink
        to="/myactivities"
        className={({ isActive }) =>
          `py-3 px-4 ${isActive ? "bg-blue-300" : "hover:bg-blue-200"}`
        }
      >
        My Activity
      </NavLink>
      <Logout onClick={handleClick} className="mt-[10px] ml-[5px]" />
    </div>
  );
};

export default Sidebar;
