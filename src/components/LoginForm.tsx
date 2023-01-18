import axios, { AxiosError } from "axios";
import React, { useState } from "react";
import { userEndPoint } from "../Apis";
const loginEnpoint = `${userEndPoint}/login`;
import swal from "sweetalert2";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function loginUser(event: any) {
    event.preventDefault();
    if (username && password) {
      await axios
        .post(loginEnpoint, {
          username,
          password,
        })
        .then((res) => {
          localStorage.setItem("token", res.data);
          window.location.href = "/";
        })
        .catch((err: AxiosError) => {
          console.log("====================================");
          console.log(err);
          console.log("====================================");
          if (err.response && err.response.status == 500) {
            return swal.fire(
              (err.response && err.response.data
                ? err.response.data
                : "") as string
            );
          } else {
            swal.fire({
              html: (err.response?.data as Array<any>)[0]?.errors.issues[0]
                .message,
              showCloseButton: true,
              showConfirmButton: true,
            });
          }
        });
    } else {
      swal.fire("please fill the credentials");
    }
  }
  return (
    <div className="w-[100vw] h-screen-50 flex justify-center items-center">
      <form
        onSubmit={loginUser}
        method="POST"
        className="border-1 border-gray-400 border-solid flex flex-col text-indigo-600 p-6 "
      >
        Username:
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          name="username"
          className="p-2 border border-gray-800 bg-2- rounded-md text-indigo-600 mt-4"
          placeholder="username"
          // required
        />
        <br />
        Password:
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          name="pasword"
          className="p-2 border border-gray-800 rounded-md text-indigo-600 mt-2"
          placeholder="password"
          // required
        />
        <br />
        <button
          type="submit"
          className=" rounded-full text-white p-2 px-4 mt-2 mx-2 border-blue bg-indigo-500 hover:bg-indigo-400 hover:text-white"
        >
          Login
        </button>
        <label htmlFor="" className="flex justify-center mt-4 text-black">
          Not Registered Yet?{" "}
          <Link to="/register" className="ml-1 text-indigo-800">
            Register
          </Link>
        </label>
      </form>
    </div>
  );
};

export default LoginForm;
