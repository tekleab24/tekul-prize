import React from "react";
import LeftSidebar from "../components/LeftSidebar";
import PrizeList from "../components/PrizeList";
import RightSidebar from "../components/RightSidebar";

const Home = () => {
  return (
    <div className="flex flex-row justify">
      <div>
        <LeftSidebar />
      </div>
      <div className="width-65%">
        <PrizeList />
      </div>
      <div>
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
