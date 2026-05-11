import React from "react";
import icons from "../utils/iconAccess";

function Navbar() {
  const navItems = [
    { id: 1,item: "Home",path:"#Home" },
    { id: 2, item: "About", path:"#About"},
    { id: 3, item: "Skills", path:"#Skills" },
    { id: 4, item: "Projects", path:"#Projects" },
    { id: 5, item: "Contact", path:"#Contact" }
  ];
  return (
    <div className="flex fixed w-full z-50 py-4 px-8 items-center bg-[#05091A] ">
      <div className=" bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-2xl font-bold">
        SISIR SEN
      </div>

      <div className="md:hidden h-9 w-9 ml-auto p-2 hover:bg-cyan-800 rounded-2xl transition-all duration-200">
        <img src={icons.menuButton} alt="menu" />
      </div>

      <div className="hidden md:flex ml-auto gap-9 text-lg text-white cursor-pointer">
        {navItems.map((items) => (
          <a key={items.id} href={items.path}  className="hover:underline underline-offset-8 hover:text-cyan-500">
            {items.item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
