import React from "react";

const Button = ({ text, bgColor, textColor, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${bgColor} ${textColor} cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-md relative z-10 font-bold text-1md`}
    >
      {text}
    </button>
  );
};

export default Button;