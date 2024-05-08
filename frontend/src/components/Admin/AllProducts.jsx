import React, { useState } from "react";
import { Button, Table } from "antd";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
const columns = [
  {
    title: "Tên sản phẩm",
    dataIndex: "name",
  },
  {
    title: "Giá",
    dataIndex: "price",
  },
  {
    title: "Loại sản phẩm",
    dataIndex: "type",
  },
  {
    title: "Số lượng trong kho",
    dataIndex: "instock",
  },
  {
    title: "Đã bán",
    dataIndex: "soldout",
  },
  {
    title: "Xem chi tiết",
    dataIndex: "preview",
    key: "preview",
    render: (_, record) => (
      <>
        <Link to={`/san-pham/${record.id}`}>
          <Button>
            <AiOutlineEye size={20} />
          </Button>
        </Link>
      </>
    ),
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: (_, record) => (
      <>
        <Button>
          <AiOutlineDelete size={20} />
        </Button>
      </>
    ),
  },
];
const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Vợt cầu lông thứ ${i}`,
    price: "1000000đ",
    type: `Vợt cầu lông`,
    instock: 300,
    soldout: 120,
  });
}
const AllProducts = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <div class="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
      <div class="text-center py-4">
        <h1 className="text-[40px] font-[700] text-[#f66315]">
          Tất cả sản phẩm
        </h1>
      </div>
      <div>
        <div
          style={{
            marginBottom: 16,
          }}
        >
          <Button
            type="primary"
            danger
            onClick={start}
            disabled={!hasSelected}
            loading={loading}
          >
            Xóa
          </Button>
          <span
            style={{
              marginLeft: 8,
            }}
          >
            {hasSelected ? `Đã chọn ${selectedRowKeys.length} sản phẩm` : ""}
          </span>
        </div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
        />
      </div>
    </div>
    //   <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
    //     <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
    //       <tr>
    //         <th scope="col" class="p-4">
    //           ID
    //         </th>
    //         <th scope="col" class="px-6 py-3">
    //           Tên sản phẩm
    //         </th>
    //         <th scope="col" class="px-6 py-3">
    //           Giá
    //         </th>
    //         <th scope="col" class="px-6 py-3">
    //           Loại sản phẩm
    //         </th>
    //         <th scope="col" class="px-6 py-3">
    //           Số lượng trong kho
    //         </th>
    //         <th scope="col" class="px-6 py-3">
    //           Đã bán
    //         </th>
    //         <th scope="col" class="px-6 py-3">
    //           Action
    //         </th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <tr class="bg-white border-b  hover:bg-gray-50">
    //         <td class="w-4 p-4">1</td>
    //         <th
    //           scope="row"
    //           class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
    //         >
    //           Vợt Lining axforce cannon
    //         </th>
    //         <td class="px-6 py-4">1.000.000đ</td>
    //         <td class="px-6 py-4">Vợt cầu lông</td>
    //         <td class="px-6 py-4">100</td>
    //         <td class="px-6 py-4">35</td>
    //         <td class="flex items-center px-6 py-4">
    //           <a
    //             href="/edit"
    //             class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
    //           >
    //             Edit
    //           </a>
    //           <a
    //             href="/remove"
    //             class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
    //           >
    //             Remove
    //           </a>
    //         </td>
    //       </tr>
    //       <tr class="bg-white border-b  hover:bg-gray-50">
    //         <td class="w-4 p-4">1</td>
    //         <th
    //           scope="row"
    //           class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap min-w-[370px] max-w-[380px] line-clamp-1"
    //         >
    //           Vợt Lining axforce cannon
    //         </th>
    //         <td class="px-6 py-4">1.000.000đ</td>
    //         <td class="px-6 py-4">Vợt cầu lông</td>
    //         <td class="px-6 py-4">100</td>
    //         <td class="px-6 py-4">35</td>
    //         <td class="flex items-center px-6 py-4">
    //           <a
    //             href="/edit"
    //             class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
    //           >
    //             Edit
    //           </a>
    //           <a
    //             href="/remove"
    //             class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
    //           >
    //             Remove
    //           </a>
    //         </td>
    //       </tr>
    //     </tbody>
    //   </table>
    // </div>
  );
};

export default AllProducts;
