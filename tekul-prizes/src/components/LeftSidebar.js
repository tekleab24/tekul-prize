// import React from 'react';

import { Children } from "react";

import { MoreVertical, 
  ChevronLeft,
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  

 } from "lucide-react";


export default function LeftSidebar({ Children }) {
  return (
    <aside className="h-screen w-64 ">
      <nav className="h-full flex-col bg-sllate-900 border-2 shadow-sm ">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/254.svg"
            className="w-32 text-xl text-gray-600 font-semibold"
            alt="TEKUL"
          />
          <button className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
            <ChevronLeft />
          </button>
        </div>
        <div className="flex-1 px-3">{Children}</div>

        <div className="border-t flex p-3">
          <img
            src="./assets/profile-icon.jpeg"
            alt=" why not"
            className="h-1- w-10 rounded-md"
          />
        </div>
        <div className="flex justify-between w-52 ml-3 pl-3 items-center">
          <div className="leading-4">
            <h4 className="font-semibold">Tekleab M.</h4>
            <span className="text-xs text-gray-600"> tekleabm@gmail.com</span>
          </div>
          <MoreVertical size={20} />
        </div>
      </nav>
    </aside>
  );
}

export function LeftSidebarItem({ icon, text, active, alert }) {
  return(

    <li>
      {icon}
      <span>
        {text}
      </span>
    </li>
  )

}
