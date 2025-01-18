import React, { useState,useEffect } from "react";
import MyButton from "../Component/Hero/Button";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import companyLogo from "../assets/images/logo.png"
import phoneIcone from "../assets/images/phoneicon.png"
const Header = () => {
  const location = useLocation()
  const [SubMenu, SetSubMenu] = useState(false);
  const [toggle, SetToggle] = useState(false);
  const [searchPage, SetSearchPage] = useState(false);
  const [scrollPosition,SetScrollPosition] = useState(0)

  const handleScroll = () => {
    SetScrollPosition(window.scrollY); // Note: Ensure `SetScrollPosition` is called
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);
  
  return (
    <>
      <header className={`w-full  overflow-x-hidden  absolute top-0 left-0   border-b-[1px] border-white ${scrollPosition < 10 ?`${location.pathname==="/contact/" || location.pathname==="/shopping-policy/" || location.pathname==="/term-and-condition/" || location.pathname==="/return-policy/" || location.pathname==="/privacy-policy/" || location.pathname==="/faq/" ? "bg-slate-800":"bg-transparent"}`:"bg-[#885f34]"}   transition-colors duration-1000 ease-in-out z-[100]`}>
        <nav className=" mt-4 md:pt-4 px-4 md:px-20 text-white font-serif font-bold">

          {/* top header  */}

          <div className="top-header pb-5 flex items-center justify-between">
            <div className="text-2xl lg:hidden" onClick={()=>SetToggle(!toggle)}>
              <GiHamburgerMenu />
            </div>
            <div className="logo ">
              <NavLink to="/"><img
                src={companyLogo}
                alt=""
                className="max-w-[140px] relative z-[200]"
              /></NavLink>
              
            </div>
            <div className="searchbar hidden md:block relative md:w-[400px] lg:w-[500px] h-full  border-2 border-white rounded-full">
              <div className="searchbox w-full ">
                <form action="" className="flex items-center">
                  <input
                    type="search"
                    name="search"
                    placeholder="Search.."
                    className="w-[90%]  p-2 pl-8 placeholder:text-white placeholder:text-xl bg-transparent focus:outline-none  border-none "
                  />

                  <div className=" py-2 px-2    mr-4">
                    <button type="submit">
                      <FiSearch className="text-3xl" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="call-button mr-4  hidden lg:block">
              <MyButton
                title="Let's Talk"
                bgColor="bg-white"
                icon={
                  <img
                    src={phoneIcone}
                    alt=""
                    className="w-7 object-cover"
                  />
                }
              />
            </div>
            <div className="text-2xl mr-5 md:hidden" onClick={()=>SetSearchPage(!searchPage)}>
              <FiSearch />
            </div>
          </div>
          {/* top header end  */}
          
         {/* main header start  */}

              <div className="main-header w-full  font-semibold mt-3 text-gray-200 hidden lg:block
              ">
                <ul className="nav-links relative flex items-center justify-between gap-5 font-bold text-center">
                  <li className="max-w-[80px]   pb-2"><a href="">Christmas Boxes</a></li>
                  <li className="max-w-[80px]   pb-2"><a href="">Shop by Industry</a></li>
                  <li className="max-w-[80px]   pb-2"><a href="">All Products</a></li>
                  <li className="max-w-[80px]   pb-2"><a href="">Boxes & Packaging</a></li>
                  <li className="max-w-[80px]   pb-2"><a href="">Mylar Bags</a></li>
                  <li className="max-w-[80px]   pb-2"><a href="">Labels & Stickers</a></li>
                  <li className="max-w-[80px]   pb-2"><a href="">Signs & Banners</a></li>
                  <li className="max-w-[80px]   pb-2"><a href="">Business Cards</a></li>
                  <li className="max-w-[80px]   pb-2"><a href="">Print Products</a></li>
                  <li className="max-w-[80px]   pb-2"><a href="">Design & Logo</a></li>
                </ul>
              </div>

         {/* main header end  */}

        </nav>
      </header>

      {/* navbar for small screens */}

      <div className={`w-full h-screen overflow-y-auto bg-black py-9 px-4 text-white  fixed  top-0 left-0 ${toggle?"translate-x-0":" translate-x-[-100%]"} transition-transform duration-1000 ease-in-out z-[500]`}>
        <div className="container ">
          <div className="flex items-center justify-between">
            <NavLink to="/">
            <img
              src={companyLogo}
              alt=""
              className="w-[140px] "
            />
            </NavLink>
            
            <div className="p-2 border border-white cursor-pointer text-xl font-semibold" onClick={()=>SetToggle(!toggle)}>
              Close
            </div>
          </div>
          <div className="links-container mt-6 font-semibold text-[17px]">
            <ul className="flex flex-col gap-5 cursor-pointer">
              <li className="border-b-[1px] border-white pb-2">
                Cristmas Boxes
              </li>

              <li className="border-b-[1px] border-white ">
                <div
                  className="flex items-center justify-between"
                  onClick={() => SetSubMenu(!SubMenu)}
                >
                  Shop By Industry <span > {SubMenu?<FaAngleDown  />:<FaAngleRight />} </span>
                </div>
                <ul
                  className={`transition-all duration-1000 ease-in-out overflow-hidden ${
                    SubMenu
                      ? "opacity-100 flex flex-col gap-4"
                      : "max-h-0 opacity-0"
                  } mt-4 font-normal`}
                >
                  <li>Food Packaging</li>
                  <li>Pharmaceutical Packaging</li>
                  <li>Vape Packaging</li>
                  <li>Apparel and Fashion Packaging</li>
                  <li>Coffee and Tea Packaging</li>
                </ul>
              </li>
              <li className="flex flex-col gap-1"><div>Boxes & Packaging</div> <span className="font-thin text-[10px]">Durable Custom, Quality Packaging</span></li>
              <li className="flex flex-col gap-1"><div>Mylar Bags</div> <span className="font-thin text-[10px]">Airtight Durable, Versatile Protection</span></li>
              <li className="flex flex-col gap-1"><div>Labels & Stickers</div> <span className="font-thin text-[10px]">Custom Durable, Eye-Catching Labels</span></li>
              <li className="flex flex-col gap-1"><div>Signs & Banners</div> <span className="font-thin text-[10px]">Bold Custom, High-Impact Displays</span></li>
              <li className="flex flex-col gap-1"><div>Business Cards</div> <span className="font-thin text-[10px]">Professional, Custom, Eye-Catching Cards</span></li>
              <li className="flex flex-col gap-1"><div>Print Products</div> <span className="font-thin text-[10px]">Vibrant, High-Quality, Custom Prints</span></li>
              <li className="flex flex-col gap-1"><div>Design & Logo</div> <span className="font-thin text-[10px]">Creative, Brand-Focused, Designs</span></li>
            </ul>
          </div>

          <div className="address-container mt-5">
            <h3 className="my-3 text-2xl uppercase">Office:</h3>
            <div className="flex flex-col gap-4">
              <h2>10816 Fallstone Rd #500 Houston,
              TX 77099, USA</h2>

              <h2>+1 (346) 246-1639
              Support@print247.us</h2>
            </div>
          </div>
        </div>
      </div>

      {/* search page  */}

      <div className={`searchpage w-full h-full  absolute top-0 left-0 overflow-x-hidden ${searchPage?" flex justify-center":"hidden"}`} >
        <form action="" className="mt-52" onSubmit={()=>SetSearchPage(!searchPage)} >
          <input type="search" name="search" id="" placeholder="Search.." className="w-[200px] md:w-[400px] p-3 bg-gray-300 placeholder:text-black outline-none rounded-md 
          " />
        </form>
      </div>
    </>
  );
};

export default Header;
