import React from "react";
import Install_Item from "./Install_Item";

const data = [
  {
    how: " ",
    text: "Need to setup Microsoft C++ Build Tools before Installation and install GDAL via wheel file, Download in this link below",
    detail: "https://github.com/cgohlke/geospatial-wheels/releases",
  },
  { 
    how: " ",
    text: "Example GDAL Installation in Python 3.9",
    detail: "pip install GDAL-3.8.4-cp39-cp39-win_amd64.whl",
  },
  {
    how: "How to setup",
    text: "Open CMD or Terminal",
    detail: "pip install dream-river",
  },
  {
    how: "Way to use",
    text: "This package was develop for jupyter lab environment of sphere.gistda website ",
    detail: "Access website (https://datacube.gistda.or.th/)  ",
  },
  {
    how: "How to load package",
    text: "Open coding environment or jupyter notebook and use code below",
    detail: "import dream_river",
  },
];

const Installation = () => {
  return (
    <div
      id="install"
      className=" w-full h-full m-auto md:pl-20 p-4 py-28 bg-zinc-900 "
    >
      <h1 className=" text-5xl font-bold text-center text-rose-300 mb-5  ">
        Installtion
      </h1>
      {data.map((item, idx) => (
        <Install_Item
          key={idx}
          how={item.how}
          text={item.text}
          detail={item.detail}
        />
      ))}
    </div>
  );
};

export default Installation;
