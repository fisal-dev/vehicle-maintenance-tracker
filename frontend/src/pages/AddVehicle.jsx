const AddVehicle = () => {
  return (

    <div className="addvehicle">

      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mt-12 glass3">
        <h2 className="text-3xl font-bold text-black-700 mb-8 text-center font-serif">
          Add Vehicle
        </h2>
        
        <form>
          <div className="mb-4">
            <label className="block text-black-700 font-mono text-xl font-bold">Make</label>
            <input
              type="text"
              name="make"
              className="w-full p-2 border rounded-md"
              placeholder="Toyota"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-black-700 font-mono text-xl font-bold">Model</label>
            <input
              type="text"
              name="model"
              className="w-full p-2 border rounded-md"
              placeholder="Supra"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-black-700 font-mono text-xl font-bold">Year</label>
            <input
              type="number"
              name="year"
              className="w-full p-2 border rounded-md"
              placeholder="2025"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-black-700 font-mono text-xl font-bold">VIN</label>
            <input
              type="text"
              name="vin"
              className="w-full p-2 border rounded-md"
              placeholder="1HGCM82633A123456"
              required
            />
          </div>

          <div className="mb-4 pb-3">
            <label className="block text-black-700 font-mono text-xl font-bold">Registration Number</label>
            <input
              type="text"
              name="registrationNumber"
              className="w-full p-2 border rounded-md"
              placeholder="DD03G6330"
              required
            />
          </div>

          <button
                type="submit"
                className="text-lg font-serif bg-black w-full h-[40px] rounded-lg text-white transition-all duration-300 hover:bg-gray-800">
                Save Vehicle
              </button>
        </form>
      </div>
    </div>
  );
};

export default AddVehicle;
