import React from "react";

const Dropdown = ({ dropList = [], title, value, onChange }) => {
  return (
    <div className="relative w-full md:w-fit">
      <select
        id={title?.toLowerCase().replace(/\s+/g, "-")}
        aria-label={title?.toLowerCase()}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none border border-[#D9D9D9] p-1 sm:p-2 pr-6 md:pr-8 bg-[#FFFFFF] text-[#000000] text-[0.563rem] md:text-sm font-normal w-full"
      >
        <option value="">{title || "Choose an option"}</option>
        {dropList?.map((item) => (
          <option key={item.id} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 top-1 right-2 flex items-center pointer-events-none">
        <svg
          width="9"
          height="8"
          viewBox="0 0 9 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.18537 7.27695C4.99292 7.61028 4.5118 7.61028 4.31935 7.27695L0.640786 0.90549C0.448335 0.572156 0.688897 0.15549 1.0738 0.15549L8.43092 0.155489C8.81582 0.155489 9.05639 0.572156 8.86394 0.905489L5.18537 7.27695Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
};

export default Dropdown;
