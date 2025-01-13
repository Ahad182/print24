import React from "react";

const ShoppingPolicy = () => {
  return (
    <div className="w-full pt-20 md:pt-44">
      <div className="w-[90%] md:w-[70%] mx-auto  md:mt-20">
        <h1 className="text-3xl md:text-5xl text-center font-bold">
          Delivery and Shipping
        </h1>
        <div className="w-full bg-gray-300 h-[1px] mt-5"></div>
        <ul className="mt-9 flex flex-col gap-10 text-slate-700 font-bold text-xl list-disc list-inside md:list-outside text-justify">
          <li>Our Standard turnaround time is 12 to 15 business days.</li>
          <li>
            The Company will make every effort to meet the agreed-upon delivery
            date for completed orders.
          </li>
          <li>
            The Company shall not be held responsible for delays caused by
            circumstances beyond its control, including but not limited to
            natural disasters, weather conditions, public holidays, floods,
            fire, delays by shipping companies, global custom disputes, or
            accidents during deliveries.
          </li>
          <li>
            The risk of loss or damage to the packaging products shall pass to
            the Customer upon delivery.
          </li>
          <li>
            Our Delivery and Shipping Policy can be changed or modified with or
            without prior notice.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShoppingPolicy;
