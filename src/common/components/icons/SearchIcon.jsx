export const  SearchIcon = ({ color = "#FFFFFF", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M3.333 7.333c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4-4-1.794-4-4zm10.472 5.529l-2.264-2.264a5.301 5.301 0 001.126-3.265A5.34 5.34 0 007.333 2 5.34 5.34 0 002 7.333a5.34 5.34 0 005.333 5.334c1.231 0 2.362-.424 3.265-1.126l2.264 2.264a.665.665 0 00.943 0 .666.666 0 000-.943z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}