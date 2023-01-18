import React, { useState } from "react";
import Registration from "./Registration.controller";

const RegistrationForm: React.FC = (): JSX.Element => {
  const [passwordcheck, setPasswordCheck] = useState(false);
  const [confirmPasswordcheck, setConfirmPasswordCheck] = useState(false);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked ? setPasswordCheck(true) : setPasswordCheck(false);
  };
  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.target.checked
      ? setConfirmPasswordCheck(true)
      : setConfirmPasswordCheck(false);
  };

  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setlastname] = useState<string>("");
  const [username, setusername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setconfirmPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  return (
    <div className="w-screen  flex justify-center pt-2 pb-2 mb-2 text-left">
      <form
        onSubmit={(e) =>
          Registration.handleRegister(
            e,
            firstname,
            username,
            lastname,
            email,
            password,
            address,
            confirmPassword
          )
        }
        method="POST"
        className="  p-8  border-2"
      >
        <label className="flex justify-center items-center mb-10 text-xl underline decoration-1 text-decoration-style:solid">
          {" "}
          Register
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="flex-row sm:flex-col">
            <label htmlFor="firstname">Firstname</label>
            <input
              className="border-2 rounded-lg ml-6 mb-4 p-2 mt-2  hover:border-[#065606] "
              onChange={(e) => setFirstname(e.target.value)}
              type="text"
              name="firstname"
              required
            />
          </div>
          <div className="flex-row sm:flex-col">
            <label htmlFor="lastname" className="">
              lastname
            </label>
            <input
              className="border-2 rounded-lg ml-6 mb-4 p-2 mt-2  hover:border-[#065606] "
              onChange={(e) => setlastname(e.target.value)}
              type="text"
              name="lastname"
              required
            />
          </div>
          <div className="flex-row sm:flex-col">
            <label htmlFor="username">Username</label>
            <input
              className="border-2 rounded-lg ml-6 mb-4 p-2 mt-2 hover:border-[#065606] "
              onChange={(e) => setusername(e.target.value)}
              type="text"
              name="username"
            />
          </div>
          <div className="flex-row sm:flex-col">
            <label htmlFor="email">Email</label>

            <input
              className="border-2 rounded-lg ml-6 mb-4 mt-2 p-2 hover:border-[#065606] "
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              required
            />
          </div>
          <div className="flex-row sm:flex-col">
            <label htmlFor="address" className="">
              Address
            </label>
            <input
              className="border-2 rounded-lg  mb-4 p-2 mt-2 ml-[2.5rem] hover:border-[#065606]"
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              name="address"
              required
            />
          </div>
          <div className="flex-row sm:flex-col">
            <label htmlFor="password">password</label>
            <input
              className="border-2 rounded-lg ml-6 mb-4 p-2 mt-1  hover:border-[#065606] "
              onChange={(e) => setPassword(e.target.value)}
              type={passwordcheck ? "text" : "password"}
              name="password"
              required
            />
            <input
              className="password-checkbox h-4 w-4 m-1 cursor-pointer"
              onChange={handlePasswordChange}
              type="checkbox"
            ></input>
          </div>
          <div className="flex-row sm:flex-col">
            <label htmlFor="password">Confirm password</label>
            <input
              className="border-2 rounded-lg ml-6 mb-4 p-2 mt-1  hover:border-[#065606] "
              onChange={(e) => setconfirmPassword(e.target.value)}
              type={confirmPasswordcheck ? "text" : "password"}
              name="confirmpassword"
              required
            />
            <input
              className="password-checkbox h-4 w-4 m-1 cursor-pointer"
              onChange={handleConfirmPasswordChange}
              type="checkbox"
            ></input>
          </div>
        </div>
        <div className="flex-row sm:flex-col">
          <div className="flex justify-center mt-8 text-xl">
            <input
              className="border rounded-full w-40 h-15 cursor-pointer mt-2 mb-4 p-2 bg-indigo-500 hover:bg-gray-400"
              type="submit"
              value="Submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
