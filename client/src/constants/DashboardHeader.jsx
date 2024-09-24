import { LOGO } from "./utils";
import { CgProfile } from "react-icons/cg";

const DashboardHeader = () => {
  return (
    <div className="flex justify-between m-2">
      <img className="w-20 h-20" src={LOGO} alt="Logo" />
      <h1 className="text-2xl font-bold text-gray-900 mt-4">
        Ollato Mind Mapping Programming
      </h1>
      <p className="w-20 h-20 pt-5">
        <CgProfile />
      </p>
    </div>
  );
};

export default DashboardHeader;
