import React from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { FaRegUser } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { LuFileClock } from "react-icons/lu";
import { FaTruckFast } from "react-icons/fa6";
import { LiaBoxSolid } from "react-icons/lia";
import { BsCardChecklist } from "react-icons/bs";

const ViewOrderPage = () => {
  return (
    <div className="font-Roboto">
      <Header />
      <div className="mt-[100px]">
        <div className="w-full max-w-[1230px] h-full mx-auto px-[15px]">
          <div className="relative mb-[100px] z-1">
            <div className="p-[50px] rounded-[12px] bg-[#fff] shadow-2">
              <div className="flex mx-[-25px]">
                {/* left */}
                <div className="w-[25%] px-[25px]">
                  <div className="flex gap-[20px]">
                    <div className="w-[70px] h-[70px] shrink-0 rounded-[50%] overflow-hidden border border-solid border-[#1d9d06]">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvb2NSSSdTcOp8UW1II7nYq1yd0IOc9AxPFA&usqp=CAU"
                        alt=""
                        className="block w-full object-cover max-w-full h-auto"
                      />
                    </div>
                    <div className="flex flex-col gap-[2px]">
                      <p className="font-[700] text-[24px]">Nambad2203</p>
                      <a
                        href="/log-out"
                        className="text-[#7f8080] hover:text-[#f66315] duration-300 ease-in-out underline"
                      >
                        Đăng xuất
                      </a>
                    </div>
                  </div>
                  {/* list */}
                  <div className="flex flex-col gap-[20px] mt-[50px]">
                    <div>
                      <a
                        href="/tai-khoan"
                        className="no-underline duration-300 ease-in-out flex gap-[10px] py-[10px] px-[34px] items-center rounded-[48px] group hover:bg-[#feefe8]"
                      >
                        <FaRegUser className="text-[18px] text-[#7f8080] group-hover:text-[#f66315]" />
                        <span className="group-hover:text-[#f66315]">
                          Thông tin tài khoản
                        </span>
                      </a>
                    </div>
                    <div>
                      <a
                        href="/tai-khoan/change-password"
                        className="no-underline duration-300 ease-in-out flex gap-[10px] py-[10px] px-[34px] items-center rounded-[48px] group hover:bg-[#feefe8]"
                      >
                        <MdLockOutline className="text-[18px] text-[#7f8080] group-hover:text-[#f66315]" />
                        <span className="group-hover:text-[#f66315]">
                          Thay đổi mật khẩu
                        </span>
                      </a>
                    </div>
                    <div>
                      <a
                        href="/tai-khoan/orders"
                        className="no-underline duration-300 ease-in-out flex gap-[10px] py-[10px] px-[34px] items-center rounded-[48px] group hover:bg-[#feefe8]"
                      >
                        <LuFileClock className="text-[18px] text-[#7f8080] group-hover:text-[#f66315]" />
                        <span className="group-hover:text-[#f66315]">
                          Lịch sử đơn hàng
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                {/* right */}
                <div className="w-[75%] px-[25px]">
                  <div className="relative">
                    <div className="absolute w-[1px] h-full right-[105%] bg-[#f0f0f0] top-[50%] translate-y-[-50%]"></div>
                    <div className="flex mx-[-12px] justify-center">
                      <div className="px-[12px] w-[25%]">
                        <div className="flex items-center justify-center flex-col gap-[20px]">
                          <div className="bg-[#1d9d06] relative flex items-center justify-center w-[48px] h-[48px] rounded-[50%]">
                            <div className="border-[#1d9d06] absolute opacity-100 w-[120%] h-[120%] rounded-[50%] border-[2px] border-solid top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-[10px]"></div>
                            <LiaBoxSolid className="text-[24px] text-[#fff]" />
                            <div className="bg-[#1d9d06] absolute w-[68px] top-[50%] translate-y-[-50%] left-[92px] h-[2px]"></div>
                          </div>
                          <div className="flex items-center justify-center flex-col">
                            <p className="font-[700]">Đơn hàng đã đặt</p>
                            <p className="text-[#444545] text-[14px]">
                              2024-03-26 10:29:08{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="px-[12px] w-[25%]">
                        <div className="flex items-center justify-center flex-col gap-[20px]">
                          <div className="bg-[#feefe8] relative flex items-center justify-center w-[48px] h-[48px] rounded-[50%]">
                            <BsCardChecklist className="text-[24px] text-[#f66315]" />
                            <div className="bg-[#feefe8] absolute w-[68px] top-[50%] translate-y-[-50%] left-[92px] h-[2px]"></div>
                          </div>
                          <div className="flex items-center justify-center flex-col">
                            <p className="font-[700]">Xác nhận thông tin</p>
                            <p className="text-[#444545] text-[14px]">
                              2024-03-26 10:29:08{" "}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="px-[12px] w-[25%]">
                        <div className="flex items-center justify-center flex-col gap-[20px]">
                          <div className="bg-[#feefe8] relative flex items-center justify-center w-[48px] h-[48px] rounded-[50%]">
                            <FaTruckFast className="text-[24px] text-[#f66315]" />
                            <div className="bg-[#feefe8] absolute w-[68px] top-[50%] translate-y-[-50%] left-[92px] h-[2px]"></div>
                          </div>
                          <p className="font-[700]">Giao cho ĐVVC</p>
                        </div>
                      </div>
                      <div className="px-[12px] w-[25%]">
                        <div className="flex items-center justify-center flex-col gap-[20px]">
                          <div className="bg-[#feefe8] relative flex items-center justify-center w-[48px] h-[48px] rounded-[50%]">
                            <FaTruckFast className="text-[24px] text-[#f66315]" />
                          </div>
                          <p className="font-[700]">Giao hàng</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-[30px]">
                      <div className="flex mx-[-15px]">
                        <div className="px-[15px] w-[52%]">
                          <div className="flex items-center gap-[10px] flex-wrap">
                            <p className="text-[20px] font-[700]">
                              Chi tiết đơn hàng
                            </p>
                            <p className="text-[20px] font-[700] text-[#f66315]">
                              #135975
                            </p>
                            <div className="text-[#1582f6] bg-[#d8eafd] flex items-center justify-center py-1 px-4 rounded-[37px] font-[500] min-w-[126px] w-fit">
                              <span>Đang xử lý</span>
                            </div>
                          </div>
                          <div className="mt-[20px] text-[#031230]">
                            <p className="text-[18px] font-[500]">
                              26 Tháng Ba, 2024
                            </p>
                            <div className="mt-[10px]">
                              <p className="mb-[20px] text-[18px] font-[500]">
                                Chi tiết đơn hàng
                              </p>
                              <div className="flex flex-col gap-5">
                                <div>
                                  <div className="flex gap-[10px]">
                                    <div className="w-[52px] h-[52px] shrink-0 rounded-[6px] overflow-hidden">
                                      <img
                                        src="https://fbshop.vn/wp-content/uploads/2023/12/balo-victor-br9009-anh-dai-dien-scaled-1-150x150.webp"
                                        alt=""
                                        className="max-w-full h-auto"
                                      />
                                    </div>
                                    <div className="flex flex-col">
                                      <p className="font-[500] line-clamp-1 text-[16px]">
                                        Balo Victor BR9009 | Mẫu mã đa dạng –
                                        Chất lượng dẫn đầu
                                      </p>
                                      <p className="mt-[5px] text-[#4f4f4f]">
                                        <span className="font-[600]">
                                          Số lượng:{" "}
                                        </span>
                                        <span>1</span>
                                      </p>
                                    </div>
                                    <div className="ml-auto">
                                      <p className="font-[700] text-[#f66315]">
                                        950.000đ
                                      </p>
                                    </div>
                                  </div>
                                </div>

                                <div>
                                  <div className="flex gap-[10px]">
                                    <div className="w-[52px] h-[52px] shrink-0 rounded-[6px] overflow-hidden">
                                      <img
                                        src="https://fbshop.vn/wp-content/uploads/2023/12/balo-victor-br9009-anh-dai-dien-scaled-1-150x150.webp"
                                        alt=""
                                        className="max-w-full h-auto"
                                      />
                                    </div>
                                    <div className="flex flex-col">
                                      <p className="font-[500] line-clamp-1 text-[16px]">
                                        Balo Victor BR9009 | Mẫu mã đa dạng –
                                        Chất lượng dẫn đầu
                                      </p>
                                      <p className="mt-[5px] text-[#4f4f4f]">
                                        <span className="font-[600]">
                                          Số lượng:{" "}
                                        </span>
                                        <span>1</span>
                                      </p>
                                    </div>
                                    <div className="ml-auto">
                                      <p className="font-[700] text-[#f66315]">
                                        950.000đ
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="px-[15px] w-[48%]">
                          <div className="py-[90px] px-[20px] relative z-1 mb-[30px] bg-no-repeat bg-cover bg-bottom bg-[url('./images/bg-vo.webp')]">
                            <div className="flex flex-col gap-4 pb-[24px] border-b border-b-solid border-b-[#d7d7d7] text-[15px]">
                              <div className="flex gap-[10px] justify-between">
                                <p className="text-[#fff]">Tổng số phụ:</p>
                                <p className="font-[700] text-[#f66315]">
                                  950.000đ
                                </p>
                              </div>
                              <div className="flex gap-[10px] justify-between">
                                <p className="text-[#fff]">Giao nhận hàng:</p>
                                <p className="text-[#fff]">
                                  Theo chi phí ĐVVC ( 30-80k) Chuyển khoản trước
                                  freeship
                                </p>
                              </div>
                              <div className="flex gap-[10px] justify-between">
                                <p className="text-[#fff]">
                                  Phương thức thanh toán:
                                </p>
                                <p className="text-[#fff]">
                                  Nhận hàng thanh toán
                                </p>
                              </div>
                            </div>
                            <div className="mt-[20px] flex gap-[10px] justify-between">
                              <p className="text-[#fff] text-[20px] font-[700]">
                                Tổng cộng
                              </p>
                              <p className="text-[#f66315] text-[20px] font-[700]">
                                950.000đ
                              </p>
                            </div>
                          </div>
                          <div className="border border-solid border-[#f66315] ml-auto w-fit rounded-[4rem] relative">
                            <div className="hover:text-[#fff] cursor-pointer relative hover:bg-[#f66315] bg-[#fff] text-[#031230] duration-300 mx-auto rounded-[4rem] items-center justify-center flex">
                              <div className="py-[10px] px-[10px] flex items-center justify-center gap-[6px]">
                                <span className="text-[16px] font-[500] leading-[1.2]">
                                  Hủy đơn hàng
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewOrderPage;
