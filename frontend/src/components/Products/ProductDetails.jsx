import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { FaCartShopping, FaPaperPlane } from "react-icons/fa6";
import { FaCheck, FaTimes, FaRegHeart, FaMinus, FaPlus } from "react-icons/fa";
import productDecor from "../../images/pd_decor.webp";
import icon_hot from "../../images/icon-cate-hot.webp";
import icon_new from "../../images/icon-cate-new.webp";
import icon_tag from "../../images/icon-cate-tag.webp";
import ft_pay_icon from "../../images/ft-pay-icon.webp";
import step_icon from "../../images/step-icon.webp";
import cart_icon from "../../images/cart-icon.webp";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ProductDetails = () => {
  const [select, setSelect] = useState(0);
  const [active, setActive] = useState(1);
  const [rating, setRating] = useState(0); // State để lưu trữ số sao đánh giá

  const handleStarClick = (starIndex) => {
    // Khi click vào một sao, cập nhật giá trị rating thành index của sao + 1
    setRating(starIndex + 1);
  };
  const isStocking = true;
  const images = [
    "https://cdn.shopvnb.com//uploads/gallery/ao-cau-long-yonex-nu-den-ma-836_1703549899.webp",
    "https://cdn.shopvnb.com/uploads/gallery/vot-cau-long-lining-axforce-90-do-dragon-max-ma-jp-5_1697394984.webp",
    "https://cdn.shopvnb.com/uploads/gallery/vot-cau-long-lining-axforce-90-do-dragon-max-ma-jp-4_1697394989.webp",
  ];
  return (
    <div className="my-[100px] ">
      <div className="w-full max-w-[1230px] h-full mx-auto px-[15px]">
        <div className="flex mx-[-12px] flex-wrap">
          {/* left */}
          <div className="w-[41.6666667%] px-[12px] max-[850px]:w-full">
            <div>
              <div className="relative">
                <div className="mx-auto relative overflow-hidden z-1">
                  <div className="w-full relative max-[850px]:w-[65%] max-[600px]:w-full mx-auto cursor-pointer duration-300 ease-in-out">
                    <img
                      className="w-full h-full object-cover max-w-full rounded-[5px]"
                      src={`${images[select]}`}
                      alt=""
                    />
                    <div className="flex absolute min-w-[48px] top-[20px] left-[10px] z-1 items-center justify-center">
                      <div className="absolute w-full min-h-[48px] top-[-10px] -z-1 left-[0px] bg-no-repeat bg-contain bg-sale"></div>
                      <div className="font-[700] text-[#fff] mt-[2px]">
                        -12%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[12px]">
                <div className="w-full flex justify-center">
                  {images &&
                    images.map((i, index) => (
                      <div
                        className={`w-[100px] mr-[10px] border border-solid cursor-pointer bg-[#fff] h-full ${
                          select === index
                            ? "border-[#f66315]"
                            : "border-[#ebebeb]"
                        }`}
                      >
                        <div className={`pb-[100%] h-0 relative`}>
                          <img
                            src={`${i}`}
                            alt=""
                            height="80"
                            width="80"
                            onClick={() => setSelect(index)}
                            className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] max-w-full max-h-full w-auto h-auto"
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            {/* tình trạng */}
            <div className="mt-[20px]">
              <div className="flex justify-between gap-2">
                <div className="mb-0"></div>
                {isStocking ? (
                  <div className="bg-[#dcf3d8] py-1 px-4 min-w-[120px] flex items-center justify-center gap-[6px] rounded-[36px] text-[#1d9d06] text-[14px]">
                    <FaCheck />
                    <div className="font-[500]">Còn hàng</div>
                  </div>
                ) : (
                  <div className="bg-[#feefe8] py-1 px-4 min-w-[120px] flex items-center justify-center gap-[6px] rounded-[36px] text-[#f63e15] text-[14px]">
                    <FaTimes />
                    <div className="font-[500]">Hết hàng</div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-[58.3333333%] px-[12px] max-[850px]:w-full">
            <div>
              <div className="flex gap-2 items-center justify-between">
                <h1 className="max-[1200px]:text-[35px] text-[40px] font-[700] text-[#031230]">
                  Vợt cầu lông Yonex Astrox 77 Pro | Bản nâng cấp mới nhất
                </h1>
              </div>
              <div className="flex gap-[28px]">
                <div className="flex items-center gap-1">
                  <span className="font-[700] text-[#f6af15]">4</span>
                  <div className="flex">
                    <img
                      src="https://fbshop.vn/template/assets/images/Star.svg"
                      alt=""
                      className="w-[18px] h-[18px] max-w-full"
                    />
                    <img
                      src="https://fbshop.vn/template/assets/images/Star.svg"
                      alt=""
                      className="w-[18px] h-[18px] max-w-full"
                    />
                    <img
                      src="https://fbshop.vn/template/assets/images/Star.svg"
                      alt=""
                      className="w-[18px] h-[18px] max-w-full"
                    />
                    <img
                      src="https://fbshop.vn/template/assets/images/Star.svg"
                      alt=""
                      className="w-[18px] h-[18px] max-w-full"
                    />
                    <img
                      src="https://fbshop.vn/template/assets/images/Star.svg"
                      alt=""
                      className="w-[18px] h-[18px] max-w-full"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-1 relative">
                  <div className="absolute h-4 w-[1px] bg-[#000] top-[50%] left-[-1rem] translate-x-[-50%] translate-y-[-50%]"></div>
                  <span className="font-[700]">3</span>
                  <span className="text-[14px] mt-[1px]"> đánh giá</span>
                </div>
                <div className="flex items-center gap-1 relative">
                  <div className="absolute h-4 w-[1px] bg-[#000] top-[50%] left-[-1rem] translate-x-[-50%] translate-y-[-50%]"></div>
                  <span className="font-[700]">492</span>
                  <span className="text-[14px] mt-[1px]"> lượt mua</span>
                </div>
                <div className="w-[30px] h-[30px] relative rounded-[50%] flex items-center justify-center text-[#f66315] bg-[#feefe8] text-[13px] duration-300 cursor-pointer hover:text-white hover:bg-[#f66315]">
                  <FaRegHeart />
                </div>
              </div>
              <div className="mt-[10px]">
                <div className="flex gap-[20px] items-center">
                  <div className="leading-[1] flex items-center gap-[10px] p-1">
                    <span className="max-[1200px]:text-[29px] font-[700] text-[#f66315] text-[34px]">
                      3.630.000đ
                    </span>
                    <span className="text-[#7f8080] line-through">
                      4.000.000đ
                    </span>
                  </div>
                </div>
                <div className="mt-0">
                  <span className="inline-block text-[#f66315]">
                    Chọn thuộc tính:
                  </span>
                  <div className="mt-[20px]">
                    <div className="flex items-center gap-3">
                      <span className="min-w-[80px] font-[500]">Màu sắc</span>
                      <div className="flex mx-[-8px] flex-wrap">
                        <div className="px-[5px]">
                          <div className="min-w-[32px] h-[32px] rounded-[6px] border-[2px] border-solid border-[#fbc1a1] flex items-center justify-center font-[500] duration-300 ease-in-out text-[#444545] cursor-pointer flex-col gap-[6px]">
                            <span className="p-[7px] text-[#031230] text-[14px] duration-300 ease-in-out">
                              Đen
                            </span>
                          </div>
                        </div>
                        <div className="px-[5px]">
                          <div className="min-w-[32px] h-[32px] rounded-[6px] border-[2px] border-solid border-[#fbc1a1] flex items-center justify-center font-[500] duration-300 ease-in-out text-[#444545] cursor-pointer flex-col gap-[6px]">
                            <span className="p-[7px] text-[#031230] text-[14px] duration-300 ease-in-out">
                              Trắng
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Nếu mà giày có kích cớ / áo*/}
                  <div className="mt-[20px]">
                    <div className="flex items-center gap-3">
                      <span className="min-w-[80px] font-[500]">Size giày</span>
                      <div className="flex mx-[-8px] flex-wrap">
                        <div className="px-[5px]">
                          <div className="min-w-[32px] h-[32px] rounded-[6px] border-[2px] border-solid border-[#fbc1a1] flex items-center justify-center font-[500] duration-300 ease-in-out text-[#444545] cursor-pointer flex-col gap-[6px]">
                            <span className="p-[7px] text-[#031230] text-[14px] duration-300 ease-in-out">
                              37
                            </span>
                          </div>
                        </div>
                        <div className="px-[5px]">
                          <div className="min-w-[32px] h-[32px] rounded-[6px] border-[2px] border-solid border-[#fbc1a1] flex items-center justify-center font-[500] duration-300 ease-in-out text-[#444545] cursor-pointer flex-col gap-[6px]">
                            <span className="p-[7px] text-[#031230] text-[14px] duration-300 ease-in-out">
                              38
                            </span>
                          </div>
                        </div>
                        <div className="px-[5px]">
                          <div className="min-w-[32px] h-[32px] rounded-[6px] border-[2px] border-solid border-[#fbc1a1] flex items-center justify-center font-[500] duration-300 ease-in-out text-[#444545] cursor-pointer flex-col gap-[6px]">
                            <span className="p-[7px] text-[#031230] text-[14px] duration-300 ease-in-out">
                              39
                            </span>
                          </div>
                        </div>
                        <div className="px-[5px]">
                          <div className="min-w-[32px] h-[32px] rounded-[6px] border-[2px] border-solid border-[#fbc1a1] flex items-center justify-center font-[500] duration-300 ease-in-out text-[#444545] cursor-pointer flex-col gap-[6px]">
                            <span className="p-[7px] text-[#031230] text-[14px] duration-300 ease-in-out">
                              40
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-[20px] flex items-center gap-[30px]">
                  <div className="flex items-center gap-[10px]">
                    <span className="min-w-[80px] font-[500]">Số lượng:</span>
                    <div className="flex mt-auto">
                      <div className="flex gap-[20px] p-[6px] rounded-[30px] border border-solid border-[#eee]">
                        <div className="w-6 h-6 flex items-center justify-center cursor-pointer text-[#444545]">
                          <FaMinus className="text-[14px]" />
                        </div>
                        <p className="text-[14px] text-[#031230]">01</p>
                        <div className="w-6 h-6 flex items-center justify-center cursor-pointer text-[#444545]">
                          <FaPlus className="text-[14px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-[20px] pr-[20px] flex gap-[10px]">
                  <div className="bg-[#fff] hover:bg-[#f66315] text-[#031230]  hover:text-[white] border border-solid border-[#f66315] min-w-[180px] cursor-pointer relative overflow-hidden transition-all my-0  rounded-[40px] flex items-center justify-center">
                    <span className="flex items-center justify-center py-[10px] px-[20px]">
                      <span className="leading-[1.2] text-[16px] font-[700] ">
                        Thêm vào giỏ
                      </span>
                    </span>
                  </div>

                  <div className="hover:bg-[#fff] bg-[#f66315] hover:text-[#031230] text-white border border-solid border-[#f66315] min-w-[180px] cursor-pointer relative overflow-hidden transition-all my-0 rounded-[40px] flex items-center justify-center">
                    <span className="flex items-center justify-center py-[10px] px-[20px] gap-[6px]">
                      <FaCartShopping className="text-[16px]" />
                      <span className="leading-[1.2] text-[16px] font-[700] ">
                        Mua ngay
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[15px]">
              <div className="relative">
                <div className="absolute w-[15%] bottom-0 right-0">
                  <img
                    className="block w-full max-w-full h-auto"
                    src={productDecor}
                    alt=""
                  />
                </div>
                <span className="inline-block py-1 px-5 text-[#f66315] font-[500] text-[14px] rounded-t-[12px] border border-solid border-[#f66315] border-b-0 relative z-1 bg-[#fff] translate-y-[1px]">
                  Ưu đãi
                </span>
                <div className="flex flex-col gap-[10px] p-5 rounded-b-[12px] rounded-r-[12px] border border-solid border-[#f66315] relative overflow-hidden min-h-[100px]">
                  <div className="absolute w-full pt-[55%] bottom-0 right-0 z-0 bg-6 translate-x-[42%] rotate-[328deg]"></div>
                  <div className="flex items-center gap-[10px]">
                    <span className="flex w-[14px] h-[14px] items-center justify-center shrink-0">
                      <img
                        src={icon_hot}
                        alt=""
                        className="max-w-full h-auto"
                      />
                    </span>
                    <span className="text-[#444545] text-[16px] font-[400]">
                      Tặng cước và căng cước vợt cầu lông miễn phí
                    </span>
                  </div>

                  <div className="flex items-center gap-[10px]">
                    <span className="flex w-[14px] h-[14px] items-center justify-center shrink-0">
                      <img
                        src={icon_hot}
                        alt=""
                        className="max-w-full h-auto"
                      />
                    </span>
                    <span className="text-[#444545] text-[16px] font-[400]">
                      Tặng bao nhung/bao đơn bảo vệ vợt cầu lông
                    </span>
                  </div>

                  <div className="flex items-center gap-[10px]">
                    <span className="flex w-[14px] h-[14px] items-center justify-center shrink-0">
                      <img
                        src={icon_hot}
                        alt=""
                        className="max-w-full h-auto"
                      />
                    </span>
                    <span className="text-[#444545] text-[16px] font-[400]">
                      Tặng quấn cán vợt cầu lông khi mua vợt
                    </span>
                  </div>

                  <div className="flex items-center gap-[10px]">
                    <span className="flex w-[14px] h-[14px] items-center justify-center shrink-0">
                      <img
                        src={step_icon}
                        alt=""
                        className="max-w-full h-auto"
                      />
                    </span>
                    <span className="text-[#444545] text-[16px] font-[400]">
                      Freeship khi chuyển khoản trước với đơn hàng trên 1 triệu
                    </span>
                  </div>

                  <div className="flex items-center gap-[10px]">
                    <span className="flex w-[14px] h-[14px] items-center justify-center shrink-0">
                      <img
                        src={ft_pay_icon}
                        alt=""
                        className="max-w-full h-auto"
                      />
                    </span>
                    <span className="text-[#444545] text-[16px] font-[400]">
                      Yên tâm với quy trình nhận hàng kiểm tra trước thanh toán
                      sau
                    </span>
                  </div>

                  <div className="flex items-center gap-[10px]">
                    <span className="flex w-[14px] h-[14px] items-center justify-center shrink-0">
                      <img
                        src={icon_new}
                        alt=""
                        className="max-w-full h-auto"
                      />
                    </span>
                    <span className="text-[#444545] text-[16px] font-[400]">
                      Bảo hành 3 tháng lỗi 1 đổi 1 lỗi nhà sản xuất
                    </span>
                  </div>

                  <div className="flex items-center gap-[10px]">
                    <span className="flex w-[14px] h-[14px] items-center justify-center shrink-0">
                      <img
                        src={icon_tag}
                        alt=""
                        className="max-w-full h-auto"
                      />
                    </span>
                    <span className="text-[#444545] text-[16px] font-[400]">
                      Cơ hội nhân voucher cho các đơn hàng tiếp theo
                    </span>
                  </div>

                  <div className="flex items-center gap-[10px]">
                    <span className="flex w-[14px] h-[14px] items-center justify-center shrink-0">
                      <img
                        src={cart_icon}
                        alt=""
                        className="max-w-full h-auto"
                      />
                    </span>
                    <span className="text-[#444545] text-[16px] font-[400]">
                      Vô vàn dịch vụ hỗ trơ miễn phí khác
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* mô tả */}
        <div className="mt-[100px]">
          <div className="flex flex-nowrap gap-[30px] ">
            <div
              onClick={() => setActive(1)}
              className=" relative p-[20px] pt-[10px] duration-300 ease-in-out cursor-pointer rounded-t-[12px] text-[24px] font-[700]"
            >
              {active === 1 ? (
                <div>
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#f66315]"></div>
                  <span className="text-[#f66315]">Mô tả sản phẩm</span>
                </div>
              ) : (
                <span className="text-[#031230]">Mô tả sản phẩm</span>
              )}
            </div>
            <div
              onClick={() => setActive(2)}
              className=" relative p-[20px] pt-[10px] duration-300 ease-in-out cursor-pointer rounded-t-[12px] text-[24px] font-[700]"
            >
              {active === 2 ? (
                <div>
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#f66315]"></div>
                  <span className="text-[#f66315]">Thông số kỹ thuật</span>
                </div>
              ) : (
                <span className="text-[#031230]">Thông số kỹ thuật</span>
              )}
            </div>
            <div
              onClick={() => setActive(3)}
              className="relative p-[20px] pt-[10px] duration-300 ease-in-out cursor-pointer rounded-t-[12px] text-[24px] font-[700]"
            >
              {active === 3 ? (
                <div>
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#f66315]"></div>
                  <span className="text-[#f66315] flex">
                    Đánh giá 4{" "}
                    <img
                      src="https://fbshop.vn/template/assets/images/Star.svg"
                      alt=""
                      className="w-[18px] h-[18px] max-w-full mt-[8px]"
                    />
                  </span>
                </div>
              ) : (
                <span className="text-[#031230] flex">
                  Đánh giá 4{" "}
                  <img
                    src="https://fbshop.vn/template/assets/images/Star.svg"
                    alt=""
                    className="w-[18px] h-[18px] max-w-full mt-[8px]"
                  />
                </span>
              )}
            </div>
          </div>
          {active === 1 ? (
            <div className="p-[30px] rounded-b-[12px] bg-[#feefe8] relative z-1">
              <div className="px-[15px] w-full text-[#000]">
                <h2 className="text-[30px] my-[10px] font-[700]">
                  Vợt Yonex Astrox 99 Pro 2021 – Bản nâng cấp mới nhất cho dòng
                  Yonex thiên công
                </h2>
                <p className="font-[400] text-[16px]">
                  Có thể nói ở phiên bản 99 Pro cải tiến này khá giống với 88D
                  Pro về công nghệ dũa thân vợt mỏng nhưng vẫn giữ được những bộ
                  khung cũng như họa tiết đặc trưng của phiên bản cũ. Vợt cầu
                  lông Yonex Astrox 99 Pro nổi bật với phối màu sự mạnh mẽ,
                  quyết liệt trên sân đấu và hiện đang được tay vợt đơn nam trẻ
                  top 1 của Malaysia Lee Zii Jia sử dụng thi đấu rất thành công
                  trên đấu trường Quốc Tế. Yonex Astrox 99 Pro là cây vợt tấn
                  công nặng đầu, có trọng lượng vung nặng nhất trong dòng ASTROX
                  được đi kèm với khả năng giữ cầu trên mặt vợt để tăng cường
                  khả năng phòng thủ.
                </p>
              </div>
            </div>
          ) : null}
          {active === 2 ? (
            <div className="p-[30px] rounded-b-[12px] bg-[#feefe8] relative z-1">
              <div className="px-[15px] w-full text-[#000]">
                <h2 className="text-[30px] my-[10px] font-[700]">
                  Vợt Yonex Astrox 99 Pro 2021 – Bản nâng cấp mới nhất cho dòng
                  Yonex thiên công
                </h2>
                <table className="w-full mb-[10px] border-collapse border-spacing-0">
                  <tbody>
                    <tr>
                      <td
                        width="30%"
                        className="text-left p-[15px] border border-solid border-[#444545]"
                      >
                        <b>Trình độ chơi:</b>
                      </td>
                      <td className="text-left p-[15px] border border-solid border-[#444545]">
                        Trung bình
                      </td>
                    </tr>
                    <tr>
                      <td className="text-left p-[15px] border border-solid border-[#444545]">
                        <b>Độ cứng đũa:</b>
                      </td>
                      <td className="text-left p-[15px] border border-solid border-[#444545]">
                        Trung bình
                      </td>
                    </tr>
                    <tr>
                      <td className="text-left p-[15px] border border-solid border-[#444545]">
                        <b>Phong cách chơi:</b>
                      </td>
                      <td className="text-left p-[15px] border border-solid border-[#444545]">
                        Công thủ toàn diện
                      </td>
                    </tr>
                    <tr>
                      <td className="text-left p-[15px] border border-solid border-[#444545]">
                        <b>Nội dung chơi:</b>
                      </td>
                      <td className="text-left p-[15px] border border-solid border-[#444545]">
                        Cả đơn và đôi
                      </td>
                    </tr>
                    <tr>
                      <td className="text-left p-[15px] border border-solid border-[#444545]">
                        <b>Trọng lượng:</b>
                      </td>
                      <td className="text-left p-[15px] border border-solid border-[#444545]">
                        4U: 80-84g; 3U:85-89g
                      </td>
                    </tr>
                    <tr>
                      <td className="text-left p-[15px] border border-solid border-[#444545]">
                        <b>Điểm cân bằng:</b>
                      </td>
                      <td className="text-left p-[15px] border border-solid border-[#444545]">
                        Hơi nặng đầu
                      </td>
                    </tr>
                    <tr>
                      <td className="text-left p-[15px] border border-solid border-[#444545]">
                        <b>Chiều dài vợt:</b>
                      </td>
                      <td className="text-left p-[15px] border border-solid border-[#444545]">
                        675 mm
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : null}
          {active === 3 ? (
            <div className="p-[30px] rounded-b-[12px] bg-[#feefe8] relative z-1">
              <div className="mt-[24px]">
                <div>
                  <div className="flex justify-between items-center">
                    <div className="mb-[20px] flex items-center max-[800px]:flex-col">
                      <p className="text-[#f6af15] font-[700] text-[40px]">
                        5 <span className="text-[24px]">/5</span>
                      </p>
                      <div className="flex ml-4">
                        <img
                          src="https://fbshop.vn/template/assets/images/Star.svg"
                          alt=""
                          className="w-[24px] h-[24px] max-w-full"
                        />
                        <img
                          src="https://fbshop.vn/template/assets/images/Star.svg"
                          alt=""
                          className="w-[24px] h-[24px] max-w-full"
                        />
                        <img
                          src="https://fbshop.vn/template/assets/images/Star.svg"
                          alt=""
                          className="w-[24px] h-[24px] max-w-full"
                        />
                        <img
                          src="https://fbshop.vn/template/assets/images/Star.svg"
                          alt=""
                          className="w-[24px] h-[24px] max-w-full"
                        />
                        <img
                          src="https://fbshop.vn/template/assets/images/Star.svg"
                          alt=""
                          className="w-[24px] h-[24px] max-w-full"
                        />
                      </div>
                    </div>
                    <div>
                      <span className="text-[16px]">
                        Bạn đã mua sản phẩm này?{" "}
                        <a
                          href="/danh-gia"
                          className="text-[#e10600] font-[700] no-underline"
                        >
                          Để lại đánh giá
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="relative mb-[50px]">
                    <ul className="list-none">
                      <li className="border-solid border-b-[1px] border-b-[#f6dacd] py-[20px] relative">
                        <div className="flex justify-start">
                          <div className="gap-[24px] flex justify-between">
                            <div className="w-[78px] h-[78px] shrink-0 flex justify-center items-center rounded-[50%] overflow-hidden border border-[#f66315] border-solid">
                              <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvb2NSSSdTcOp8UW1II7nYq1yd0IOc9AxPFA&usqp=CAU"
                                alt=""
                                className="block w-full object-cover max-w-full h-auto"
                              />
                            </div>
                            <div>
                              <div className="flex gap-[4px] items-center justify-start">
                                <p className="text-[16px] font-[700]">
                                  Tuan Anh
                                </p>
                                <div className="flex items-center mb-[3px]">
                                  <img
                                    src="https://fbshop.vn/template/assets/images/Star.svg"
                                    alt=""
                                    className="w-[24px] h-[24px] max-w-full"
                                  />
                                  <img
                                    src="https://fbshop.vn/template/assets/images/Star.svg"
                                    alt=""
                                    className="w-[24px] h-[24px] max-w-full"
                                  />
                                  <img
                                    src="https://fbshop.vn/template/assets/images/Star.svg"
                                    alt=""
                                    className="w-[24px] h-[24px] max-w-full"
                                  />
                                  <img
                                    src="https://fbshop.vn/template/assets/images/Star.svg"
                                    alt=""
                                    className="w-[24px] h-[24px] max-w-full"
                                  />
                                  <img
                                    src="https://fbshop.vn/template/assets/images/Star.svg"
                                    alt=""
                                    className="w-[24px] h-[24px] max-w-full"
                                  />
                                </div>
                              </div>
                              <div className="text-[#444545] my-[10px]">
                                <p>Đập cứ gọi là cháy sân</p>
                              </div>
                              <div className="mt-[10px]">
                                <span className="text-[#444545] font-[700] text-[14px]">
                                  06/03/2024
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="border-solid border-b-[1px] border-b-[#f6dacd] py-[20px] relative">
                        <div className="flex justify-start">
                          <div className="gap-[24px] flex justify-between">
                            <div className="w-[78px] h-[78px] shrink-0 flex justify-center items-center rounded-[50%] overflow-hidden border border-[#f66315] border-solid">
                              <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvb2NSSSdTcOp8UW1II7nYq1yd0IOc9AxPFA&usqp=CAU"
                                alt=""
                                className="block w-full object-cover max-w-full h-auto"
                              />
                            </div>
                            <div>
                              <div className="flex gap-[4px] items-center justify-start">
                                <p className="text-[16px] font-[700]">
                                  Tuan Anh
                                </p>
                                <div className="flex items-center mb-[3px]">
                                  <img
                                    src="https://fbshop.vn/template/assets/images/Star.svg"
                                    alt=""
                                    className="w-[24px] h-[24px] max-w-full"
                                  />
                                  <img
                                    src="https://fbshop.vn/template/assets/images/Star.svg"
                                    alt=""
                                    className="w-[24px] h-[24px] max-w-full"
                                  />
                                  <img
                                    src="https://fbshop.vn/template/assets/images/Star.svg"
                                    alt=""
                                    className="w-[24px] h-[24px] max-w-full"
                                  />
                                  <img
                                    src="https://fbshop.vn/template/assets/images/Star.svg"
                                    alt=""
                                    className="w-[24px] h-[24px] max-w-full"
                                  />
                                  <img
                                    src="https://fbshop.vn/template/assets/images/Star.svg"
                                    alt=""
                                    className="w-[24px] h-[24px] max-w-full"
                                  />
                                </div>
                              </div>
                              <div className="text-[#444545] my-[10px]">
                                <p>Đập cứ gọi là cháy sân</p>
                              </div>
                              <div className="mt-[10px]">
                                <span className="text-[#444545] font-[700] text-[14px]">
                                  06/03/2024
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="border-solid border-b-[1px] border-b-[#f6dacd] py-[20px] relative">
                        <div className="flex justify-start">
                          <div className="gap-[24px] flex justify-between">
                            <div className="w-[78px] h-[78px] shrink-0 flex justify-center items-center rounded-[50%] overflow-hidden border border-[#f66315] border-solid">
                              <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvb2NSSSdTcOp8UW1II7nYq1yd0IOc9AxPFA&usqp=CAU"
                                alt=""
                                className="block w-full object-cover max-w-full h-auto"
                              />
                            </div>
                            <div>
                              <div className="flex gap-[4px] items-center justify-start">
                                <p className="text-[16px] font-[700]">
                                  Tuan Anh
                                </p>
                                <div className="flex items-center mb-[3px]">
                                  <img
                                    src="https://fbshop.vn/template/assets/images/Star.svg"
                                    alt=""
                                    className="w-[24px] h-[24px] max-w-full"
                                  />
                                  <img
                                    src="https://fbshop.vn/template/assets/images/Star.svg"
                                    alt=""
                                    className="w-[24px] h-[24px] max-w-full"
                                  />
                                  <img
                                    src="https://fbshop.vn/template/assets/images/Star.svg"
                                    alt=""
                                    className="w-[24px] h-[24px] max-w-full"
                                  />
                                  <img
                                    src="https://fbshop.vn/template/assets/images/Star.svg"
                                    alt=""
                                    className="w-[24px] h-[24px] max-w-full"
                                  />
                                  <img
                                    src="https://fbshop.vn/template/assets/images/Star.svg"
                                    alt=""
                                    className="w-[24px] h-[24px] max-w-full"
                                  />
                                </div>
                              </div>
                              <div className="text-[#444545] my-[10px]">
                                <p>Đập cứ gọi là cháy sân</p>
                              </div>
                              <div className="mt-[10px]">
                                <span className="text-[#444545] font-[700] text-[14px]">
                                  06/03/2024
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <form action="">
                  <div className="mt-[50px]">
                    <p className="text-[24px] font-[700] text-[#f66315]">
                      Đánh giá sản phẩm
                    </p>
                    <p className="mt-[10px] text-[14px]">
                      Hãy chia sẻ những điều bạn nghĩ về sản phẩm này với những
                      người mua khác nhé.
                    </p>
                    <br />
                    <span className="text-[#031230] flex text-[16px] font-[700]">
                      <span>Chất lượng sản phẩm</span>
                      <div className="ml-[5px] flex flex-col items-center">
                        <div className="flex w-full justify-center">
                          {[...Array(5)].map((_, index) => (
                            <img
                              key={index}
                              src={
                                index < rating
                                  ? "https://fbshop.vn/template/assets/images/Star.svg"
                                  : "https://fbshop.vn/template/assets/images/Star-fill.svg"
                              }
                              alt=""
                              className="w-[24px] h-[24px] max-w-full cursor-pointer"
                              onClick={() => handleStarClick(index)}
                            />
                          ))}
                        </div>
                      </div>
                    </span>
                    <div className="mt-[30px]">
                      <div className="flex mx-[-12px] flex-wrap justify-between">
                        <div className="w-[50%] px-3">
                          <label className="text-[16px] text-[#031230] font-[500] mb-[10px] block">
                            Họ và tên <span className="text-[#f66315]">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Nhập họ tên của bạn"
                            className="w-full text-[14px] font-[400] border-none h-[42px] px-[20px] rounded-[21px] text-[#031230] focus:outline-none focus:ring-1 focus:ring-[#f66315]"
                          />
                        </div>
                        <div className="w-[50%] px-3">
                          <label className="text-[16px] text-[#031230] font-[500] mb-[10px] block">
                            Email <span className="text-[#f66315]">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Nhập email của bạn"
                            className="w-full text-[14px] font-[400] border-none h-[42px] px-[20px] rounded-[21px] text-[#031230] focus:outline-none focus:ring-1 focus:ring-[#f66315]"
                          />
                        </div>
                        <div className="w-[100%] px-3 mt-[20px]">
                          <label className="text-[16px] text-[#031230] font-[500] mb-[10px] block">
                            Đánh giá của bạn{" "}
                            <span className="text-[#f66315]">*</span>
                          </label>
                          <textarea
                            type="text"
                            placeholder="Viết đánh giá"
                            className="w-full text-[14px] font-[400] border-none min-h-[84px] px-[20px] py-[10px] rounded-[12px] text-[#031230] focus:outline-none focus:ring-1 focus:ring-[#f66315]"
                          ></textarea>
                        </div>
                      </div>
                      <div className="flex justify-end  mt-[30px]">
                        <div className="border border-solid border-[#f66315] w-fit mx-auto min-w-[120px] rounded-[4rem] relative">
                          <div className="text-[#fff] cursor-pointer relative bg-[#f66315] hover:bg-[#fff] hover:text-[#031230] duration-300 mx-auto rounded-[4rem] items-center justify-center flex">
                            <div className="py-[10px] px-[40px] flex items-center justify-center gap-[6px]">
                              <FaPaperPlane className="text-[16px]" />
                              <span className="text-[16px] font-[500] leading-[1.2]">
                                Gửi ngay
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="mt-[100px] max-w-[1230px] mx-auto">
        <div className="w-full h-full mx-auto px-[15px]">
          <h2 className="text-[40px] font-[700] text-[#031230]">
            Sản phẩm tương tự
          </h2>
          <div className="mt-[30px]">
            <div className="after:block after:clear-both">
              <div className="m-[-12px] opacity-100 visible h-auto">
                <div className="mx-auto overflow-hidden list-none z-1 p-[12px]">
                  <div className="relative w-full h-full z-1 flex box-content transition-transform">
                    <Swiper
                      breakpoints={{
                        280: {
                          slidesPerView: "auto",
                          spaceBetween: 15,
                        },
                        640: {
                          slidesPerView: 3,
                          spaceBetween: 15,
                        },
                        768: {
                          slidesPerView: 4,
                          spaceBetween: 15,
                        },
                        992: {
                          slidesPerView: 4,
                          spaceBetween: 14,
                        },
                        1024: {
                          slidesPerView: 4,
                          spaceBetween: 14,
                        },
                      }}
                      // centeredSlides={true}
                      grabCursor={true}
                      freeMode={true}
                      pagination={{
                        // clickable: true,
                        enabled: false,
                      }}
                      modules={[FreeMode, Pagination]}
                    >
                      <SwiperSlide className="!w-[284px] h-auto">
                        <SuggestProductCard />
                      </SwiperSlide>
                      <SwiperSlide className="!w-[284px] h-auto">
                        <SuggestProductCard />
                      </SwiperSlide>
                      <SwiperSlide className="!w-[284px] h-auto">
                        <SuggestProductCard />
                      </SwiperSlide>
                      <SwiperSlide className="!w-[284px] h-auto">
                        <SuggestProductCard />
                      </SwiperSlide>
                      <SwiperSlide className="!w-[284px] h-auto">
                        <SuggestProductCard />
                      </SwiperSlide>
                      <SwiperSlide className="!w-[284px] h-auto">
                        <SuggestProductCard />
                      </SwiperSlide>
                      <SwiperSlide className="!w-[284px] h-auto">
                        <SuggestProductCard />
                      </SwiperSlide>
                      <SwiperSlide className="!w-[284px] h-auto">
                        <SuggestProductCard />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SuggestProductCard = () => {
  const isStocking = true;
  return (
    <div className="px-[7px] w-full max-[800px]:w-[50%]">
      <div className="h-full">
        <div className="group flex flex-col h-full p-[10px] rounded-[12px] bg-[#fff] duration-300 ease-in-out hover:shadow-2">
          <div className="relative">
            <div className="relative pt-[100%] rounded-[12px] overflow-hidden">
              <a href="/san-pham/id">
                <img
                  className="group-hover:scale-105 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-37%] object-cover duration-300 ease-in-out object-top w-full h-auto max-w-full"
                  width="300"
                  height="400"
                  src="https://fbshop.vn/wp-content/uploads/2024/01/nanoflare_1000play-1-400x546.webp"
                  alt=""
                />
              </a>
            </div>
            <div className="absolute min-w-12 top-5 left-[10px] z-1 flex items-center justify-center">
              <div className="absolute w-full min-h-[48px] top-[-10px] -z-1 left-[0px] bg-no-repeat bg-contain bg-sale"></div>
              <div className="font-[700] text-[#fff] mt-[2px]">-12%</div>
            </div>
            {isStocking ? (
              <div className="bg-[#dcf3d8] absolute py-1 px-4 min-w-[120px] flex items-center justify-center gap-[6px] rounded-[36px] bottom-[10px] left-[10px] text-[#1d9d06] text-[14px]">
                <FaCheck />
                <div className="font-[500]">Còn hàng</div>
              </div>
            ) : (
              <div className="bg-[#feefe8] absolute py-1 px-4 min-w-[120px] flex items-center justify-center gap-[6px] rounded-[36px] bottom-[10px] left-[10px] text-[#f63e15] text-[14px]">
                <FaTimes />
                <div className="font-[500]">Hết hàng</div>
              </div>
            )}

            <div className="absolute flex items-center justify-center flex-col gap-2 bottom-[10px] right-[10px] duration-300 ease-in-out opacity-0 group-hover:opacity-100">
              <div className="relative w-10 h-10 flex items-center justify-center rounded-[50%] text-[#f66315] bg-[#feefe8] hover:bg-[#f66315] hover:text-[#fff] text-[16px] duration-300 ease-in-out cursor-pointer">
                <FaRegHeart />
              </div>
              <div className="relative w-10 h-10 flex items-center justify-center rounded-[50%] text-[#f66315] bg-[#feefe8] hover:bg-[#f66315] hover:text-[#fff] text-[20px] duration-300 ease-in-out cursor-pointer">
                <AiOutlineShoppingCart />
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full">
            <div className="flex items-center">
              <div className="flex shrink-0">
                <div className="relative h-3">
                  <div className="flex">
                    <img
                      src="https://fbshop.vn/template/assets/images/Star.svg"
                      alt=""
                      className="w-[14px] h-[14px] max-w-full"
                    />
                    <img
                      src="https://fbshop.vn/template/assets/images/Star.svg"
                      alt=""
                      className="w-[14px] h-[14px] max-w-full ml-1"
                    />
                    <img
                      src="https://fbshop.vn/template/assets/images/Star.svg"
                      alt=""
                      className="w-[14px] h-[14px] max-w-full ml-1"
                    />
                    <img
                      src="https://fbshop.vn/template/assets/images/Star.svg"
                      alt=""
                      className="w-[14px] h-[14px] max-w-full ml-1"
                    />
                    <img
                      src="https://fbshop.vn/template/assets/images/Star-fill.svg"
                      alt=""
                      className="w-[14px] h-[14px] max-w-full ml-1"
                    />
                  </div>
                </div>
              </div>
              <span className="text-[14px] mt-[2px] pl-[2px]"> (3) </span>
            </div>
            <a
              href="/san-pham/id"
              className="text-[16px] font-[500] overflow-hidden line-clamp-2 text-ellipsis no-underline duration-300 hover:text-[#f66315] ease-in-out"
            >
              Vợt Yonex Nanoflare 1000Z | Siêu phẩm mùa hè 2023{" "}
            </a>
            <div className="flex items-center gap-[10px] pt-[10px] mt-auto">
              <span className="text-[20px] md:text-[18px] text-[#f66315] font-[700]">
                3.300.000đ
              </span>
              <span className="text-[16px] md:text-[14px] text-[#7f8080] line-through">
                3.600.000đ
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
