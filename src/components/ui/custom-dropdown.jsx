import { useState } from "react";
import Button from "./button";
import { cn } from "../../lib/utils";

const CustomDropdown = ({ className, isMobile, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dashboardOptions = ["Profile", "Settings", "Sign out"];
  const serviceOptions = [
    "Web Development",
    "Graphic Design",
    "Digital Marketing",
    "Content Writing",
  ];

  const options = isMobile ? dashboardOptions : serviceOptions;

  return (
    <div className={cn("relative inline-block text-left", className)}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-between w-full text-[#1E2A2E] font-medium rounded-lg text-sm focus:outline-none"
      >
        {!isMobile && (
          <span className="text-[#FFFFFF] bg-[#00AFE3] rounded-full py-2 px-3 mr-2 uppercase font-bold">
            {title.at(0)}
          </span>
        )}
        {title}
        <svg
          width="14"
          height="9"
          viewBox="0 0 14 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=" ml-2"
        >
          <path
            d="M7.75593 8.12713C7.35716 8.58759 6.64284 8.58759 6.24407 8.12713L0.638744 1.65465C0.0778678 1.00701 0.53792 -5.55611e-07 1.39467 -6.3051e-07L12.6053 -1.61058e-06C13.4621 -1.68548e-06 13.9221 1.00701 13.3613 1.65465L7.75593 8.12713Z"
            fill="#00AFE3"
          />
        </svg>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-10 mt-2 w-44 rounded-lg bg-[#FFFFFF] shadow-sm border-[.8px] border-[#DEDEDE]">
          <ul className="py-2 text-sm text-[#00AFE3]">
            {options.map((option, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-[#00AFE3] hover:text-white"
                >
                  {option}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
