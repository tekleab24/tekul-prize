import React from "react";

function HorizontalPrizeCard() {
  return (
    <div className=" flex flex-row py-6 m-6 h-52 border-t  border-gray-200 overflow-hidden">
      <div className="w-40">
        <img
          className="h-24 w-24 rounded-md "
          src="./assets/profile-icon.jpeg"
          alt="prize pic"
        />
      </div>

      <div className="mx-5 ">
        <div className="flex flex-row pb-3">
          <h3 className="pr-8 font-bold text-xl ">Prize Title</h3>
          <button className="text-sm text-gray-500 px-7 font-medium py-1 mb-1 bg-slate-200 rounded-xl hover:text-cyan-900 ">
            Etta Type
          </button>
        </div>

        <div className="">
          <p className="mr-2 h-16">
            Short Description. Upon touching this card it shall redrect them to
            a single page dedicated to showing a the prize carShort Description.showing a the prize carShort Description.
          </p>
          <div className="my-5">
            <p className="font-bold text-zinc-700 mb-2">35 Ettas remaining</p>
            <div className="flex">
              <div className="bg-slate-400 w-14 h-4 rounded-e rounded-xl"></div>
              <div className="bg-slate-200 w-24 h-4 rounded-s-none  rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="P-8">
        <button className="border-2 w-auto px-8 py-2 text-nowrap border-slate-400 rounded-xl font-semibold text-zinc-700 hover:bg-gray-50">
          {" "}
          15 Coins
        </button>
      </div>
    </div>
  );
}

export default HorizontalPrizeCard;
