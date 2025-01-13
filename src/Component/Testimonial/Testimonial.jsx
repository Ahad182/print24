import log1 from "../../assets/images/testimonials/testi_new1.webp";
import log2 from "../../assets/images/testimonials/testi_new2.webp";
import log3 from "../../assets/images/testimonials/testi_new3.webp";
import log4 from "../../assets/images/testimonials/testi_new4.webp";
import log5 from "../../assets/images/testimonials/testi_new5.webp";
import star from "../../assets/images/testimonials/testimonial_star.png";
import clock from "../../assets/images/testimonials/testimonial_verified.png";
import testimonialData from "../../Data/Testimonial";
import Marquee from "react-fast-marquee";
const Testimonial = () => {
  
  return (
    <div className="w-full mt-10 md:mt-24  ">
      <div className="w-[90%]  mx-auto ">
        <h1 className="text-center font-bold text-2xl md:text-5xl  md:leading-[60px] mb-5">
          What others are saying <br />
          <span className="text-blue-500"> About Print247</span>
        </h1>
      </div>

      <div className="marque-container w-full mt-16">
        <Marquee speed={50} gradient={false}  pauseOnClick >
          <div className="flex items-center ">
            {testimonialData.map((item, index) => {
              return (
                <div key={index}  className=" w-[300px] md:w-[380px] ml-6 marque-card  py-6 px-8  border border-black rounded-3xl outline-none">
                  <div className="">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="flex items-center gap-5 text-gray-700 mt-6">
                    <h2>{item.date} | </h2>
                    <p className="flex items-center gap-3">
                      <img src={clock} alt="" className="w-[20px] h-5" />{" "}
                      Verified Buyer
                    </p>
                  </div>
                  <img src={star} alt="Rating.." className="mt-3" />
                  <div className=" mt-8 ">
                    <p className="text-justify mt-3  text-wrap">
                      This is my second time working with you people. You’ve
                      flabbergasted me with the passion of your craft. Highly
                      recommended to anyone looking for effective packaging
                      products.
                    </p>
                  </div>
                  <div className="flex flex-col mt-10">
                    <h1 className="text-xl font-semibold">{item.name}</h1>
                    <p>{item.rank}</p>
                  </div>
                </div>
              );
            })}

            {/* <div className="marque-card">
                heading 2
            </div> */}
          </div>
        </Marquee>

        <Marquee speed={30} gradient={false} direction="right" className="second-marque">
                <h1 className=" capitalize font-bold text-center text-5xl mt-8 md:text-[100px] text-[#1eacef]">Lets See Your product And Say "WOW"</h1>
        </Marquee>
      </div>
    </div>
  );
};

export default Testimonial;
