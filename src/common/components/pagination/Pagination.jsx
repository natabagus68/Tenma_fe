import React, { useEffect, useState } from "react";
import { ArrowIcon } from "@common/components/icons/ArrowIcon";

const Pagination = ({ row = 0, limit = 0, page = 0, onClick = null }) => {
  console.log(row, page);
  const [count, setCount] = useState([]);
  useEffect(() => {
    const counting = Math.ceil(Number(row) / Number(limit));
    const temp = [];
    for (let i = 0; i < counting; i++) {
      temp.push(1);
    }
    setCount(temp);
  }, []);
  if (count)
    return (
      <div className="flex justify-between gap-3">
        <button
          onClick={(e) => onClick(e, page > 1 ? page - 1 : page)}
          disabled={page < 2}
          type="button"
          role="button"
          className="flex gap-4 text-[#D0D3D9] items-center px-3 py-2 rounded-[4px] border border-[#D0D3D9] hover:bg-[#667085] hover:text-white"
        >
          <div className="flex items-center gap-2">
            <ArrowIcon color={"#D0D3D9"} className="-rotate-90" />
            <span className="text-sm">Previous</span>
          </div>
        </button>

        {/* part pagination */}

        {count.map((item, i) => (
          <button
            key={i}
            type="button"
            role="button"
            onClick={(e) => onClick(e, i + 1)}
            className="text-sm flex gap-1 text-[#514E4E] items-center px-4 py-2 rounded-[4px] border border-[#D0D3D9] hover:bg-[#667085] hover:text-white"
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={(e) => onClick(e, page < count.length ? page + 1 : page)}
          disabled={page == count.length}
          type="button"
          role="button"
          className="text-sm flex gap-1 text-[#D0D3D9] items-center px-3 py-2 rounded-[4px] border border-[##667085] hover:bg-[##667085] hover:text-white"
        >
          <div className="flex items-center gap-2 text-[#667085]">
            <span className="text-sm">Next</span>
            <ArrowIcon color={"#667085"} className="rotate-90" />
          </div>
        </button>
      </div>
    );
};

export default Pagination;

