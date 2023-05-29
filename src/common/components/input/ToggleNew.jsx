const ToggleNew = ({ status, id, handleClick }) => {

    return (
        <>
            <label className="relative inline-flex items-start cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" checked={status} onChange={()=>{}}  onClick={(e)=> handleClick(e, id)} />
                <div className="w-11 h-6 rounded-full peer peer-focus:ring-4 peer-focus:ring-[#FAFAFB] dark:bg-[#d7d7d7] peer-checked:after:translate-x-full peer-checked:after:border-[#FAFAFB] after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-[#cccccc] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#667085]"></div>
                <span className="ml-3 text-center font-normal text-gray-600">{status? "Active" : "Inactive"}</span>
            </label>
        </>
    );
};

export default ToggleNew