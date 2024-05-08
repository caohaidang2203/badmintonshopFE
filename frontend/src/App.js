import "./App.css";
import React from "react";
import {
  HomePage,
  LoginPage,
  SignupPage,
  ShopsPage,
  ProductDetailPage,
  ContactPage,
  BadmintonRacketsPage,
  BadmintonShoesPage,
  BadmintonBalosPage,
  CartPage,
  PaymentPage,
  OrderConfirmPage,
  ViewOrderPage,
  UserAccountPage,
  ChangePasswordPage,
  OrdersUserPage,
  FavoriteProductsPage,
  SearchOrderPage,
  BadmintonClothesPage,
  BadmintonAccessoriesPage,
  NewsPage,
  SearchResultPage,
  ChatUserPage,
} from "./routes/Routes.js";
import {
  AdminDashboardPage,
  AdminAddProductPage,
  AdminProductsPage,
  AdminOrdersPage,
  AdminCustomersPage,
  AdminAddNewsPage,
  AdminAddBranchPage,
  AdminBranchesPage,
  AdminMessagesPage,
  AdminOrderDetailPage,
} from "./routes/AdminRoutes.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/cua-hang" element={<ShopsPage />} />
        <Route path="/lien-he" element={<ContactPage />} />
        <Route path="/san-pham/:id" element={<ProductDetailPage />} />
        <Route path="/vot-cau-long" element={<BadmintonRacketsPage />} />
        <Route path="/giay-cau-long" element={<BadmintonShoesPage />} />
        <Route path="/quan-ao-cau-long" element={<BadmintonClothesPage />} />
        <Route path="/bao-vot-cau-long" element={<BadmintonBalosPage />} />
        <Route
          path="/phu-kien-cau-long"
          element={<BadmintonAccessoriesPage />}
        />
        <Route path="/gio-hang" element={<CartPage />} />
        <Route path="/thanh-toan" element={<PaymentPage />} />
        <Route path="/xac-nhan-don-hang" element={<OrderConfirmPage />} />
        <Route path="/tai-khoan" element={<UserAccountPage />} />
        <Route path="/tai-khoan/view-order/:id" element={<ViewOrderPage />} />
        <Route
          path="/tai-khoan/change-password"
          element={<ChangePasswordPage />}
        />
        <Route path="/tai-khoan/orders" element={<OrdersUserPage />} />
        <Route path="/san-pham-yeu-thich" element={<FavoriteProductsPage />} />
        <Route path="/tra-don-hang" element={<SearchOrderPage />} />
        <Route path="/tin-tuc" element={<NewsPage />} />
        <Route path="/ket-qua-tim-kiem" element={<SearchResultPage />} />
        <Route path="/chat-cung-shop" element={<ChatUserPage />} />
        <Route path="/dashboard" element={<AdminDashboardPage />} />
        <Route path="/admin/add-product" element={<AdminAddProductPage />} />
        <Route path="/admin/products" element={<AdminProductsPage />} />
        <Route path="/admin/orders" element={<AdminOrdersPage />} />
        <Route path="/admin/customers" element={<AdminCustomersPage />} />
        <Route path="/admin/add-news" element={<AdminAddNewsPage />} />
        <Route path="/admin/add-branch" element={<AdminAddBranchPage />} />
        <Route path="/admin/branches" element={<AdminBranchesPage />} />
        <Route path="/admin/messages" element={<AdminMessagesPage />} />
        <Route path="/admin/messages" element={<AdminMessagesPage />} />
        <Route path="/admin/orderDetail" element={<AdminOrderDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
