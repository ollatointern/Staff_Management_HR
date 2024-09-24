import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="min-w-[50px] min-h-[100px] flex flex-col">
      <Link to={"/dashboard"} className="py-2 px-4 hover:bg-blue-200">
        Dashboard
      </Link>
      <Link to={"/assessments"} className="py-2 px-4 hover:bg-blue-200">
        Assessment
      </Link>
      <Link to={"/downloadsummary"} className="py-2 px-4 hover:bg-blue-200">
        Download Summary
      </Link>
      <Link to={"/report"} className="py-2 px-4 hover:bg-blue-200">
        Report
      </Link>
      <Link to={"/booksession"} className="py-2 px-4 hover:bg-blue-200">
        Book Session
      </Link>
      <Link to={"/sessionmanagement"} className="py-2 px-4 hover:bg-blue-200">
        Session Management
      </Link>
      <Link to={"/myactivities"} className="py-2 px-4 hover:bg-blue-200">
        My Activity
      </Link>
      <Link to={"/packages"} className="py-2 px-4 hover:bg-blue-200">
        Packages
      </Link>
    </div>
  );
};

export default Sidebar;
