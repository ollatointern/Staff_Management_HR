import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../constants/DashboardHeader";

const InstructionPage = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/assessments");
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
            <div className="p-10 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-lg text-center mx-4 my-6 w-[90%] md:w-[80%] lg:w-[70%]">
              <h1 className="text-4xl font-bold mb-6 text-blue-800">
                Instructions
              </h1>
              <ol className="list-decimal list-inside text-left text-lg mb-8 space-y-4 text-gray-700">
                <li className="flex items-start">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-500 mr-2 text-xl"
                  />
                  In this test, you will encounter a series of statements
                  designed to reflect everyday experiences.
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-500 mr-2 text-xl"
                  />
                  There are 100 statements in total, covering a wide range of
                  topics. For each statement, you will be presented with five
                  options, and your task is to choose the one that most closely
                  aligns with your response or perspective.
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-500 mr-2 text-xl"
                  />
                  It is important to note that there are no correct or incorrect
                  answers.
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-500 mr-2 text-xl"
                  />
                  Your responses are completely confidential, meaning they will
                  be kept private and used exclusively for academic purposes.
                  So, feel free to share your thoughts openly and honestly as
                  you progress through the test.
                </li>
              </ol>
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                I am ready to begin
              </h2>
              <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700 transition duration-200 ease-in-out shadow-md"
              >
                Start Test
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructionPage;
