import React from "react";
import { Button, Table } from "antd";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
const columns = [
  {
    title: "Order ID",
    dataIndex: "id",
  },
  {
    title: "product_id",
    dataIndex: "product_id",
  },
  {
    title: "customer_id",
    dataIndex: "customer_id",
  },
  {
    title: "customer_name",
    dataIndex: "customer_name",
  },
  {
    title: "order_date",
    dataIndex: "order_date",
  },
  {
    title: "order_total",
    dataIndex: "order_total",
  },
  {
    title: "current_order_status",
    dataIndex: "current_order_status",
  },
  {
    title: "shipment_address",
    dataIndex: "shipment_address",
  },
  {
    title: "Xem chi tiết",
    dataIndex: "preview",
    key: "preview",
    render: (_, record) => (
      <>
        <Link to={`/admin/orderDetail`}>
          <Button>
            <AiOutlineEye size={20} />
          </Button>
        </Link>
      </>
    ),
  },
];
const data = [
  {
    id: "1",
    product_id: "#4324",
    customer_id: "23143",
    customer_name: "Shirley A. Lape",
    order_date: "2022-05-17T03:24:00",
    order_total: "$435.50",
    current_order_status: "PLACED",
    shipment_address: "Cottage Grove, OR 97424",
  },
  {
    id: "7",
    product_id: "#7453",
    customer_id: "96453",
    customer_name: "Ryan Carroll",
    order_date: "2022-05-14T05:24:00",
    order_total: "$96.35",
    current_order_status: "CONFIRMED",
    shipment_address: "Los Angeles, CA 90017",
  },
  {
    id: "2",
    product_id: "#5434",
    customer_id: "65345",
    customer_name: "Mason Nash",
    order_date: "2022-05-17T07:14:00",
    order_total: "$836.44",
    current_order_status: "SHIPPED",
    shipment_address: "Westminster, CA 92683",
  },
  {
    id: "3",
    product_id: "#9854",
    customer_id: "87832",
    customer_name: "Luke Parkin",
    order_date: "2022-05-16T12:40:00",
    order_total: "$334.50",
    current_order_status: "SHIPPED",
    shipment_address: "San Mateo, CA 94403",
  },
  {
    id: "4",
    product_id: "#8763",
    customer_id: "09832",
    customer_name: "Anthony Fry",
    order_date: "2022-05-14T03:24:00",
    order_total: "$876.00",
    current_order_status: "OUT_FOR_DELIVERY",
    shipment_address: "San Mateo, CA 94403",
  },
  {
    id: "5",
    product_id: "#5627",
    customer_id: "97632",
    customer_name: "Ryan Carroll",
    order_date: "2022-05-14T05:24:00",
    order_total: "$96.35",
    current_order_status: "DELIVERED",
    shipment_address: "Los Angeles, CA 90017",
  },
];
const AllOrders = () => {
  return (
    <div class="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
      <div class="text-center py-4">
        <h1 className="text-[40px] font-[700] text-[#f66315]">
          Tất cả đơn đặt hàng
        </h1>
      </div>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default AllOrders;
