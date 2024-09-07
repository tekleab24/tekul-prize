import React from "react";
import LeftSidebar, { LeftSidebarMenuItem } from "../components/LeftSidebar";
import PrizeList from "../components/PrizeList";
import RightSidebar from "../components/RightSidebar";

import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCheck,
  BarChart3,
  LayoutDashboard,
  Settings,
} from "lucide-react";

const Home = () => {
  return (
    <div className="flex flex-row justify- bg-gray-100">
      <div>
        <LeftSidebar>
          <LeftSidebarMenuItem icon={<BarChart3 />} text={"Home"} active />
          <LeftSidebarMenuItem icon={<BarChart3 />} text={"Home"} active />
          <LeftSidebarMenuItem icon={<BarChart3 />} text={"Home"} active />
          <LeftSidebarMenuItem icon={<BarChart3 />} text={"Home"} active />
        </LeftSidebar>
      </div>
      <div className="">
        <PrizeList />
      </div>
      <div>
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
