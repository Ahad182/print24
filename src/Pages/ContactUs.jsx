import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
// import p from "@mui/material/p";
import Typography from "@mui/material/Typography";
import { FaChevronDown } from "react-icons/fa";
const ContactUs = () => {
  return (
    <div className="w-full  relative z-[-1]  ">
      {/* hero section  */}
      <div className=" w-full h-full relative flex items-center justify-center">
        <img
          src="../../src/assets/images/contactbanner.webp"
          alt=""
          className="w-full h-screen  relative object-center object-cover  md:object-fill pt-[75px] md:pt-44 z-[-50]"
        />
        <div className="w-full md:w-[60%] absolute md:p-24 text-center text-white flex items-center justify-center gap-4 flex-col">
          <h1 className="text-4xl md:text-7xl  font-bold">Need Help!</h1>
          <p className="text-center font-semibold px-4">
            Are you searching for innovative solutions? Are you keen to align
            with a business that places value on purpose beyond profit?
            Strategically aligning with your broader objectives, Print247.us is
            here to transform your communications.
          </p>
        </div>
      </div>
      {/* contact form and address  section */}
      <div className="w-full  bg-slate-100 pt-11 md:pt-32 pb-4">
        <div className="w-full md:w-[90%] mx-auto  grid md:grid-cols-2 gap-6">
          {/* left section  */}
          <div className="left    p-3">
            <h2 className="text-5xl md:text-5xl  font-bold md:w-[50%]">
              Looking For Fresh Perspective?
            </h2>
            <form action="" className="mt-20 flex flex-col gap-5 ">
              <div className="flex gap-2 flex-col md:flex-row w-full">
                <input
                  type="text"
                  name="fname"
                  id=""
                  placeholder="First Name"
                  className="bg-transparent px-5 py-3 w-full md:w-[50%] rounded-3xl outline-none border border-gray-500 placeholder:text-gray-600 placeholder:text-xl"
                />
                <input
                  type="text"
                  name="lname"
                  id=""
                  placeholder="Last Name"
                  className="bg-transparent px-5 py-3 w-full md:w-[50%] rounded-3xl outline-none border border-gray-500 placeholder:text-gray-600 placeholder:text-xl"
                />
              </div>
              <div className="w-full">
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Email"
                  className="bg-transparent px-5 py-3 w-full rounded-3xl outline-none border border-gray-500 placeholder:text-gray-600 placeholder:text-xl"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  name="phone"
                  id=""
                  placeholder="Phone"
                  className="bg-transparent px-5 py-3 w-full rounded-3xl outline-none border border-gray-500 placeholder:text-gray-600 placeholder:text-xl"
                />
              </div>
              <div className="w-full">
                <textarea
                  type="text"
                  name="message"
                  rows={8}
                  id=""
                  placeholder="Message"
                  className="bg-transparent px-5 py-3 w-full rounded-3xl outline-none border border-gray-500 placeholder:text-gray-600 placeholder:text-xl"
                />
              </div>
              <button
                type="submit"
                className="p-3 bg-blue-500 text-white text-2xl rounded-3xl w-[200px]"
              >
                Email Us
              </button>
            </form>
          </div>

          {/* righ section  */}
          <div className="right  p-3 px-5">
            <h2 className="text-3xl md:text-5xl font-bold ">
              Connect With Us?
            </h2>
            <div className="w-full pt-28">
              <div className="flex flex-col gap-3 mt-8">
                <h1 className="text-[35px] font-bold">Phone</h1>
                <h3 className="text-2xl font-semibold font-serif text-slate-800">
                  Direct No: +1 (346) 246-1639
                </h3>
              </div>
              <div className="flex flex-col gap-2 mt-8">
                <h1 className="text-[35px] font-bold">Email</h1>
                <h3 className="text-2xl font-semibold font-serif text-slate-800">
                  Support@print247.us
                </h3>
              </div>

              <div className="flex flex-col gap-2 mt-8">
                <h1 className="text-[35px] font-bold">Address</h1>
                <h3 className="text-2xl font-semibold font-serif text-slate-800">
                  1631 Cottonwood School Rd Rosenberg, TX 77471,USA
                </h3>
              </div>
              {/* <div className=" mt-16">
                
                <h3 className="text-2xl w-full md:w-[70%]  text-slate-800">Please fill out a call request. We will typically call you back in less than a minute.</h3>
            </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Most Asked Questions section  */}

      <div className="w-full   pt-11 md:pt-32">
        <h1 className="text-center text-3xl md:text-7xl font-semibold ">
          Frequently Asked Questions
        </h1>
        <h4 className="text-center font-bold text-3xl my-10">
          Popular Questions
        </h4>
        <div className="w-full md:w-[80%] mx-auto  p-3 grid md:grid-cols-2 gap-20 md:mt-20 ">
          <div className="left flex flex-col gap-11 ">
            <Accordion>
              <AccordionSummary
                expandIcon={<FaChevronDown className="font-bold text-2xl" />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <h1 className="text-2xl font-semibold">
                  What types of material do Print247.us use for the custom
                  packaging?
                </h1>
              </AccordionSummary>
              <p className="font-normal font-serif px-4 leading-7">
                Print247.us offers the best quality of materials. It includes
                eco-friendly options to suit your packaging needs.
              </p>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<FaChevronDown className="font-bold text-2xl" />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <h1 className="text-2xl font-semibold">
                  Can I cancel my order?
                </h1>
              </AccordionSummary>
              <p className="font-normal font-serif px-4 leading-7">
                Contact our customer service to inquire about canceling an order
                as soon as possible. Order cancellations are subject to certain
                conditions and depend on the production stage of your custom
                boxes.
              </p>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<FaChevronDown className="font-bold text-2xl" />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <h1 className="text-2xl font-semibold">
                  Can I save my design?
                </h1>
              </AccordionSummary>
              <p className="font-normal font-serif px-4 leading-7">
                Yes, you can save your custom packaging design with the
                Print247.us account. Modify, order, and keep your packaging
                projects from your Print247.us account.
              </p>
            </Accordion>
          </div>
          <div className="right flex flex-col gap-11 ">
            <Accordion>
              <AccordionSummary
                expandIcon={<FaChevronDown className="font-bold text-2xl" />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <h1 className="text-2xl font-semibold">
                  What is the minimum order quantity for custom boxes?
                </h1>
              </AccordionSummary>
              <p className="font-normal font-serif px-4 leading-7">
                The minimum order quantity depends on the type and
                specifications of the custom boxes. Contact our team for
                specific details tailored to your requirements.
              </p>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<FaChevronDown className="font-bold text-2xl" />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <h1 className="text-2xl font-semibold">
                  What printing techniques are available?
                </h1>
              </AccordionSummary>
              <p className="font-normal font-serif px-4 leading-7">
                We provide a range of printing options, including digital
                printing, offset printing, and more. The choice depends on your
                design and preferences.
              </p>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<FaChevronDown className="font-bold text-2xl" />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <h1 className="text-2xl font-semibold">
                  Are there any design assistance services available?
                </h1>
              </AccordionSummary>
              <p className="font-normal font-serif px-4 leading-7">
                Our design experts can assist you in creating eye-catching and
                practical designs for your packaging.
              </p>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
