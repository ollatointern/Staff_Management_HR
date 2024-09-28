import { useAuth } from "../contexts/AuthContexts";
import { LOGO } from "./utils";
import { CgProfile } from "react-icons/cg";

const DashboardHeader = () => {
  const { user } = useAuth();
  return (
    <div className="flex justify-between items-center m-2 border-black border-2 p-4">
      <img className="w-20 h-20" src={LOGO} alt="Logo" />
      <h1 className="text-2xl font-bold text-gray-900">
        Ollato Mind Mapping Programming
      </h1>
      <div className="flex items-center gap-x-2">
        <p className="text-lg font-medium">{user?.name}</p>
        <CgProfile className="text-3xl" />
      </div>
    </div>
  );
};

export default DashboardHeader;
