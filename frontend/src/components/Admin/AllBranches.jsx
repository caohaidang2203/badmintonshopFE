import React from "react";
import { Button, Table } from "antd";
import { AiOutlineDelete } from "react-icons/ai";
const data = [
  {
    key: "1",
    name: "BadmintonShop Tây Hồ",
    hotline: "03444230789",
    address: "New York No. 1 Lake Park",
    email: "john.brown@gmail.com",
  },
  {
    key: "2",
    name: "BadmintonShop Cầu Giấy",
    hotline: "03444230789",
    address: "London No. 1 Lake Park",
    email: "joe.black@gmail.com",
  },
  {
    key: "3",
    name: "BadmintonShop Hà Đông",
    hotline: "03444230789",
    email: "jim.green@gmail.com",
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "BadmintonShop Long Biên",
    hotline: "03444230789",
    email: "jim.red@gmail.com",
    address: "London No. 2 Lake Park",
  },
];
const AllBranches = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Hotline",
      dataIndex: "hotline",
      key: "hotline",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
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
  return (
    <div class="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
      <div class="text-center py-4">
        <h1 className="text-[40px] font-[700] text-[#f66315]">
          Tất cả chi nhánh
        </h1>
      </div>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};
export default AllBranches;
