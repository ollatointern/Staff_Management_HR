import { counsellers } from "../constants/Counsellors";
import DashboardHeader from "../constants/DashboardHeader";
import Sidebar from "../components/Sidebar";

const BookSession = () => {
  return (
    <div className="h-screen grid grid-rows-[auto,1fr]">
      {/* Dashboard Header */}
      <DashboardHeader />

      {/* Main Layout with Sidebar and Content */}
      <div className="flex h-full">
        {/* Sidebar - Fixed */}
        <div className="w-[200px] h-full sticky top-0">
          <Sidebar className="overflow-y-auto h-full" />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Book Session
          </h1>

          {/* Form Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Counsellor Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Search Counsellor */}
              <div className="flex flex-col">
                <label
                  htmlFor="counsellor"
                  className="text-gray-600 mb-2 font-medium"
                >
                  Search Counsellor
                </label>
                <input
                  type="text"
                  id="counsellor"
                  name="counsellor"
                  placeholder="Search Counsellor Name"
                  className="p-3 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Select Date */}
              <div className="flex flex-col">
                <label
                  htmlFor="date"
                  className="text-gray-600 mb-2 font-medium"
                >
                  Select Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="p-3 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Select Fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Select Expertise */}
              <div className="flex flex-col">
                <label
                  htmlFor="expertise"
                  className="text-gray-600 mb-2 font-medium"
                >
                  Select Expertise
                </label>
                <select
                  name="expertise"
                  id="expertise"
                  className="p-3 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                >
                  <option value="careerCounsellor">Career Counsellor</option>
                  <option value="psychologist">Psychologist</option>
                  <option value="groupCounsellor">Group Counsellor</option>
                </select>
              </div>

              {/* Select Mode */}
              <div className="flex flex-col">
                <label
                  htmlFor="mode"
                  className="text-gray-600 mb-2 font-medium"
                >
                  Select Mode
                </label>
                <select
                  name="mode"
                  id="mode"
                  className="p-3 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                >
                  <option value="video-call">Video Call</option>
                  <option value="meet">In Person Meet</option>
                </select>
              </div>

              {/* Select Time */}
              <div className="flex flex-col">
                <label
                  htmlFor="time"
                  className="text-gray-600 mb-2 font-medium"
                >
                  Select Time
                </label>
                <select
                  name="time"
                  id="time"
                  className="p-3 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                >
                  <option value="10am">10 AM</option>
                  <option value="11am">11 AM</option>
                  <option value="12pm">12 PM</option>
                  <option value="1pm">1 PM</option>
                  <option value="2pm">2 PM</option>
                  <option value="3pm">3 PM</option>
                  <option value="4pm">4 PM</option>
                  <option value="5pm">5 PM</option>
                  <option value="6pm">6 PM</option>
                </select>
              </div>
            </div>

            {/* Select Duration */}
            <div className="flex flex-col">
              <label
                htmlFor="duration"
                className="text-gray-600 mb-2 font-medium"
              >
                Select Duration
              </label>
              <select
                name="duration"
                id="duration"
                className="p-3 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
              >
                <option value="30 minutes">30 minutes</option>
                <option value="60 minutes">60 minutes</option>
              </select>
            </div>
          </div>

          {/* Display First Counsellor Expertise */}
          <div className="mb-6">
            {counsellers.length > 0 && (
              <button className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition duration-200">
                {counsellers[0].expertise}
              </button>
            )}
          </div>

          {/* Available Group Counsellors (Limit to 3) */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Available Group Counsellors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {counsellers.slice(0, 3).map((counsellor) => (
                <div
                  key={counsellor.id}
                  className="border rounded-lg p-4 shadow-md hover:shadow-lg transition duration-200"
                >
                  <h3 className="text-xl font-semibold text-gray-700">
                    {counsellor.name}
                  </h3>
                  <p className="text-gray-500">
                    Expertise: {counsellor.expertise.join(", ")}
                  </p>
                  <p className="text-gray-500">
                    Experience: {counsellor.experience} years
                  </p>
                  <p className="text-gray-500">
                    Languages: {counsellor.language}
                  </p>
                  <p className="text-gray-500">
                    Location: {counsellor.location}
                  </p>
                  <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 transition duration-200">
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSession;
