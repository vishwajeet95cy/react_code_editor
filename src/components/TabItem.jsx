import React from "react";
import PropTypes from "prop-types";

const TabItem = ({ name, active, handleClick }) => {
  return (
    <div
      onClick={() => {
        handleClick(name);
      }}
      className={`tab cursor-pointer p-2 bg-[#1E1E1E] text-[15px] ${
        active ? "font-bold" : ""
      }`}
    >
      {name.toUpperCase()}
    </div>
  );
};

TabItem.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default TabItem;
