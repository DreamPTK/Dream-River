import React from "react";
import { TypeAnimation } from "react-type-animation";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiPypi } from "react-icons/si";

const Main = () => {
  return (
    <div id="main">
      <img
        className=" w-full h-screen object-cover object-center scale-x-10  "
        src="https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        alt="/"
      />
      <div className=" w-full h-screen absolute top-0 left-0 bg-black/60">
        <div className=" max-w-[600px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <img
            className="m-5 flex flex-col  justify-center items-center "
            src="src\assets\logo.png"
            width="300px"
            alt="/"
          />

          <h1 className=" sm:text-6xl text-4xl font-bold text-gray-200 m-2">
            Dream River
          </h1>
          <h2 className="sm:text-3xl text-2xl pt-6  text-gray-200">
            {" "}
            This is
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                " ",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "a Python package for Geospatial Data",
                3000, // wait 1s before replacing "Mice" with "Hamsters"
              ]}
              wrapper="span"
              cursor={true}
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className=" flex flex-row m-6 justify-between">
            <a href="https://github.com/Pathakorn40">
              <BsGithub
                className="cursor-pointer text-white  m-4 hover:scale-150 ease-in duration-300"
                size={40}
              />
            </a>
            <a href="https://www.linkedin.com/in/pathakorn-usaha-114283244/">
              <BsLinkedin
                className="cursor-pointer text-white m-4  hover:scale-150 ease-in duration-300 "
                size={40}
              />
            </a>
            <a href="https://pypi.org/project/dream-river/">
              <SiPypi
                className="cursor-pointer text-white  m-4 hover:scale-150 ease-in duration-300"
                size={40}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
