import React from "react";
import icons from "../utils/iconAccess";

function Navbar() {
  const navItems = [
    { item: "Home" },
    { item: "About" },
    { item: "Skills" },
    { item: "Projects" },
    { item: "Contact" },
  ];
  return (
    <div className="flex py-4 px-8 items-center bg-[#05091A] ">
      <div className=" bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-2xl font-bold">
        SISIR SEN
      </div>

      <div className="md:hidden h-9 w-9 ml-auto p-2 hover:bg-cyan-800 rounded-2xl transition-all duration-200">
        <img src={icons.menuButton} alt="menu" />
      </div>

      <div className="hidden md:flex ml-auto gap-9 text-lg text-white cursor-pointer">
        {navItems.map((items) => (
          <p key={items.item} className="hover:underline underline-offset-8 hover:text-cyan-500">
            {items.item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
