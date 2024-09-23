import React from "react";

const EditorNavbar = () => {
  return (
    <div className="navbar flex items-center justify-between px-[100px] h-[80px] bg-[#141414]">
      <div className="logo">
        <h2 className="text-2xl italic font-semibold">
          Code <span className="text-red-400">Editor</span>
        </h2>
      </div>
    </div>
  );
};

export default EditorNavbar;
