"use client";

import Link from "next/link";

const Login = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <form action="">
        <div className="box flex flex-col mb-5">
          <label htmlFor="" className="mb-3">
            email
          </label>
          <input
            type="email"
            required
            className="border-gray-400 border h-[40px] rounded-md focus:outline-none px-1"
          />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="" className="mb-3">
            Password
          </label>
          <input
            type="password"
            required
            className="border-gray-400 border h-[40px] rounded-md focus:outline-none px-1"
          />
        </div>
        <button
          onClick={() => {}}
          className="w-[180px] bg-blue-600 h-[45px] flex justify-center items-center rounded-md text-white mt-5"
        >
          Login
        </button>
        <p className=" mt-3">
          have not register?{" "}
          <span className="text-blue-500 cursor-pointer">
            <Link href="/register">Register</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
