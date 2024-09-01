import React from "react";
import PrizeCard from "./PrizeCard";

function PrizeList(props) {
  return (
    <>
      <div>
        <h3>Daily Ettas</h3>
        <PrizeCard />
      </div>

      <div>
        <h3>Weekly Ettas</h3>
        <PrizeCard />
      </div>
    </>
  );
}

export default PrizeList;
