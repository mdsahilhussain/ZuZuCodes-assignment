import React from "react";
import { cn } from "../../lib/utils";

const Button = ({className, children, ...props}) => {
  return (
    <button
      type="button"
      {...props}
      className={cn(
        "h-fit w-fit text-[14px] sm:text-base font-medium px-[1.5rem] py-[4px] rounded-[0.25rem] text-[#FFFFFF] bg-[#00AFE3] cursor-pointer hover:opacity-90 transition-opacity duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
