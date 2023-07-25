import React from "react";
import SphereImg from "../assets/sphere.png";
import DcubeImg from "../assets/Dcube.png";

const GetStart = () => {
  return (
    <div className=" bg-slate-100">
      <div id="getstart" className=" max-w-[90%] m-auto md:pl-20 p-4 py-28 ">
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">
          Get Start
        </h1>
        <p className="text-justify p-2 py-8">
          Dream-River is a comprehensive Python package designed for geospatial
          data analysis. It provides a wide range of powerful tools tailored for
          geoprocessing tasks, including essential operations like union,
          intersect, clip, merge, and many more. Additionally, the package
          offers various conversion tools that facilitate seamless
          transformations between different geospatial data formats.
        </p>
        <a href="https://sphere.gistda.or.th/">
          <img src={SphereImg} alt="/" className="max-w-[70%] m-auto" />
        </a>
        <p className="text-justify p-2 py-8">
          This library was created as a part of the "Sphere" project, which is
          the Thai Open Platform project managed by GISTDA (Geoinformation and
          Space Technology Development Agency). The majority of its elements
          were developed by Open Data Cube (ODC). Using Python-based
          programming, you can perform space-time computations similar to what
          can be done in Google Earth Engine. As a result, this library is
          well-suited for use in the Jupyter environment available on the
          https://datacube.gistda.or.th/.
        </p>
        <a href="https://datacube.gistda.or.th/">
          <img src={DcubeImg} alt="/" className="max-w-[70%] m-auto" />
        </a>
      </div>
    </div>
  );
};

export default GetStart;
