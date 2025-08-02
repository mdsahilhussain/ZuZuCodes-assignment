import React from "react";
import { cn } from "../../lib/utils";

const Button = (props) => {
  const { className, ...rest } = props;
  return (
    <button
      type="button"
      {...rest}
      className={cn(
        "text-base font-medium px-[1.5rem] py-[4px] rounded-[0.25rem] text-[#FFFFFF] bg-[#00AFE3] cursor-pointer hover:opacity-90 transition-opacity duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
