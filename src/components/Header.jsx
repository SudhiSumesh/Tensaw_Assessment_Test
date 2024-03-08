import React from "react";

function Header() {
  return (
    <div className="flex justify-between items-end  p-1 sticky md:top-4 bg-white">
      <div className="text-2xl cursor-pointer">
        <span className="text-[#16efbd] font-medium">Primrose.</span>
        <span>health</span>
      </div>
      <div>
        <button className="bg-[#ec7640] px-3.5 py-2 rounded-md text-white transition-all duration-150 ease-linear  hover:bg-[#ed530b] hover:shadow-lg">
          LOGOUT
        </button>
      </div>
    </div>
  );
}

export default Header;
