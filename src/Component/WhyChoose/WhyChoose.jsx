import React from "react";
import WhyChooseCard from "./WhyChooseCard";

import pic1 from "../../assets/images/WhyChoose/design.webp";
import pic2 from "../../assets/images/WhyChoose/ecom.webp";
import pic3 from "../../assets/images/WhyChoose/eco.webp";
import pic4 from "../../assets/images/WhyChoose/time.webp";
import pic5 from "../../assets/images/WhyChoose/support.webp";
import pic6 from "../../assets/images/WhyChoose/moqs.webp";

const WhyChoose = () => {
  return (
    <div className="w-full mt-24 overflow-x-hidden flex flex-col justify-center items-center">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
        Why <span className="text-blue-500">Choose</span> us?
      </h1>
      <div className=" mt-12 w-[90%]  flex flex-col md:flex-row  items-center justify-between gap-3">
        <WhyChooseCard
          title="Free Design Support"
          bg="bg-[#a9ced7]"
          para="We provide you with all-in packaging designs’ assistance. Our marvelous themes always come hand in hand with functionality and aesthetics"
          pic={pic1}
        />

        <WhyChooseCard
          title="E-Commerce Packaging Solutions"
          bg="bg-[#f2606a]"
          para="Shop ‘custom printed boxes with logo’ in bulk quantities and wholesale prices. We offer a lightweight, sturdier, easy unboxing and closing experience"
          pic={pic2}
        />

        <WhyChooseCard
          title="Eco-Friendly Packaging"
          bg="bg-[#f1d9cd]"
          para="Print 247 is an environmentally responsible packaging company. We endorse the use of recyclable and sustainable materials for a greener planet"
          pic={pic3}
        />

        <WhyChooseCard
          title="Quick Turnaround Time"
          bg="bg-[#ffd539]"
          para="We are fast. We are quick. And we keep you updated till you receive the order/packaging products in your hands, which are shipped nationwide"
          pic={pic4}
        />
      </div>

      <div className="lowercards  w-[90%] overflow-x-hidden mt-4 flex flex-col md:flex-row  items-center justify-between gap-5">
       <div className="left-card flex items-center justify-between p-6 bg-[#f4d9e2] rounded-3xl">
            <div className="">
                <h1 className="text-xl font-bold mb-4">Ideal Customer Support</h1>
                <p className="text-sm hidden md:block">We provide you with the most skillful customer support in the USA. Dial us, then let us make your dream packaging a reality with 247 support</p>
            </div>
            <div className="md:w-full w-[30%]">
                <img src={pic5} alt="" className=""/>
            </div>
       </div>


       <div className="right-card flex items-center justify-between p-6  bg-[#cec6fe] rounded-3xl">
            <div className="">
                <h1 className="text-xl font-bold mb-4">Low MOQs</h1>
                <p className=" text-sm hidden md:block">Our printing and packaging company offers the most pleasing low MOQs (Minimum Order Quantity) packages in the United States of America</p>
            </div>
            <div className="md:w-full w-[30%]">
                <img src={pic6} alt="" />
            </div>
       </div>
      </div>
    </div>
  );
};

export default WhyChoose;
