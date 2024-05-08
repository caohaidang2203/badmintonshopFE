import React from "react";

const CreateBranch = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-[90%] bg-white  shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
      <h5 className="text-[30px] font-Poppins text-center">Create Branch</h5>
      <form onSubmit={handleSubmit}>
        <br />
        <div>
          <label className="pb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter branch's name..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Hotline <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="hotline"
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter branch's hotline..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Địa chỉ <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="address"
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter branch's address..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="email"
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter branch's email..."
          />
        </div>
        <br />
        <br />
        <div>
          <input
            type="submit"
            value="Create"
            className="mt-2 mx-auto w-[50%] cursor-pointer appearance-none text-center block px-3 h-[35px] border border-[#f66315] rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm hover:bg-[#fff] bg-[#F66315] hover:text-[#000] text-[#fff] duration-300"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateBranch;
