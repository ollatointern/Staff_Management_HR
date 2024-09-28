import { Link } from "react-router-dom";
import Logout from "./Logout";

const Sidebar = () => {
  const handleClick = () => {};
  return (
    <div className="w-[200px] h-full overflow-y-auto overflow-x-hidden bg-gray-100 flex flex-col">
      <Link to="/dashboard" className="py-3 px-4 hover:bg-blue-200">
        Dashboard
      </Link>
      <Link to="/packages" className="py-3 px-4 hover:bg-blue-200">
        Packages
      </Link>
      <Link to="/languages" className="py-3 px-4 hover:bg-blue-200">
        Assessment
      </Link>
      <Link to="/downloadsummary" className="py-3 px-4 hover:bg-blue-200">
        Download Summary
      </Link>
      <Link to="/report" className="py-3 px-4 hover:bg-blue-200">
        Report
      </Link>
      <Link to="/booksession" className="py-3 px-4 hover:bg-blue-200">
        Book Session
      </Link>
      <Link to="/sessionmanagement" className="py-3 px-4 hover:bg-blue-200">
        Session Management
      </Link>
      <Link to="/myactivities" className="py-3 px-4 hover:bg-blue-200">
        My Activity
      </Link>
      <Logout onClick={handleClick} className="mt-[10px] ml-[5px]" />
    </div>
  );
};

export default Sidebar;
