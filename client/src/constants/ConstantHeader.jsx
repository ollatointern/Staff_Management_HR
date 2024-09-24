import { LOGO } from "./utils";

const ConstantHeader = () => {
  return (
    <div className="bg-gray-100 py-6">
      {/* Header */}
      <div className="flex flex-col items-center">
        <img className="w-20 h-20" src={LOGO} alt="Logo" />
        <h1 className="text-2xl font-bold text-gray-900 mt-4">
          Ollato Mind Mapping Assessment
        </h1>
      </div>
      {/* Subheading */}
      <h2 className="text-xl text-gray-700 mt-2 text-center">
        HR Hiring Assessment
      </h2>
    </div>
  );
};

export default ConstantHeader;
