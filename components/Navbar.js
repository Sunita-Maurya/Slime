import React from "react";

const Navbar = () => {
  return (
    <div
      className=" flex items-center mx-10 py-2 "
      style={{ maxWidth: "1730px", marginInline: "auto" }}
    >
      <img src="/assets/icons/logo.png" alt="logo" />
      <div className="absolute left-1/2 -translate-x-1/2 top-0  h-10 px-5 naviconbg">
        <div className=" flex gap-5">
          <img src="/assets/icons/bellicon.png" alt="bellicon" />
          <img src="/assets/icons/Star.png" alt="Star" />
          <img src="/assets/icons/Rectangle.png" alt="Rectangle" />
          <img src="/assets/icons/Vector.png" alt="Vector" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
