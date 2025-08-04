import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const Login = () => {
  const { showUserLogin, navigate, setShowUserLogin } = useContext(ShopContext);
  const [state, setState] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div
      onClick={() => setShowUserLogin(false)}
      className="fixed top-0 bottom-0 left-0 right-0 z-40 flex items-center text-sm text-gray-600 bg-black/50"
    >
      <form
        onSubmit={onSubmitHandler}
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white"
      >
        <h3 className="bold-28 mx-auto mb-3">
          <span className="text-secondary capitalize">User </span>
          <span className="capitalize">
            {state === "login" ? "Login" : "Register"}
          </span>
        </h3>
        {state === "Register" && (
          <div className="w-full">
            <p className="medium-14"> Name </p>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Type here...."
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-black/80"
              required
            />
          </div>
        )}
        <div className="w-full">
          <p className="medium-14"> Email </p>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Type here...."
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-black/80"
            required
          />
        </div>
        <div className="w-full">
          <p className="medium-14"> Password </p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Type here...."
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-black/80"
            required
          />
        </div>
        {state === "register" ? (
          <p>
            Already have account?{" "}
            <span
              onClick={() => setState("login")}
              className="text-secondary cursor-pointer"
            >
              click here
            </span>
          </p>
        ) : (
          <p>
            Create an account?
            <span
              onClick={() => setState("register")}
              className="text-secondary cursor-pointer"
            >
              click here
            </span>
          </p>
        )}
        <button type="submit" className="btn-secondary w-full rounded !py-2.5">
          {state === "register" ? "Create Account" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
