import React from "react";
import { useNavigate } from "react-router-dom";

import Background from "../images/main.png";

import { mainLanding } from "../images";
const MainLandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="text-center flex justify-end h-max items-center flex-col bg-opacity-20 text-gray-800 py-32 pl-32">
        <img
          src={mainLanding}
          className="absolute w-full h-full top-0 left-0 -z-10 bg-cover"
        />
        <h1 className=" bg-opacity-75 text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
          The best offer on the market <br />
          <span className="text-blue-600">for your needs</span>
        </h1>
        <a
          className=" bg-opacity-75 inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          href="#!"
          onClick={() => navigate("/catalogue")}
          role="button"
        >
          Shop Now
        </a>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              Easy way of buying
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Get your desired Products
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              You will be able to get every desired product from this site. This
              digital market contains variety of products at affordabe price.
              product type includes electronics, gadgets, and so on.
            </p>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={Background}
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                Electronics and Gadgets
              </h2>
              <p className="leading-relaxed text-base">
                Get your desired electronics and gadgets here.
              </p>
              <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                Button
              </button>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={Background}
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                Stationary items
              </h2>
              <p className="leading-relaxed text-base">
                Get the list of stationary item here.
              </p>
              <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Get Subscription
            </h1>
            <p className="leading-relaxed mt-4">
              By joining with us you will be notified about different discount
              and sales offer. Do not miss out the chance of getting
              notification of our exclusive deals.
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Sign Up
            </h2>
            <div className="relative mb-4">
              <label
                htmlFor="full-name"
                className="leading-7 text-sm text-gray-600"
              >
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default MainLandingPage;
