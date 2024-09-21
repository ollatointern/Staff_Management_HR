import { LOGO } from "./utils";

const ConstantHeader = () => {
  return (
    <div>
      {/* header */}
      <div className="flex justify-center flex-col items-center">
        <img className="w-[85px] h-[85px]" src={LOGO} alt="" />
        <h1 className="p-4 m-4 font-bold ">Ollato Mind Mapping Assesment</h1>
      </div>
      {/* Heading */}
      <h1 className="flex justify-center ">HR Hiring Assessment</h1>
    </div>
  );
};

export default ConstantHeader;
