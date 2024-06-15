import { useRef, useState } from "react";
import { validate } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleToggle = () => {
    setIsSignIn(!isSignIn);
  };
  const handleFormSubmit = () => {
    const message = validate(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
  };
  return (
    <div className="bg-[#111827] h-screen w-screen flex items-center justify-center">
      <div className=" h-[70%] w-[40%] p-6 pt-12 flex flex-col gap-6 shadow-md shadow-gray-100">
        <div className="text-white font-bold text-center">
          <h1 className="text-4xl m-2">streamify</h1>
          <h1 className="text-3xl underline">
            {isSignIn ? "SignIn" : "Sign Up"}
          </h1>
        </div>
        <div className="w-[60%]  mx-auto text-white font-medium">
          <form onSubmit={(e) => e.preventDefault()}>
            <p className="text-xl mb-1 mt-4">Email address</p>
            <input
              ref={email}
              type="text"
              className="bg-[#1d2432] text-white p-2 border-2 border-gray-100 rounded-lg w-[100%]"
            />
            <p className="text-xl mb-1 mt-4">Password</p>
            <input
              ref={password}
              type="text"
              className="bg-[#1d2432] text-white p-2 border-2 border-gray-100 rounded-lg w-[100%]"
            />
            {errorMessage && <p className="text-md font-medium text-[#6366f1] m-1">{errorMessage}</p>}
            <button
              onClick={handleFormSubmit}
              className="bg-[#6366f1] text-white w-[100%] p-2 mt-6 rounded-lg "
            >
              {isSignIn ? "SignIn" : "Sign Up"}
            </button>
          </form>
          <p className="mt-2 cursor-pointer text-lg" onClick={handleToggle}>
            {isSignIn ? "New to streamify? SignUp" : "Already a user? SignIn"}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
