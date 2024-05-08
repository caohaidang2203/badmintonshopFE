import React from "react";
import Sidebar from "../../components/Admin/Layout/Sidebar";
import Header from "../../components/Admin/Layout/Header";
import CreateNews from "../../components/Admin/CreateNews.jsx";
const AdminAddNewsPage = () => {
  return (
    <div>
      <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <div className="flex-1 p-4 min-h-0 overflow-auto">
            <div className="w-full justify-center flex">
              <CreateNews />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAddNewsPage;
