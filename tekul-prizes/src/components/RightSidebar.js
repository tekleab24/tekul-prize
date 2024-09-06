import React from "react";
import { AdCard } from "./AdCard";
import { Album, Weight, Wine } from "lucide-react";
import GotoLeaders from "./Cards/GotoLeadersBoardCard";
import DailyEttas from "./EttaTypes/DailyEttas";

function RightSidebar(props) {
  return (
    <div className="w-80 p-4  h-full mr-4 ">
      <div className="">
        <div className="flex justify-between items-center py-4 font-semibold text-cyan-500">
          <div className="flex space-x-2 items-center">
            <Album className="size-8" />
            <p>23</p>
          </div>
          <div className="flex space-x-2 items-center">
            <Weight className="size-8" />
            <p>23</p>
          </div>
          <div className="flex space-x-2 items-center">
            <Wine className="size-8" />
            <p>23</p>
          </div>
        </div>
        <GotoLeaders />
      </div>
      <DailyEttas />
      <div>
        <AdCard />
      </div>
    </div>
  );
}

export default RightSidebar;
