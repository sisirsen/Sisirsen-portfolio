import React, { useEffect, useState } from "react";
import icons from "../utils/iconAccess";
import { motion } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: 1, item: "Home", section: "#home" },
    { id: 2, item: "About", section: "#about" },
    { id: 3, item: "Skills", section: "#skills" },
    { id: 4, item: "Projects", section: "#projects" },
    { id: 5, item: "Contact", section: "#contact" },
  ];

  // Detect active section
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "home";

      navItems.forEach(({ section }) => {
        const id = section.slice(1);
        const element = document.getElementById(id);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 150) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);

      // Update URL
      window.history.replaceState(null, "", `/${currentSection}`);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Navigation click
  const handleNavClick = (e, section) => {
    e.preventDefault();

    const id = section.slice(1);
    const element = document.getElementById(id);

    if (element) {
      const navbarHeight = 80;

      const position =
        element.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight;

      window.scrollTo({
        top: position,
        behavior: "smooth",
      });

      window.history.replaceState(null, "", `/${id}`);
    }

    setOpen(false);
  };

  return (
    <>
      {/* ================= DESKTOP / MAIN NAVBAR ================= */}
      <nav className="fixed left-0 top-0 z-[1000] flex w-full items-center border-b border-white/10 bg-black/20 px-4 py-4 backdrop-blur-2xl md:px-8">

        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-2xl font-bold text-transparent"
        >
          SISIR SEN
        </a>

        {/* Desktop Navigation */}
        <div className="ml-auto hidden gap-9 text-lg md:flex">
  {navItems.map(({ id, item, section }) => {
    const sectionId = section.slice(1);
    const isActive = activeSection === sectionId;

    return (
      <a
        key={id}
        href={section}
        onClick={(e) => handleNavClick(e, section)}
        className={`relative px-1 pb-2 font-medium transition-colors duration-300 ${
          isActive
            ? "text-cyan-400"
            : "text-white hover:text-cyan-400"
        }`}
      >
        {item}

        {isActive && (
          <motion.span
            layoutId="navbar-underline"
            className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-cyan-400"
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
          />
        )}
      </a>
    );
  })}
</div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open navigation"
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-200 hover:border-cyan-400/40 hover:bg-cyan-400/10 md:hidden"
        >
          <img
            src={icons.menuButton}
            alt=""
            className="h-5 w-5"
          />
        </button>
      </nav>


      {/* ================= MOBILE SIDEBAR ================= */}
      <div
        className={`fixed inset-0 z-[9999] md:hidden ${
          open ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => setOpen(false)}
          className={`absolute inset-0 h-full w-full cursor-default bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        />

        {/* Sidebar */}
        <aside
          className={`absolute right-0 top-0 h-screen w-[280px] bg-[#090D18] shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
            <div>
              

              <h2 className="mt-1 text-lg font-semibold text-white">
                Sisir Sen
              </h2>
            </div>

            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close navigation"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-2xl leading-none text-gray-400 transition-all duration-200 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400 active:scale-95"
            >
              <span className="-mt-1">×</span>
            </button>
          </div>


          {/* Navigation */}
          <nav className="px-4 py-6">
            <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">
              Menu
            </p>

            <div className="space-y-2">
              {navItems.map(({ id, item, section }) => {
                const sectionId = section.slice(1);
                const isActive = activeSection === sectionId;

                return (
                  <button
                    key={id}
                    type="button"
                    onClick={(e) => handleNavClick(e, section)}
                    className={`group flex w-full items-center justify-between rounded-xl border px-4 py-3.5 text-left transition-all duration-200 ${
                      isActive
                        ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-400"
                        : "border-transparent text-gray-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`h-2 w-2 rounded-full transition-all duration-200 ${
                          isActive
                            ? "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]"
                            : "bg-gray-600 group-hover:bg-gray-400"
                        }`}
                      />

                      <span className="text-sm font-medium">
                        {item}
                      </span>
                    </div>

                    
                  </button>
                );
              })}
            </div>
          </nav>


          {/* Sidebar Footer */}
          
        </aside>
      </div>
    </>
  );
}

export default Navbar;