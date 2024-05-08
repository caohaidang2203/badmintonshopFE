import React, { useRef, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const categoriesData = [
  {
    id: 1,
    title: "Vợt cầu lông",
  },
  {
    id: 2,
    title: "Quần áo cầu lông",
  },
  {
    id: 3,
    title: "Giày cầu lông",
  },
  {
    id: 4,
    title: "Phụ kiện cầu lông",
  },
];
const CreateProduct = () => {
  const [images, setImages] = useState([]);
  const handleImageChange = (e) => {
    e.preventDefault();

    let files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };
  //   color
  const [query, setQuery] = useState("");
  //   size
  const [sizeQuery, setSizeQuery] = useState("");
  const [colorSelected, setColorSelected] = useState([]);
  const [sizeSelected, setSizeSelected] = useState([]);
  const colorInputRef = useRef(null);
  const sizeInputRef = useRef(null);

  const isDisable =
    !query?.trim() ||
    colorSelected.filter(
      (item) =>
        item?.toLocaleLowerCase()?.trim() === query?.toLocaleLowerCase()?.trim()
    )?.length;

  const isDisableSize =
    !sizeQuery?.trim() ||
    sizeSelected.filter(
      (item) =>
        item?.toLocaleLowerCase()?.trim() ===
        sizeQuery?.toLocaleLowerCase()?.trim()
    )?.length;

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-[90%] 800px:w-[50%] bg-white  shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
      <h5 className="text-[30px] font-Poppins text-center">Create Product</h5>
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
            placeholder="Enter your product name..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            cols="30"
            required
            rows="8"
            type="text"
            name="description"
            className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter your product description..."
          ></textarea>
        </div>
        <br />
        <div>
          <label className="pb-2">
            Category <span className="text-red-500">*</span>
          </label>
          <select className="w-full mt-2 border h-[35px] rounded-[5px]">
            <option value="Choose a category">Choose a category</option>
            {categoriesData &&
              categoriesData.map((i) => (
                <option value={i.title} key={i.title}>
                  {i.title}
                </option>
              ))}
          </select>
        </div>
        <br />
        <div>
          <label className="pb-2">Tags</label>
          <input
            type="text"
            name="tags"
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter your product tags..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">Original Price</label>
          <input
            type="number"
            name="price"
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter your product price..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Price (With Discount) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="price"
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter your product price with discount..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Product Stock <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="stock"
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter your product stock..."
          />
        </div>
        <br />
        {/* color */}
        <div>
          <label className="pb-2">
            Color <span className="text-red-500">*</span>
          </label>
          <div className="relative w-full h-full text-sm">
            {colorSelected?.length ? (
              <div className="bg-white w-full relative text-xs flex flex-wrap gap-1 p-2">
                {colorSelected.map((tag) => {
                  return (
                    <div
                      key={tag}
                      className="rounded-full w-fit py-1.5 px-3 border border-gray-400 bg-gray-50 text-gray-500
                  flex items-center gap-2"
                    >
                      {tag}
                      <div
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() =>
                          setColorSelected(
                            colorSelected.filter((i) => i !== tag)
                          )
                        }
                      >
                        <IoMdClose className="cursor-pointer" />
                      </div>
                    </div>
                  );
                })}
                <div className="w-full text-right">
                  <span
                    className="text-[#cf4545] cursor-pointer"
                    onClick={() => {
                      setColorSelected([]);
                      colorInputRef.current?.focus();
                    }}
                  >
                    Clear all
                  </span>
                </div>
              </div>
            ) : null}
            <div className="card flex items-center justify-between p-3 pt-1 w-full gap-2.5">
              <input
                ref={colorInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value.trimStart())}
                placeholder=" Enter product color..."
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <button
                className="text-[16px] min-w-[50px] font-[600] disabled:text-gray-300 text-rose-500 disabled:cursor-not-allowed"
                disabled={isDisable}
                onClick={() => {
                  if (isDisable) {
                    return;
                  }
                  setColorSelected((prev) => [...prev, query]);
                  setQuery("");
                  colorInputRef.current?.focus();
                }}
              >
                + Add
              </button>
            </div>
          </div>
        </div>
        <br />
        {/* size */}
        <div>
          <label className="pb-2">
            Size <span className="text-red-500">*</span>
          </label>
          <div className="relative w-full h-full text-sm">
            {sizeSelected?.length ? (
              <div className="bg-white w-full relative text-xs flex flex-wrap gap-1 p-2">
                {sizeSelected.map((tag) => {
                  return (
                    <div
                      key={tag}
                      className="rounded-full w-fit py-1.5 px-3 border border-gray-400 bg-gray-50 text-gray-500
                  flex items-center gap-2"
                    >
                      {tag}
                      <div
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() =>
                          setSizeSelected(sizeSelected.filter((i) => i !== tag))
                        }
                      >
                        <IoMdClose className="cursor-pointer" />
                      </div>
                    </div>
                  );
                })}
                <div className="w-full text-right">
                  <span
                    className="text-[#cf4545] cursor-pointer"
                    onClick={() => {
                      setSizeSelected([]);
                      sizeInputRef.current?.focus();
                    }}
                  >
                    Clear all
                  </span>
                </div>
              </div>
            ) : null}
            <div className="card flex items-center justify-between p-3 pt-1 w-full gap-2.5">
              <input
                ref={sizeInputRef}
                type="text"
                value={sizeQuery}
                onChange={(e) => setSizeQuery(e.target.value.trimStart())}
                placeholder=" Enter product sizes..."
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <button
                className="text-[16px] min-w-[50px] font-[600] disabled:text-gray-300 text-rose-500 disabled:cursor-not-allowed"
                disabled={isDisableSize}
                onClick={() => {
                  if (isDisableSize) {
                    return;
                  }
                  setSizeSelected((prev) => [...prev, sizeQuery]);
                  setSizeQuery("");
                  sizeInputRef.current?.focus();
                }}
              >
                + Add
              </button>
            </div>
          </div>
        </div>
        <br />
        <div>
          <label className="pb-2">
            Upload Images <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            name=""
            id="upload"
            className="hidden"
            multiple
            onChange={handleImageChange}
          />
          <div className="w-full flex items-center flex-wrap">
            <label htmlFor="upload">
              <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
            </label>
            {images &&
              images.map((i) => (
                <img
                  src={URL.createObjectURL(i)}
                  key={i}
                  alt=""
                  className="h-[120px] w-[120px] object-cover m-2"
                />
              ))}
          </div>
          <br />
          <br />
          <div>
            <input
              type="submit"
              value="Create"
              className="mt-2 cursor-pointer appearance-none text-center block w-full px-3 h-[35px] border border-[#f66315] rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm hover:bg-[#fff] bg-[#F66315] hover:text-[#000] text-[#fff] duration-300"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
