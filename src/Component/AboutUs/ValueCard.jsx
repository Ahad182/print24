import React from "react";

const ValueCard = ({ item }) => {
  return (
    <div  className="values-card border-[1px] border-black shadow-md shadow-blue-500  rounded-xl p-2">
      <h1 className="text-7xl font-semibold font-sans">{item.number}.</h1>
      <h3 className="mt-3 text-gray-700 font-bold">{item["sub-title"]}</h3>
      <p className="mt-5 text-xl w-full">{item.detail}</p>
    </div>
  );
};

export default ValueCard;
