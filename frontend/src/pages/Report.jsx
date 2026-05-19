const Report = () => {

  return (

    <div className="report">

      <div className=" shadow-lg rounded-lg p-5 w-full max-w-md mt-12 glass5">
      <h2 className="text-3xl font-bold text-black mb-8 pb-2 text-center font-serif">Report a Complaint</h2>
        <form>
          <div className="mb-4 font-mono font-bold">
            <label className="block text-black text-xl">Vehicle</label>
            <input
              type="text"
              name="vehicle"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter vehicle name or model"
              required
            />
          </div>
          <div className="mb-4 font-mono font-bold ">
            <label className="block text-black text-xl">Issue</label>
            <input
            type="text"
              name="issue"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Describe the issue"
              required
            />
          </div>
          <div className="mb-4 font-mono font-bold pb-3">
            <label className="block text-black text-xl">Date</label>
            <input
              type="date"
              name="date"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-md w-full font-serif text-lg hover:bg-gray-800">
            Submit Complaint
          </button>
        </form>
      </div>
    </div>
  );
};

export default Report;
