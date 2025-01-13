import React from "react";
import logo from "../assets/images/logo.png";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import payment from "../assets/images/payment.webp"
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="w-full bg-black mt-14 md:px-8">
      <div className=" w-full md:w-[90%]  md:mx-auto px-4  md:px-7 py-12 text-white">
        <div className=" flex flex-wrap items-start md:justify-between  gap-7 md:gap-0  ">
          <div className=" flex flex-col md:w-[30%] justify-center mb-5 ">
            <img src={logo} alt="logo" className="w-[200px]" />
            <p className="text-white mt-6">
              We are a leading American Brand of Printing and Packaging
              Products. It is the time to Embrace the Packaging of Tomorrow.
              Welcome!
            </p>
          </div>
          <div>
            <h1 className="text-2xl ">Quick Links</h1>
            <ul className="flex flex-col gap-5 mt-4 text-xl">
              <li><NavLink to="/">Home</NavLink> </li>
              <li><NavLink to="about/"> About Us</NavLink></li>
              <li><NavLink to="contact/"> Contact Us</NavLink></li>
            </ul>
          </div>
          <div>
           
            <h1 className="text-2xl ">About</h1>
            <ul className="flex flex-col gap-5 mt-4 text-xl">
              <li><NavLink to="faq/">FAQ</NavLink> </li>
              <li><NavLink to="privacy-policy/"> Privacy Policy</NavLink> </li>
              <li><NavLink to="term-and-condition/"> Terms and Conditions</NavLink> </li>
              <li> <NavLink to="return-policy/"> Return Policy</NavLink></li>
              <li><NavLink to="shopping-policy/">Shipping Policy</NavLink> </li>
              
            </ul>
          </div>
        </div>

        <div className=" mt-4">
           <h1 className="text-xl mb-5">Contact us</h1>
           <div className="flex flex-col justify-center gap-6">
           <div className="flex gap-5 items-center text-xl"><FaPhoneVolume/> <h2>+1 (346) 246-1639</h2></div>
           <div className="flex gap-5 items-center text-xl"><IoIosMail/> <h2>Support@print247.us</h2></div>
           <div className="flex gap-5 items-center text-xl"><FaMapMarkerAlt/> <h2>1631 Cottonwood School Rd Rosenberg, TX 77471,USA</h2></div>
           </div>
        </div>
        <div className="mt-14">
          <h1 className="text-center text-2xl font-bold">Follow Us On</h1>
        </div>
        <div className="flex items-center justify-between mt-9">
          <div className="h-[1px] w-[35%] bg-gray-500"></div>
          <div className="social flex items-center gap-3">
            <div className="p-3 border border-gray-500 text-gray-200 text-2xl rounded-full flex justify-center items-center hover:text-green-400 transition-colors duration-500 ease-linear"> <a href=""><FaFacebook className=""/></a></div>
            <div className="p-3 border border-gray-500 text-gray-200 text-2xl rounded-full flex justify-center items-center hover:text-green-400 transition-colors duration-500 ease-linear"> <a href=""><FaInstagramSquare className=""/></a></div>
            <div className="p-3 border border-gray-500 text-gray-200 text-2xl rounded-full flex justify-center items-center hover:text-green-400 transition-colors duration-500 ease-linear"> <a href=""><FaPinterestP className=""/></a></div>
            <div className="p-3 border border-gray-500 text-gray-200 text-2xl rounded-full flex justify-center items-center hover:text-green-400 transition-colors duration-500 ease-linear"> <a href=""><FaLinkedin className=""/></a></div>
          </div>
          <div className="h-[1px] w-[35%] bg-gray-500"></div>
        </div>

        <div className="lower-footer font-semibold flex flex-col md:flex-row gap-5 mt-3 items-center justify-between">

          <div className=" bg-white md:bg-transparent text-black md:text-white p-2">
            <h1 className="capitalize ">Print247.us © 2024. All Rights Reserved.</h1>
          </div>

          <div className="flex flex-col md:flex-row gap-2 items-center">
            <h1 className="capitalize ">We accepts all major credit cards. </h1>
            <img src={payment} alt="" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
