const ConstantFooter = () => {
  return (
    <div className="bg-gray-100 py-8">
      {/* footer */}
      <div className="flex justify-between items-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-2 text-gray-700">
          <h1 className="font-bold text-2xl text-gray-900">
          Ollato Eduversity
          </h1>
          <p>618, Nirmal Corporate Centre,</p>
          <p>LBS Road, Moti Nagar, Mulund West, Mumbai 400080.</p>
        </div>

        <div className="flex flex-col space-y-2 text-gray-700">
          <p>
            <span className="font-semibold">Phone No:</span> 9967153586
          </p>
          <p>
            <span className="font-semibold">Email:</span> info@seracedu.com
          </p>
          <p>
            <span className="font-semibold">Website:</span> Ollato.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConstantFooter;
