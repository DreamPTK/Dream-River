import React from "react";
import Tutorial_Item from "./Tutorial_Item";
import SegmentImg from "../assets/Segment.png";
import LoadImg from "../assets/LoadData.png";
import MLImg from "../assets/ML.png";
import PlotImg from "../assets/Plotimg.png";
import R2VImg from "../assets/R2V.png";
import VectorImg from "../assets/Vectorize.png";

const Tutorial2 = () => {
  return (
    <div className=" bg-slate-100">
      <div id="tutorial2" className=" max-w-[90%] m-auto md:pl-20 p-4 py-28 ">
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">
          Tutorials
        </h1>

        <p className=" text-center py-8">
          This is the Tutorial adopted the dream-river tools for Geo-spatial
          data analysis.
        </p>
        <div className=" grid sm:grid-cols-3 gap-12 ">
          <Tutorial_Item
            img={SegmentImg}
            title="Image Segmentation"
            link="https://nbviewer.org/github/Pathakorn40/rice-detection/blob/main/Tutorial/Image_segmentation.ipynb "
          />
          <Tutorial_Item
            img={LoadImg}
            title="Load data from Cube"
            link="https://nbviewer.org/github/Pathakorn40/rice-detection/blob/main/Tutorial/Load_data.ipynb"
          />
          <Tutorial_Item
            img={MLImg}
            title="Machine Learning"
            link="https://nbviewer.org/github/Pathakorn40/rice-detection/blob/main/Tutorial/Machine_learning.ipynb"
          />
          <Tutorial_Item
            img={PlotImg}
            title="Plot Image"
            link="https://nbviewer.org/github/Pathakorn40/rice-detection/blob/main/Tutorial/Plot_image.ipynb"
          />
          <Tutorial_Item
            img={R2VImg}
            title="Raster to Polygon"
            link="https://nbviewer.org/github/Pathakorn40/rice-detection/blob/main/Tutorial/Raster2Vector.ipynb"
          />
          <Tutorial_Item
            img={VectorImg}
            title="Vectorize"
            link="https://nbviewer.org/github/Pathakorn40/rice-detection/blob/main/Tutorial/Vectorize.ipynb"
          />
        </div>
      </div>
    </div>
  );
};

export default Tutorial2;
