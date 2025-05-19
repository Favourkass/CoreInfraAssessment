// DashboardLayout.tsx
import React, { useState } from "react";
import Sidebar from "./SideBar";
import ComplaintsLog from "./pages/ComplaintsLog";
import GenerateReissuePin from "./pages/GenerateReissuePin";
import BlockUnblockCard from "./pages/BlockUnblockCard";
import Account from "./pages/Account";
import AuthorizationList from "./pages/AuthorizationList";
import AuthorizationQueue from "./pages/AuthorizationQueue";
import Dashboard from "./pages/Dashboard";

const DashboardLayout = () => {
  const [currentPage, setCurrentPage] = useState("complaintsLog");

  const renderPage = () => {
    switch (currentPage) {
      case "complaintsLog":
        return <ComplaintsLog />;
      case "cardProfile":
        return <GenerateReissuePin />;
      case "blockUnblockCard":
        return <BlockUnblockCard />;
      case "cardRequest":
        return <Account />;
      case "cardScheme":
        return <AuthorizationList />;
      case "dashboard":
        return<Dashboard  />;
      case "authorizationQueue":
        return <AuthorizationQueue />;
      default:
        return <ComplaintsLog />;
    }
  };

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      <Sidebar onSelectPage={setCurrentPage} currentPage={currentPage} />
      <div className="flex-1 overflow-y-auto h-screen">{renderPage()}</div>
    </div>
  );
};

export default DashboardLayout;
