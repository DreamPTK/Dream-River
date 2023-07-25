import React from "react";

const Install_Item = ({ how, text, detail }) => {
  return (
    <ol className="flex flex-col md:flex-row relative ">
      <li className=" mb-10 ml-4 ">
        <div >
          <p>
          <span className="flex  text-cyan-400 text-2xl font-bold m-5">{how}</span>
          </p>
          <p>
            <span className=" flex text-rose-300 text-1xl m-5 ">{text}</span>
          </p>
          <p>
            <span className=" flex  text-yellow-500 bg-slate-700 border border-gray-500 m-5 mb-10 p-3">{detail}</span>
          </p>
        </div>
      </li>
    </ol>
  );
};

export default Install_Item;
