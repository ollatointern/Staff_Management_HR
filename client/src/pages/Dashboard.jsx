import Logout from "../components/Logout";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../constants/DashboardHeader";
import { useAuth } from "../contexts/AuthContexts";

const Dashboard = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <DashboardHeader />

      {/* Main Content Grid */}
      <div className="grid grid-cols-[250px_1fr] flex-grow">
        {/* Sidebar */}
        <div className="h-[calc(80vh-56px)] overflow-y-auto">
          <Sidebar />
          {/* Logout Component */}
          <Logout />
        </div>

        {/* Main Content */}
        <div className="flex flex-col p-4 overflow-y-auto">
          {/* Dashboard Title and Button */}
          <div className="flex justify-between">
            <h1 className="text-3xl pl-2">Dashboard</h1>
            <h1 className="pr-12">Generate Report</h1>
          </div>

          {/* Welcome Message */}
          <div className="mt-4">
            <h1 className="font-bold text-2xl">Hello {user?.name}</h1>
            <p>Welcome to the Dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
