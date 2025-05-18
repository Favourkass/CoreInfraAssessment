import React from "react";
import { ImagesAndIcons } from "./constants/globalImageImports";

const mainMenuItems = [
  { key: "branches", label: "Branches", icon: ImagesAndIcons.branches },
  { key: "roles", label: "Roles", icon: ImagesAndIcons.roles },
  { key: "cardScheme", label: "Card Scheme", icon: ImagesAndIcons.cardScheme },
  {
    key: "cardProfile",
    label: "Card Profile",
    icon: ImagesAndIcons.cardProfile,
  },
  {
    key: "cardRequest",
    label: "Card Request",
    icon: ImagesAndIcons.cardRequest,
  },
  { key: "cards", label: "Cards", icon: ImagesAndIcons.cards },
  {
    key: "blockUnblockCard",
    label: "Block/Unblock Card",
    icon: ImagesAndIcons.unblockCard,
  },
  {
    key: "generatePin",
    label: "Generate/Reissue Pin",
    icon: ImagesAndIcons.reissuePin,
  },
  {
    key: "complaintsLog",
    label: "Complaints: Log",
    icon: ImagesAndIcons.complaintsLog,
  },
  {
    key: "resolve",
    label: "Complaints: Resolve",
    icon: ImagesAndIcons.complaintResolved,
  },
];

type SidebarProps = {
  currentPage: string;
  onSelectPage: (pageKey: string) => void;
};
const activeIconFilter =
  "invert(28%) sepia(91%) saturate(2242%) hue-rotate(193deg) brightness(88%) contrast(101%)";
const inactiveIconFilter =
  "invert(28%) sepia(5%) saturate(184%) hue-rotate(184deg) brightness(95%) contrast(90%)";

const Sidebar: React.FC<SidebarProps> = ({ currentPage, onSelectPage }) => {
  return (
    <div className="bg-[#001F4D] text-white w-64 h-screen flex flex-col justify-between">
      <div className="p-4">
        {/* Logo */}
        <div className="mb-6 flex items-center space-x-2">
          <img
            src={ImagesAndIcons.LAPOLOGO}
            alt="LAPO Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Dashboard */}
        <div
          onClick={() => onSelectPage("dashboard")}
          className={`flex items-center space-x-3 py-3 px-4 rounded cursor-pointer mb-2 ${
            currentPage === "dashboard"
              ? "bg-[rgba(174,186,201,1)] text-[rgba(1,77,175,1)]"
              : "text-[rgba(208,213,221,1)] hover:bg-[#003366]"
          }`}
        >
          <img
            src={ImagesAndIcons.dashboard}
            alt="Dashboard"
            className="h-5 w-5"
          />
          <span className="text-sm">Dashboard</span>
        </div>

        {/* Main Menu Label */}
        <div className="px-4 mt-4 mb-2 text-[rgba(126,139,156,1)] text-xs uppercase tracking-wide">
          Main Menu
        </div>

        {/* Main Menu Items */}
        {mainMenuItems.map((item) => (
          <div
            key={item.key}
            onClick={() => onSelectPage(item.key)}
            className={`flex items-center space-x-3 py-3 px-4 rounded cursor-pointer ${
              currentPage === item.key
                ? "bg-[#E4F0FF] text-[rgba(1,77,175,1)]"
                : "text-[rgba(208,213,221,1)] hover:bg-[#003366]"
            }`}
          >
            <img
              src={item.icon}
              alt={item.label}
              className="h-5 w-5"
              style={{
                filter:
                  currentPage === item.key
                    ? activeIconFilter
                    : inactiveIconFilter,
              }}
            />

            <span className="text-sm">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Bottom Section: Logout + Powered by */}
      <div className="p-4">
        {/* Logout */}
        <div
          onClick={() => onSelectPage("logout")}
          className="flex items-center space-x-3 py-3 px-4 rounded cursor-pointer text-white hover:bg-[#003366]"
        >
          <img
            src={ImagesAndIcons.logoutTwo}
            alt="Logout"
            className="h-5 w-5"
          />
          <span className="text-sm">Logout</span>
        </div>

        {/* Powered By */}
        <div className="mt-6 text-[rgba(126,139,156,1)] text-sm flex flex-col items-start space-y-2">
          <span className="">POWERED BY</span>
          <img
            src={ImagesAndIcons.cardFinaLogo}
            alt="Logo Two"
            className="h-10 w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
