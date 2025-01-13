import React from "react";
import ValueCard from "./ValueCard";
import ValuesData from "../../Data/ValuseData";
const Values = () => {
  return (
    <div className=" px-5 md:w-[70%] mx-auto mt-9 z-[-5]">
      <h1 className= "text-5xl md:text-9xl text-center font-semibold ">
        Values <span className="text-blue-500 ">247</span>
      </h1>
      <p className="w-full text-center mt-4 font-medium">
        We operate not only with expertise but also with unwavering adherence to
        our values. This commitment enhances the quality of our work and fosters
        strong, positive relationships with our clients.
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-rows-2 mt-10 gap-4">
        {ValuesData.map((item, index) => {
          return (
            <ValueCard key={index} item={item}/>
          );
        })}
      </div>
    </div>
  );
};

export default Values;
