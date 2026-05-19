import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setMessage("Password Updated Successfully.");
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="forgot">
      <div className="w-full h-screen flex items-center justify-center tracking-wider">
        <div className="w-11/12 sm:w-5/12 md:w-3/12 text-sm py-5 glass">
          <div className="w-full text-center my-3">
            <h1 className="text-4xl text-black font-serif">
              <b>Forgot Password</b>
            </h1>
          </div>

          <form className="my-2 py-1" onSubmit={handleSubmit}>
            <div className="flex border-b-black border-b-2 mx-5 my-8 py-1">
              <input
                type="email"
                className="text-lg w-11/12 bg-transparent outline-none placeholder-black font-serif"
                placeholder="Enter Your E-Mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                placeholder="Enter Your New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="w-2/12 flex items-center justify-center">
                <i className="fa-solid fa-lock text-lg"></i>
              </div>
            </div>

            <div className="flex border-b-black border-b-2 mx-5 my-8 py-1">
              <input
                type="password"
                className="text-lg w-11/12 font-serif bg-transparent outline-none placeholder-black"
                placeholder="Confirm Your Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <div className="w-2/12 flex items-center justify-center">
                <i className="fa-solid fa-lock text-lg"></i>
              </div>
            </div>

            <div className="mx-5 my-3 flex items-center justify-center">
              <button
                type="submit"
                className="text-lg font-serif bg-black w-full h-[40px] rounded-lg text-white transition-all duration-300 hover:bg-gray-800"
                disabled={loading}
              >
                {loading ? "Updating..." : "Update Password"}
              </button>
            </div>
          </form>

          {message && <p className="font-serif font-semibold text-black-600 text-center">{message}</p>}

          <div className="mx-5  flex items-center justify-center">
            <Link to="/login">
              <p className=" text-black font-serif text-base underline">
                Back To Login!
              </p>
            </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
