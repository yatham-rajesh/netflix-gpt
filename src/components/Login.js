import React, { useState } from "react";
import Header from "./Header";

export const Login = () => {
  const [isSignForm, setISSignForm] = useState(true);

  const toggleSignIn = () => {
    setISSignForm(!isSignForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_large.jpg"
          alt="log"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-40 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-1xl py-4">
          {isSignForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignForm && (
          <input
            className="p-2  my-4 w-full bg-gray-700"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="p-2  my-4 w-full bg-gray-700"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="p-2 my-2 w-full bg-gray-700 "
          type="password"
          placeholder="Password"
        />
        <button className="my-6 p-4 w-full bg-red-700 rounded-lg">
          {isSignForm ? "Sign In" : "Sign Up"}
        </button>
        
        <p className="py-4 cursor-pointer" onClick={toggleSignIn}>
          {isSignForm
            ? " New to Netflix? Sign up now"
            : "Already have account? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
