import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../constants/DashboardHeader";

const LanguagePage = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/instructions");
  };
  return (
    <>
      <div className="h-screen grid grid-rows-[auto,1fr]">
        {/* Dashboard Header at the top */}
        <DashboardHeader />

        {/* Sidebar and Main content */}
        <div className="grid grid-cols-[200px,1fr] h-full">
          {/* Sidebar */}
          <div className="h-full overflow-y-auto">
            <Sidebar />
          </div>

          {/* Main content */}
          <div className="flex justify-center items-center">
            <div className="p-8 bg-white rounded-lg shadow-lg text-center mx-4 my-6">
              <h1 className="text-4xl font-extrabold mb-4 text-blue-600">
                Select Language
              </h1>
              <h2 className="text-2xl font-semibold mb-4">
                Language Preference
              </h2>
              <select
                name="language"
                id="lang"
                className="block w-48 p-2 text-lg border border-gray-300 rounded mb-4 mx-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="en">English</option>
                <option value="mr">Marathi</option>
                <option value="hn">Hindi</option>
                <option value="gr">Gujarati</option>
              </select>
              <button
                onClick={handleSubmit}
                className="w-48 bg-blue-500 text-white py-2 px-4 rounded text-lg hover:bg-blue-600 transition duration-200 ease-in-out"
              >
                Proceed
              </button>
              <h3 className="text-xl font-semibold mt-6">Remember</h3>
              <p className="text-gray-600 text-lg mt-2">
                You can select only one language, and you will receive the
                report in the chosen language.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LanguagePage;
