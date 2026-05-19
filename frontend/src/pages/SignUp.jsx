import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    setError("");

    setTimeout(() => {
      setLoading(false);
      alert("Account created successfully!");
      window.location.href = "/login";
    }, 2000);
  };

  return (
    <div className="sign-up">
      <div className="w-full h-screen flex items-center justify-center tracking-wider">
        <div className="w-11/12 sm:w-5/12 md:w-3/12 text-sm py-5 glass">
          <div className="w-full text-center my-3">
            <h1 className="text-4xl text-black font-serif">
              <b>SignUp</b>
            </h1>
          </div>

          <form className="my-2 py-3" onSubmit={handleSignUp}>

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
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="w-2/12 flex items-center justify-center">
                <i className="fa-solid fa-lock text-lg"></i>
              </div>
            </div>

            <div className="flex border-b-black border-b-2 mx-5 my-5 py-1">
              <input
                type="password"
                className="text-lg w-11/12 font-serif bg-transparent outline-none placeholder-black"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <div className="w-2/12 flex items-center justify-center">
                <i className="fa-solid fa-lock text-lg"></i>
              </div>
            </div>

            {error && <p className="text-red-500 text-center font-mono font-bold text-lg">{error}</p>}

            <div className="mx-5 mt-3 py-1 flex items-center justify-center">
              <button
                type="submit"
                className="text-lg font-serif bg-black w-full h-[40px] rounded-lg text-white transition-all duration-300 hover:bg-gray-800"
                disabled={loading}
              >
                {loading ? "Signing Up..." : "Sign Up"}
              </button>
            </div>
          </form>

          <div className="mx-5  flex items-center justify-center">
            <Link to="/login">
              <p className="text-base text-black font-serif">
                Already have an account? / Login
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
