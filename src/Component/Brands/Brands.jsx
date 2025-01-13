import React from 'react';
import Marquee from 'react-fast-marquee';
import logo1 from "../../assets/images/logo1.png";
import logo2 from "../../assets/images/logo2.png";
import logo3 from "../../assets/images/logo3.png";
import logo4 from "../../assets/images/logo4.png";
import logo5 from "../../assets/images/logo5.png";
import logo6 from "../../assets/images/logo6.png";
import logo7 from "../../assets/images/logo7.png";
import logo8 from "../../assets/images/logo8.png";
import logo9 from "../../assets/images/logo9.png";

const Brands = () => {
  return (
    <div className="w-full overflow-x-hidden mt-16 px-8">
      <div className="brand-container md:px-28">
        <Marquee speed={50} gradient={false} >
          <div className="brand-card w-[200px] ">
            <img src={logo1} alt="Brand Logo" className=" h-auto" />
          </div>
          <div className="brand-card w-[200px]">
            <img src={logo2} alt="Brand Logo" className=" h-auto" />
          </div>
          <div className="brand-card w-[200px]">
            <img src={logo3} alt="Brand Logo" className=" h-auto" />
          </div>
          <div className="brand-card w-[200px]">
            <img src={logo4} alt="Brand Logo" className=" h-auto" />
          </div>
          <div className="brand-card w-[200px]">
            <img src={logo5} alt="Brand Logo" className=" h-auto" />
          </div><div className="brand-card w-[200px]">
            <img src={logo6} alt="Brand Logo" className=" h-auto" />
          </div>
          <div className="brand-card w-[200px]">
            <img src={logo7} alt="Brand Logo" className=" h-auto" />
          </div>
          <div className="brand-card w-[200px]">
            <img src={logo8} alt="Brand Logo" className=" h-auto" />
          </div>
          <div className="brand-card w-[200px]">
            <img src={logo9} alt="Brand Logo" className=" h-auto" />
          </div>
        </Marquee>
        
      </div>
    </div>
  );
};

export default Brands;
