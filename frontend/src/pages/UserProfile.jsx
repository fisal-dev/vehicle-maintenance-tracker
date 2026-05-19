const UserProfile = () => {

  return (
    <div className="profile">
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mt-12 glass4">
        <h2 className="text-3xl font-bold text-black mb-6 text-center font-serif">
          User Profile
        </h2>

            <form>
              <div className="mb-4 font-mono font-bold">
                <label className="block text-black text-xl">Name</label>
                <input
                  type="text"
                  name="name"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="mb-4 font-mono font-bold">
                <label className="block text-black text-xl">Email</label>
                <input
                  type="email"
                  name="email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="johndoe@gmail.com"
                  required
                />
              </div>

              <div className="mb-4 font-mono font-bold">
                <label className="block text-black text-xl">Phone</label>
                <input
                  type="text"
                  name="phone"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="9854671230"
                  required
                />
              </div>

              <div className="mb-4 flex items-center font-mono font-bold pt-1">
                <input
                  type="checkbox"
                  name="notifications"
                  className="mr-2"
                />
                <label className="text-gray-800 ">Enable Notifications</label>
              </div>

              <button
                type="submit"
                className="bg-black w-full text-white px-6 py-2 text-lg font-serif rounded-lg hover:bg-gray-800">
                Save Changes
              </button>
            </form>
          </div>
        </div>

    
  );
};

export default UserProfile;
