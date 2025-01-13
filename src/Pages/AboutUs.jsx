import React from "react";
import heroVideo from "../assets/videos/aboutVideo.mp4";
import Values from "../Component/AboutUs/Values";
import aboutimage from "../assets/images/aboutprint.webp";
import TrandSet from "../Component/TrandSet/TrandSet";
import Brands from "../Component/Brands/Brands";
const AboutUs = () => {
  return (
    <div className="w-full ">
      {/* hero section   */}
      <div className="w-full h-[150%] relative z-[-5]">
        <video
          src={heroVideo}
          muted
          autoPlay={true}
          loop
          className="w-full h-full object-center object-fill  rounded-bl-[120px] rounded-br-[120px] "
        ></video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 rounded-bl-[120px] rounded-br-[120px]"></div>
      </div>

      {/* detail section  */}

      <div className="w-full md:w-[60%] mx-auto mt-10 p-4">
        <div className="p-3 relative">
          <h3 className="text-center font-medium text-4xl">About Print247</h3>
          <h1 className="text-3xl md:text-7xl text-center font-sans mt-4 font-semibold text-blue-700">
            Helping small business grow big
          </h1>
          <p className="mt-7  font-semibold leading-7">
            Welcome to Print247.us, where innovation meets precision in the
            world of printing and packaging. With a passion for excellence and a
            commitment to delivering top-notch services, Print247.us stands as
            your trusted partner in the realm of bespoke printing solutions. Our
            journey is rooted in a dedication to quality craftsmanship and
            cutting-edge technology, ensuring that each project we undertake
            reflects the highest standards of precision and creativity.
          </p>

          <p className="mt-4 font-semibold leading-7">
            Print247.us was established in 2020, in this short period
            print247.us swiftly captured customer attention with its diverse
            array of customizable business marketing products. Whether providing
            assistance to those in need or delivering a straightforward
            experience for those with clear preferences. We are bringing your
            visions to life with a team of experienced professionals who combine
            industry expertise with a customer-centric approach, working closely
            with you to understand your unique requirements and deliver tailored
            solutions. Whether you're looking for eye-catching packaging
            designs, customized promotional materials, or high-quality printed
            collateral, Print247.us is your go-to destination for turning ideas
            into tangible, impactful realities.
          </p>
        </div>
      </div>
      {/* detail values section  */}
      <Values />

      {/* building image  */}
      <div className="w-[80%]  mx-auto mt-20 overflow-hidden ">
        <img
          src={aboutimage}
          alt=""
          className="object-center  object-contain "
        />
      </div>
      <div className=" px-5 md:w-[70%] mx-auto mt-9 z-[-5]">
        <h1 className="text-5xl md:text-9xl text-center font-semibold ">
        Customers  <span className="text-blue-500 ">247</span>
        </h1>
        <p className="w-full text-center mt-4 font-medium">
        We have worked with clients in a variety of industries for 5+ years. We can provide you with proven ideas that go beyond the norm in your industry and help you expand into new markets and reach new audiences.
        </p>
      </div>

      
      <Brands />
      <TrandSet/>
    </div>
  );
};

export default AboutUs;
