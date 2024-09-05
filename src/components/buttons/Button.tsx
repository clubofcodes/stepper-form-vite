import React from "react";

const Button = ({ value = "next", customClasses = "" }) => {
  return (
    <button className={`${customClasses}`} type="button">
      {value}
    </button>
  );
};

export default Button;
