import React, { useState } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { logo } from "./assets";
import { Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { BiCart } from "react-icons/bi";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [mobileStonesOpen, setMobileStonesOpen] = useState(false);
  const [mobileRawOpen, setMobileRawOpen] = useState(false);
  const [mobileJewelryOpen, setMobileJewelryOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [desktopRawOpen, setDesktopRawOpen] = useState(false);
  const [desktopJewelryOpen, setDesktopJewelryOpen] = useState(false);
  const [desktopAboutOpen, setDesktopAboutOpen] = useState(false);
  const [desktopStonesOpen, setDesktopStonesOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  
  const closeAllMenus = () => {
    setOpen(false);
    setMobileStonesOpen(false);
    setMobileRawOpen(false);
    setMobileJewelryOpen(false);
    setMobileAboutOpen(false);
    setDesktopRawOpen(false);
    setDesktopJewelryOpen(false);
    setDesktopAboutOpen(false);
    setDesktopStonesOpen(false);
  };

  // Helper functions to close all desktop dropdowns except the one being opened
  const closeAllDesktopDropdowns = () => {
    setDesktopRawOpen(false);
    setDesktopJewelryOpen(false);
    setDesktopAboutOpen(false);
    setDesktopStonesOpen(false);
  };

  // Helper functions to close all mobile dropdowns except the one being opened
  const closeAllMobileDropdowns = () => {
    setMobileStonesOpen(false);
    setMobileRawOpen(false);
    setMobileJewelryOpen(false);
    setMobileAboutOpen(false);
  };

  const navLinks = [
    { name: "STONES", url: "#" },
    { name: "RAW DIAMOND RINGS", url: "#" },
    { name: "RING BUILDER", url: "/ring-builder" },
    { name: "JEWELRY", url: "#" },
    { name: "ABOUT", url: "#" },
  ];

  return (
    <section>
      <header className="fixed top-0 left-0 right-0 bg-[#333333] shadow-md w-full z-[999]">
        {/* Top Bar */}
        <div className="bg-[#97877a] shadow-md w-full p-3 lg:block">
          <div className="max-w-7xl mx-auto px-4 text-center text-white lg:text-lg text-sm">
            <h1>FREE SHIPPING WORLDWIDE THROUGH MAY</h1>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="max-w-7xl mx-auto px-4 py-4 relative flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={logo} alt="Logo" className="w-16" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex ml-5 space-x-8 text-white font-campton">
            {navLinks.map((link, i) => {
              if (link.name === "STONES") {
                return (
                  <div key={i} className="relative flex items-center">
                    <span
                      className="flex items-center gap-1 text-sm hover:text-[#97877a] cursor-pointer"
                      onClick={() => {
                        closeAllDesktopDropdowns();
                        setDesktopStonesOpen(!desktopStonesOpen);
                      }}
                    >
                      {link.name}
                      <ChevronDown size={16} />
                    </span>
                    {desktopStonesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-[#97877a] shadow-md rounded-md py-2 z-50">
                        <Link to="/raw-diamond" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]">Raw Diamonds</Link>
                        <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]">Gemstones</Link>
                        <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]">Wholesale for jewelers</Link>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.name === "RAW DIAMOND RINGS") {
                return (
                  <div key={i} className="relative flex items-center">
                    <span
                      className="flex items-center gap-1 text-sm hover:text-[#97877a] cursor-pointer"
                      onClick={() => {
                        closeAllDesktopDropdowns();
                        setDesktopRawOpen(!desktopRawOpen);
                      }}
                    >
                      {link.name}
                      <ChevronDown size={16} />
                    </span>
                    {desktopRawOpen && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-[#97877a] shadow-md rounded-md py-2 z-50">
                        <Link to="/ready-made-raw-diamond-ring" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]">Ready Made Raw Diamonds Rings</Link>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.name === "JEWELRY") {
                return (
                  <div key={i} className="relative flex items-center">
                    <span
                      className="flex items-center gap-1 text-sm hover:text-[#97877a] cursor-pointer"
                      onClick={() => {
                        closeAllDesktopDropdowns();
                        setDesktopJewelryOpen(!desktopJewelryOpen);
                      }}
                    >
                      {link.name}
                      <ChevronDown size={16} />
                    </span>
                    {desktopJewelryOpen && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-[#97877a] shadow-md rounded-md py-2 z-50">
                        <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]">Raw Diamond Engagement Rings</Link>
                        <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]">Ready to Ship Jewelry</Link>
                        <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]">Build Your Ring</Link>
                        <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]">Wedding Bands</Link>
                        <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]">Sapphire Engagement Rings</Link>
                        <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]">Earrings</Link>
                        <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]">Necklaces</Link>
                        <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]">Custom Jewelry Design</Link>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.name === "ABOUT") {
                return (
                  <div key={i} className="relative flex items-center">
                    <span
                      className="flex items-center gap-1 text-sm hover:text-[#97877a] cursor-pointer"
                      onClick={() => {
                        closeAllDesktopDropdowns();
                        setDesktopAboutOpen(!desktopAboutOpen);
                      }}
                    >
                      {link.name}
                      <ChevronDown size={16} />
                    </span>
                    {desktopAboutOpen && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-[#97877a] shadow-md rounded-md py-2 z-50">
                        <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]">About us</Link>
                        <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]">Sources</Link>
                        <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]">Reviews</Link>
                        <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]">Blog</Link>
                        <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]">Press</Link>
                        <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]">FAQ</Link>
                        <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]">Wholesale</Link>
                        <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]">Contact</Link>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={i}
                  to={link.url}
                  className="hover:text-[#97877a] transition-colors text-sm"
                  onClick={closeAllMenus}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex gap-5">
            <Search className="text-white" size={20} />
            <BsPerson className="text-white" size={20} />
            <BiCart className="text-white" size={20} />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              <Menu size={28} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`absolute top-0 left-0 h-screen w-screen bg-[#333333] z-50 shadow-md transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "-translate-x-full"} md:hidden`}>
          <div className="px-4 py-4 flex justify-between items-center border-b">
            <span className="text-center">
              <Link to="/">
                <img src={logo} alt="Logo" className="w-16" />
              </Link>
            </span>
            <button onClick={toggleMenu}>
              <X size={24} className="text-white" />
            </button>
          </div>

          <nav className="flex flex-col px-6 py-6 space-y-6 text-lg text-white font-campton">
            {navLinks.map((link, i) => {
              if (link.name === "STONES") {
                return (
                  <div key={i} className="relative">
                    <span 
                      onClick={() => {
                        closeAllMobileDropdowns();
                        setMobileStonesOpen(!mobileStonesOpen);
                      }} 
                      className="flex items-center gap-1 text-sm hover:text-[#97877a] cursor-pointer"
                    >
                      {link.name}
                      <ChevronDown size={16} />
                    </span>
                    {mobileStonesOpen && (
                      <div className="mt-2 w-40 bg-[#97877a] shadow-md rounded-md py-2 z-50">
                        <Link to="/raw-diamond" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]" onClick={closeAllMenus}>Raw Diamonds</Link>
                        <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]" onClick={closeAllMenus}>Gemstones</Link>
                        <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]" onClick={closeAllMenus}>Wholesale for jewelers</Link>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.name === "RAW DIAMOND RINGS") {
                return (
                  <div key={i} className="relative">
                    <span 
                      onClick={() => {
                        closeAllMobileDropdowns();
                        setMobileRawOpen(!mobileRawOpen);
                      }} 
                      className="flex items-center gap-1 text-sm hover:text-[#97877a] cursor-pointer"
                    >
                      {link.name}
                      <ChevronDown size={16} />
                    </span>
                    {mobileRawOpen && (
                      <div className="mt-2 w-40 bg-[#97877a] shadow-md rounded-md py-2 z-50">
                        <Link to="/ready-made-raw-diamond-ring" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]" onClick={closeAllMenus}>Ready Made Raw Diamonds Rings</Link>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.name === "JEWELRY") {
                return (
                  <div key={i} className="relative">
                    <span 
                      onClick={() => {
                        closeAllMobileDropdowns();
                        setMobileJewelryOpen(!mobileJewelryOpen);
                      }} 
                      className="flex items-center gap-1 text-sm hover:text-[#97877a] cursor-pointer"
                    >
                      {link.name}
                      <ChevronDown size={16} />
                    </span>
                    {mobileJewelryOpen && (
                      <div className="mt-2 w-40 bg-[#97877a] shadow-md rounded-md py-2 z-50">
                        <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]" onClick={closeAllMenus}>Raw Diamond Engagement Rings</Link>
                        <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]" onClick={closeAllMenus}>Ready to Ship Jewelry</Link>
                        <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]" onClick={closeAllMenus}>Build Your Ring</Link>
                        <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]" onClick={closeAllMenus}>Wedding Bands</Link>
                        <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]" onClick={closeAllMenus}>Sapphire Engagement Rings</Link>
                        <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]" onClick={closeAllMenus}>Earrings</Link>
                        <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]" onClick={closeAllMenus}>Necklaces</Link>
                        <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]" onClick={closeAllMenus}>Custom Jewelry Design</Link>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.name === "ABOUT") {
                return (
                  <div key={i} className="relative">
                    <span 
                      onClick={() => {
                        closeAllMobileDropdowns();
                        setMobileAboutOpen(!mobileAboutOpen);
                      }} 
                      className="flex items-center gap-1 text-sm hover:text-[#97877a] cursor-pointer"
                    >
                      {link.name}
                      <ChevronDown size={16} />
                    </span>
                    {mobileAboutOpen && (
                      <div className="mt-2 w-40 bg-[#97877a] shadow-md rounded-md py-2 z-50">
                        <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]" onClick={closeAllMenus}>About us</Link>
                        <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]" onClick={closeAllMenus}>Sources</Link>
                        <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]" onClick={closeAllMenus}>Reviews</Link>
                        <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]" onClick={closeAllMenus}>Blog</Link>
                        <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]" onClick={closeAllMenus}>Press</Link>
                        <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]" onClick={closeAllMenus}>FAQ</Link>
                        <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]" onClick={closeAllMenus}>Wholesale</Link>
                        <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-[#333333]" onClick={closeAllMenus}>Contact</Link>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link key={i} to={link.url} className="hover:text-[#97877a] transition-colors text-sm" onClick={closeAllMenus}>
                  {link.name}
                </Link>
              );
            })}

            <div className="flex items-center mt-4 gap-10">
              <Search className="text-white" size={20} />
              <BsPerson className="text-white" size={20} />
              <BiCart className="text-white" size={20} />
            </div>
          </nav>
        </div>

        {open && (
          <div className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden" onClick={() => setOpen(false)} />
        )}
      </header>

      {/* Spacer below fixed header */}
      <div className="h-[80px] md:h-[120px]" />
    </section>
  );
};

export default Header;