import React from "react";
import Tutorial_Item from "./Tutorial_Item";
import bandImg from "../assets/Band Index.png";
import DisplayImg from "../assets/DisplayMap.png";
import DrawImg from "../assets/Drawing.png";
import GeotoolImg from "../assets/geotool.png";
import ExportImg from "../assets/exportimg.png";
import RiceImg from "../assets/Rice_detect.png";
import { AiOutlineDownCircle } from "react-icons/ai";

const Tutorial = () => {
  return (
    <div id="tutorial" className=" max-w-[90%] m-auto md:pl-20 p-4 py-28 ">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Tutorials
      </h1>

      <p className=" text-center py-8">
        This is the Tutorial adopted the dream-river tools for Geo-spatial data
        analysis.
      </p>
      <div className=" grid sm:grid-cols-3 gap-12 ">
        <Tutorial_Item
          img={bandImg}
          title="Band Index"
          link="https://nbviewer.org/github/Pathakorn40/rice-detection/blob/main/Tutorial/Band_indices.ipynb"
        />
        <Tutorial_Item
          img={DisplayImg}
          title="Display Basemap"
          link="https://nbviewer.org/github/Pathakorn40/rice-detection/blob/main/Tutorial/Display_interactive_map.ipynb"
        />
        <Tutorial_Item
          img={DrawImg}
          title="Drawing Tools"
          link="https://nbviewer.org/github/Pathakorn40/rice-detection/blob/main/Tutorial/Drawing_polygon.ipynb"
        />
        <Tutorial_Item
          img={GeotoolImg}
          title="Geoprocessing Tools"
          link="https://nbviewer.org/github/Pathakorn40/rice-detection/blob/main/Tutorial/Geoprocessing.ipynb"
        />
        <Tutorial_Item
          img={ExportImg}
          title="Export Image"
          link="https://nbviewer.org/github/Pathakorn40/rice-detection/blob/main/Tutorial/Get_data.ipynb"
        />
        <Tutorial_Item
          img={RiceImg}
          title="Rice Detection"
          link="https://nbviewer.org/github/Pathakorn40/rice-detection/blob/main/Tutorial/Rice_detection.ipynb"
        />
      </div>

      <div className=" flex items-center justify-center text-center mt-8 p-2 ">
        <a href="#tutorial2">
          <AiOutlineDownCircle
            size={60}
            className=" rounded-full shadow-lg text-[#001b5e] bg-gray-100 shadow-gray-300 mt-8 p-3 cursor-pointer hover:scale-110 ease-in duration-100 "
          />
          {/* <button className=" mt-8 p-2 rounded-lg bg-gray-300 border border-blue-900  text-gray-700 font-bold cursor-pointer text-sm">next</button> */}
        </a>
      </div>
    </div>
  );
};

export default Tutorial;
