// import React from 'react';

import { Children } from "react";

// function LeftSidebar(props) {
//     return (
//         <div>
//             <ul>
//                 <li>
//                    <h1>
//                      Tekul Prizes
//                     </h1>
//                 </li>
//                 <li>
//                    <p>
//                     Leaders Board
//                     </p>
//                 </li>
//                 <li>
//                    <p>
//                     Shop
//                     </p>
//                 </li>
//                 <li>
//                    <p>
//                     Profile
//                     </p>
//                 </li>
//                 <li>
//                    <p>
//                      More
//                     </p>
//                 </li>

//             </ul>
//         </div>
//     );
// }

// export default LeftSidebar;

// ---------------------------------------------------

// import { ChevronFirtst } from "lucid-react"

export default function LeftSidebar({ Children }) {
  return (
    <aside className="h-screen ">
      <nav className="h-full flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img src=".//assets/profile-icon.jpeg" className="w-32" alt="TEKUL" />
          <button className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
            {/* <ChevronFirtst/> */}X
          </button>
        </div>
        <div className="flex-1 px-3">{Children}</div>
        <div className="border-t flex p-3">
          <img
            src="./profile-icon.jpeg"
            alt=" why not"
            className="h-1- w-10 rounded-md"
          />
        </div>
      </nav>
    </aside>
  );
}
