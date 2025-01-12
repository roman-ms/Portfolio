import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu } from "../assets";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className="w-screen h-16 fixed z-20"
      style={{
        height: "15vh", // Adjust navbar height to 15% of viewport height
        display: "grid", // Always use a grid
        gridTemplateColumns: "15% 70% 15%", // Define grid structure
        gridTemplateRows: "1fr", // Single row
        alignItems: "center", // Vertically align items
        backgroundColor: "var(--body-bg-color)", // Match body background color
        borderBottom: "2px solid grey", // Optional border
        top: "0", // Stick navbar to the top
        outline: "2px solid red", // Debugging: Highlight navbar boundary
      }}
    >
      {/* Left Column */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          outline: "2px solid violet", // Debugging left column
        }}
      >
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Logo
          </p>
        </Link>
      </div>

      {/* Center Column */}
      <div
        style={{
          display: "flex", // Always keep the grid intact
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          outline: "2px solid blue", // Debugging center column
        }}
      >
        {!isMobile ? (
          <ul className="list-none flex flex-row gap-10">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="text-white hover:text-red-600 text-[18px] font-medium cursor-pointer"
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      {/* Right Column */}
      <div
        style={{
          display: "flex",
          justifyContent: "center", // Center burger menu horizontally
          alignItems: "center", // Center burger menu vertically
          width: "100%",
          height: "100%",
          outline: "2px solid green", // Debugging right column
        }}
      >
        {isMobile ? (
          <img
            src={menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
          />
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
