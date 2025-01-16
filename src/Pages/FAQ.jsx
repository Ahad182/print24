import React, { useEffect, useRef, useState } from "react";
import FAQData from "../Data/FAQ";

import banner from "../assets/images/contactbanner.webp";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import { FaChevronDown } from "react-icons/fa";
const FAQ = () => {
  const [currentId, SetCurrentId] = useState(1);
  const myCleanedData = FAQData.filter((item) => item.id === currentId);

  return (
    <div className="w-full  ">
      {/* hero section  */}
      <div className=" w-full h-full relative z-[-1] flex items-center justify-center">
        <img
          src={banner}
          alt=""
          className="w-full h-screen  relative object-center object-cover  md:object-fill pt-[75px] md:pt-44 "
        />
        <div className="w-full md:w-[70%] absolute md:p-24 text-center text-white flex items-center justify-center gap-10 flex-col z-[100]">
          <h1 className="text-4xl md:text-5xl  font-bold md:pt-4">
            Frequently Asked Questions
          </h1>
          <p className="text-center  text-xl px-4">
            We’ve answered all the questions you may have before ordering a
            custom box. Not found a relevant answer to your query? We are happy
            to answer any questions about your package at any time.
          </p>
        </div>
      </div>

      <div className="w-full  bg-[#f1f1f1]">
        <h1 className="text-3xl md:text-5xl font-bold text-center font-serif pt-20">
          General Topics
        </h1>
        <div className="w-[70%]  mx-auto mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   gap-10  ">
          {FAQData.map((item, index) => {
            return (
              <div
                className={` h-[250px]  ${
                  currentId === item.id
                    ? "bg-white border-none shadow-red-400 shadow-xl"
                    : "border-[2px] border-black"
                } hover:shadow-xl hover:shadow-red-400  rounded-3xl  flex flex-col justify-center items-center gap-4 relative  `}
                key={index}
                onClick={(e) => SetCurrentId(index + 1)}
              >
                <div>
                  <img
                    src={item.img}
                    alt=""
                    className="w-[70px] object-center object-fill"
                  />
                </div>

                <h3 className="text-3xl font-semibold text-center w-[150px]">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
        <div className="w-[80%] mx-auto  mt-20 pb-6 bg-[#f1f1f1]  ">
          <div className="">
            {myCleanedData.map((item,index) => (
              <>
              <h2 key={item.id} className=" text-5xl font-bold text-center">
                {item.title}
              </h2>
              <div className="left flex flex-col gap-2 mt-11 w-full">
                {
                 item.questions?.map((singleQuestion,index)=>{
                    return(
                      <div key={singleQuestion.id}>
                      <Accordion >
                      <AccordionSummary
                        expandIcon={<FaChevronDown className="font-bold text-2xl" />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        <h1 className="text-2xl font-semibold pt-10">
                          {singleQuestion.ques}
                        </h1>
                      </AccordionSummary>
                      <p className="font-semibold  px-4 leading-7">
                        {singleQuestion.ans}
                      </p>
                    </Accordion>
                    </div>
                    )
                  })
                }
             
            </div>
            </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
