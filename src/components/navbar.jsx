import React,{useState} from "react";
import icons from "../utils/iconAccess";



function Navbar() {

  const [open, setopen] = useState(false);

  const navItems = [
    { id: 1,item: "Home",path:"#Home" },
    { id: 2, item: "About", path:"#About"},
    { id: 3, item: "Skills", path:"#Skills" },
    { id: 4, item: "Projects", path:"#Projects" },
    { id: 5, item: "Contact", path:"#Contact" }
  ];
  return (
    // logo
    <div className="flex fixed w-full z-50 py-4 px-8 items-center bg-[#05091A] ">
      <a href="/" className=" bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-2xl font-bold">
        SISIR SEN
      </a>
{/* mobile menu button */}
      <div onClick={()=>{setopen(!open)}} className="md:hidden h-9 w-9 ml-auto p-2 md:hover:bg-cyan-800 rounded-xl transition-all duration-200 active:hover:bg-cyan-800">
        <img src={icons.menuButton} alt="menu" />
      </div>


      {/* pc navbar */}

      <div className="hidden md:flex ml-auto gap-9 text-lg text-white cursor-pointer">
        {navItems.map((items) => (
          <a key={items.id} href={items.path}  className="hover:underline underline-offset-8 hover:text-cyan-500">
            {items.item}
          </a>
        ))}
      </div>


 <div
        className={`md:hidden absolute right-3 top-17 bg-[#0B1120] border border-cyan-800 rounded-2xl p-5 w-[220px] shadow-lg transition-all duration-300 ${
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-5"
        }`}
      >
        <div className="flex flex-col gap-5 text-white text-lg">
          {navItems.map((items) => (
            <a
              key={items.id}
              href={items.path}
              onClick={() => setopen(false)}
              className="hover:text-cyan-400 transition-all duration-200"
            >
              {items.item}
            </a>
          ))}
        </div>
      </div>


    </div>


  );
}

export default Navbar;
