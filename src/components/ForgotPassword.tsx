import React from "react";
import { userEndPoint } from "../Apis";
import { Link } from "react-router-dom";
const forgotPassword = `${userEndPoint}/forgotPassword` as const;

const ForgotPassword = () => {
  return (
    <div className="flex w-[100vw] pt-[6rem] sm:pt-0 sm:h-[80vh]  justify-center items-center ">
      <form
        className="flex flex-col border p-16 items-center justify-between"
        action={forgotPassword}
        method="POST"
      >
        <div className="font-bold text-indigo-400 md-4">Forgot Password</div>
        <input
          className="border rounded-sm py-2 px-4 mt-4"
          type="text"
          placeholder="Please enter the username"
          name="username"
        />
        <button
          className="w-max p-2 mt-6 mx-2 border-blue bg-indigo-400 hover:bg-indigo-500 hover:text-white"
          type="submit"
        >
          Send Reset Password
        </button>
        <button className="w-max p-2 mt-6 mx-2 border-blue bg-indigo-400 hover:bg-indigo-500 hover:text-white">
          <Link to={"/resetPassword"}>Use Reset Token</Link>
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
