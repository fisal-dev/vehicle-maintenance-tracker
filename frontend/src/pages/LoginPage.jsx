import { Link } from "react-router-dom";

const LoginPage = () => {

  return (
    <div className="login">
      <div className="w-full h-screen flex items-center justify-center tracking-wider">
        <div className="w-11/12 sm:w-5/12 md:w-3/12 text-sm py-4 glass1">
          <div className="w-full text-center my-3">
            <h1 className="text-4xl text-black font-serif">
              <b>Login Page</b>
            </h1>
          </div>

          <form className="my-2 py-4">

            <div className="flex border-b-black border-b-2 mx-5 my-8 py-1">
              <input
                type="email"
                className="text-lg w-11/12 bg-transparent outline-none placeholder-black font-serif"
                placeholder="Enter Your E-Mail"
                required
              />
              <div className="w-2/12 flex items-center justify-center">
                <i className="fa-solid fa-envelope text-lg"></i>
              </div>
            </div>

            <div className="flex border-b-black border-b-2 mx-5 my-8 py-1">
              <input
                type="password"
                className="text-lg w-11/12 font-serif bg-transparent outline-none placeholder-black"
                placeholder="Enter Your Password"
                required
              />
              <div className="w-2/12 flex items-center justify-center">
                <i className="fa-solid fa-lock text-lg"></i>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm text-black font-serif my-5">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-1 ml-4" />
                Remember Me
              </label>
              <Link to="/forgot-password" className="cursor-pointer hover:underline mr-3">
                Forgot Password?
              </Link>
            </div>

            <div className="mx-5  py-1 flex items-center justify-center">
              <button
                type="submit"
                className="text-lg font-serif bg-black w-full h-[40px] rounded-lg text-white transition-all duration-300 hover:bg-gray-800">
                Sign In
              </button>
            </div>
          </form>

          <div className="mx-5  pb-2 flex items-center justify-center">
            <Link to="/SignUp">
              <p className="text-base text-black font-serif">
                Don't have an account? / SignUp
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
