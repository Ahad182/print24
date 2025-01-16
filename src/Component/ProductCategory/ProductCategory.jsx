import React from "react";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import boxandpackaging from "../../assets/images/products/boxandpackaging.webp"
import businesscards from "../../assets/images/products/businesscards.webp"
import designandlogo from "../../assets/images/products/designandlogo.webp"
import labelsandstickers from "../../assets/images/products/labelsandstickers.webp"
import  mylarbags from "../../assets/images/products/mylarbags.webp"
import  printproducts from  "../../assets/images/products/printproducts.webp"
import signandbanners from "../../assets/images/products/signandbanners.webp"
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./ProductCategory.css";

import { Navigation } from "swiper/modules";

const ProductCategory = () => {
  return (
    <div className="w-full  overflow-x-hidden  ">
      <div className="w-[80%] mx-auto mb-10">
        <h1 className="w-full mt-14 text-center text-2xl md:text-5xl font-bold text-gray-900">
          The Inspiring Custom Packaging Boxes!
        </h1>
        <p className="mt-6 font-semibold text-center text-xl text-gray-700">
          We believe in custom box packaging that becomes the first reference
          point for every retail product. Our motto is, ‘You start a business
          and leave the packaging to us.’ Our exclusive and on-site printing and
          packaging facilities make us a qualitative, quantitative, and
          quintessential packaging choice.
        </p>
      </div>
      <div className="px-10 md:px-20 w-full h-full">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          loop="true"
          className="mySwiper"
          spaceBetween={30}
          breakpoints={{
            // Adjust number of slides for different screen sizes
            320: {
              // For mobile devices
              slidesPerView: 1,
            },
            768: {
              // For medium screens (tablets)
              slidesPerView: 2,
            },
            1024: {
              // For larger screens (default)
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className="w-[350px] overflow-hidden rounded-3xl">
              <div className="overflow-hidden ">
                <img
                  src={boxandpackaging}
                  alt=""
                  className="hover:scale-110 transition-all duration-500 ease-in-out"
                />
              </div>

              <h1 className="text-black text-2xl text-center my-4 font-bold">
                Boxes & Packagings
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[350px] overflow-hidden rounded-3xl">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={businesscards}
                  alt=""
                  className="hover:scale-110 transition-all duration-500 ease-in-out"
                />
              </div>
              <h1 className="text-black text-2xl text-center my-4 font-bold">
                Business Cards
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[350px] overflow-hidden rounded-3xl">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={designandlogo}
                  alt=""
                  className="hover:scale-110 transition-all duration-500 ease-in-out"
                />
              </div>
              <h1 className="text-black text-2xl text-center my-4 font-bold">
                Logo Design
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[350px] overflow-hidden rounded-3xl">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={labelsandstickers}
                  alt=""
                  className="hover:scale-110 transition-all duration-500 ease-in-out"
                />
              </div>
              <h1 className="text-black text-2xl text-center my-4 font-bold">
                Lables & Stickers
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[350px] overflow-hidden rounded-3xl">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={mylarbags}
                  alt=""
                  className="hover:scale-110 transition-all duration-500 ease-in-out"
                />
              </div>
              <h1 className="text-black text-2xl text-center my-4 font-bold">
                Mylar Bags
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[350px] overflow-hidden rounded-3xl">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={printproducts}
                  alt=""
                  className="hover:scale-110 transition-all duration-500 ease-in-out"
                />
              </div>
              <h1 className="text-black text-2xl text-center my-4 font-bold">
                Print Products
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[350px] overflow-hidden rounded-3xl">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={signandbanners}
                  alt=""
                  className="hover:scale-110 transition-all duration-500 ease-in-out"
                />
              </div>
              <h1 className="text-black text-2xl text-center my-4 font-bold">
                Sign & Banners
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductCategory;
