import React, { useState } from "react";
import { BsFillBagFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const data = [1, 2, 3];

const OrderDetail = () => {
  const [status, setStatus] = useState("");

  return (
    <div className={`py-4 min-h-screen w-11/12 mx-auto`}>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <BsFillBagFill size={30} className="text-[#f66315]" />
          <h1 className="pl-2 text-[25px]">Order Details</h1>
        </div>
        <Link to="/admin/orders">
          <div className="w-[140px] my-3 flex items-center justify-center duration-300 cursor-pointer border border-solid border-[#f66315] bg-[#f66315] rounded-[4px] text-[#fff] font-[600] h-[45px] text-[18px] hover:bg-[#fff] hover:text-[#f66315]">
            Order List
          </div>
        </Link>
      </div>

      <div className="w-full flex items-center justify-between pt-2">
        <h5 className="text-[#00000084]">
          Order ID: <span>1121121</span>
        </h5>
        <h5 className="text-[#00000084]">
          Placed on: <span>12/11/2023</span>
        </h5>
      </div>

      {/* order items */}
      <br />
      <br />
      {data &&
        data.map((item, index) => (
          <div className="w-full flex items-start mb-5">
            <img
              src="https://cdn.shopvnb.com//uploads/gallery/ao-cau-long-yonex-nu-den-ma-836_1703549899.webp"
              alt=""
              className="w-[80x] h-[80px]"
            />
            <div className="w-full">
              <h5 className="pl-3 text-[20px]">Vợt cầu lông 222</h5>
              <h5 className="pl-3 text-[20px] text-[#00000091]">US$1111</h5>
            </div>
          </div>
        ))}

      <div className="border-t w-full text-right">
        <h5 className="pt-3 text-[18px]">
          Total Price: <strong>US$333333</strong>
        </h5>
      </div>
      <br />
      <div className="w-full 800px:flex items-center">
        <div className="w-full 800px:w-[60%]">
          <h4 className="pt-3 text-[20px] font-[600]">Shipping Address:</h4>
          <h4 className="pt-3 text-[20px]">91 Ngõ 14 Mễ Trì Hạ</h4>
          <h4 className=" text-[20px]">Việt Nam</h4>
          <h4 className=" text-[20px]">Hà Nội</h4>
          <h4 className=" text-[20px]">0355544630</h4>
        </div>
        <div className="w-full 800px:w-[40%]">
          <h4 className="pt-3 text-[20px]">Payment Info:</h4>
          <h4>Status: Not paid</h4>
        </div>
      </div>
      <br />
      <br />
      <h4 className="pt-3 text-[20px] font-[600]">Order Status:</h4>
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="w-[200px] mt-2 border h-[35px] rounded-[5px]"
      >
        {[
          "Processing",
          "Transferred to delivery partner",
          "Shipping",
          "Received",
          "On the way",
          "Delivered",
        ].map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>

      <div
        className={`w-[140px] my-3 flex items-center justify-center border border-solid border-[#f66315]  cursor-pointer mt-5 bg-[#f66315] rounded-[4px] text-[#fff] hover:bg-[#fff] hover:text-[#f66315] duration-300 font-[600] h-[45px] text-[18px]`}
      >
        Update Status
      </div>
    </div>
  );
};

export default OrderDetail;
