import React, { useState } from "react";
import { AiOutlineHome, AiOutlineMenu,AiOutlineMail } from "react-icons/ai";
import { GrInstallOption } from "react-icons/gr";
import {
  BsFillRocketTakeoffFill, BsJournalText } from "react-icons/bs";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className=" top-4 right-4 z-[99] md:hidden text-gray-500 fixed " //absolute
        size={20}
      />

      {nav ? (
        <div className="fixed w-full  h-screen bg-black/80  flex flex-col justify-center items-center z-20">
          <a onClick={handleNav}
            href="#main"
            className="w-[60%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 "
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a onClick={handleNav}
            href="#install"
            className="w-[60%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 "
          >
            <GrInstallOption size={20} />
            <span className="pl-4">Installation</span>
          </a>
          <a onClick={handleNav}
            href="#getstart"
            className="w-[60%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 "
          >
            <BsFillRocketTakeoffFill size={20} />
            <span className="pl-4">Get Start</span>
          </a>
          <a onClick={handleNav}
            href="#tutorial"
            className="w-[60%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 "
          >
            <BsJournalText size={20} />
            <span className="pl-4">Tutorial</span>
          </a>
          <a onClick={handleNav}
            href="#contact"
            className="w-[60%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 "
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        <div></div>
      )}
      <div className=" md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            className=" rounded-full shadow-lg bg-gray-100 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100  "
            title="HOME"
          >
            <AiOutlineHome size={20} />
            
          </a>
          <a
            href="#install"
            className=" rounded-full shadow-lg bg-gray-100 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
            title="Installation"
          >
            <GrInstallOption size={20} />
          </a>
          <a
            href="#getstart"
            className=" rounded-full shadow-lg bg-gray-100 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
            title="Get Start"
          >
            <BsFillRocketTakeoffFill size={20} />
          </a>
          <a
            href="#tutorial"
            className=" rounded-full shadow-lg bg-gray-100 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
            title="Tutorial"
          >
            <BsJournalText size={20} />
          </a>
          <a
            href="#contact"
            className=" rounded-full shadow-lg bg-gray-100 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
            title="Contact"
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
