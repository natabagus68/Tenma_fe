import React from "react";

const ScaleIcon = ({ className }) => {
return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 19c0 .552-.449 1-1 1H6c-.551 0-1-.448-1-1V8c0-.552.449-1 1-1h1c0 2.757 2.243 5 5 5s5-2.243 5-5h1c.551 0 1 .448 1 1v11zM11 4.172V6a1 1 0 102 0V4.172a3 3 0 011.907 2.099c.063.221.093.46.093.729 0 1.654-1.346 3-3 3S9 8.654 9 7c0-.262.031-.495.091-.712l.007-.035.004-.015A2.975 2.975 0 0111 4.172zM18 5h-1.422A4.983 4.983 0 0012 2a4.984 4.984 0 00-4.58 3H6C4.346 5 3 6.346 3 8v11c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3V8c0-1.654-1.346-3-3-3z"
      ></path>
    </svg>
  );
}

export default ScaleIcon;
