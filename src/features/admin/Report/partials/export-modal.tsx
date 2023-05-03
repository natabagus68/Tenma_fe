import { useReport } from "../report/report-model";

export const ExportModal = ({ model = useReport() }) => {
    return (
        model.exportModalShow && (
            <div className="w-screen h-screen fixed top-0 left-0 flex justify-center z-30 p-6 transition">
                <div className="w-screen h-screen absolute top-0 left-0 z-30 bg-black opacity-40"></div>
                <div className="w-screen h-screen overflow-auto z-40 flex">
                    <form className="m-auto" onSubmit={model.onExport}>
                        <div className="flex flex-col bg-white rounded-3xl shadow-[0px_20px_24px_-4px_rgba(16,_24,_40,_0.08),_0px_8px_8px_-4px_rgba(16,_24,_40,_0.03)] px-6 py-6">
                            <div className="mx-auto flex">
                                <svg
                                    width={16}
                                    height={17}
                                    viewBox="0 0 16 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M7.00284 9.0759C7.00096 9.05084 7 9.02553 7 9V1C7 0.448 7.447 0 8 0C8.553 0 9 0.448 9 1V8.99982L11.4 7.2C11.842 6.867 12.469 6.958 12.8 7.4C13.132 7.842 13.042 8.469 12.6 8.8L8.6 11.8C8.423 11.933 8.211 12 8 12C7.799 12 7.598 11.939 7.425 11.818L3.425 9.004C2.973 8.686 2.864 8.062 3.182 7.611C3.5 7.159 4.123 7.05 4.575 7.368L7.00284 9.0759ZM2 14V15H14V14C14 13.45 14.45 13 15 13C15.55 13 16 13.45 16 14V16C16 16.55 15.55 17 15 17H1C0.45 17 0 16.55 0 16V14C0 13.45 0.45 13 1 13C1.55 13 2 13.45 2 14Z"
                                        fill="#667085"
                                    />
                                </svg>
                                <div className="ml-4 text-[#313030] font-semibold">
                                    Export Report
                                </div>
                            </div>
                            <div className="mx-auto mt-1">
                                <div className="text-[#514E4E] text-sm">
                                    Please set date range before export report
                                </div>
                            </div>
                            <div className="grid grid-cols-4 gap-4 mt-7 items-center">
                                <label
                                    htmlFor="dateFromInput"
                                    className="text-[#514E4E] text-sm font-semibold"
                                >
                                    Date From
                                </label>
                                <div className="col-span-3">
                                    <div className="relative">
                                        <input
                                            name="dateFrom"
                                            value={model.exportDate.dateFrom}
                                            onChange={model.exportHandleForm}
                                            className="rounded-[4px] border border-[#667085] pl-[42px] pr-[22px] py-4 placeholder:text-[#667085] w-full"
                                            type="date"
                                            id="dateFromInput"
                                            placeholder="Select date"
                                        />
                                        <div className="absolute top-0 left-0 h-full flex items-center pl-[20px]">
                                            <svg
                                                width={12}
                                                height={14}
                                                viewBox="0 0 12 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M2.66667 9.66668C2.66667 9.30001 2.96667 9.00001 3.33333 9.00001C3.7 9.00001 4 9.30001 4 9.66668C4 10.0333 3.7 10.3333 3.33333 10.3333C2.96667 10.3333 2.66667 10.0333 2.66667 9.66668ZM6 9.00001H8.66667C9.03333 9.00001 9.33333 9.30001 9.33333 9.66668C9.33333 10.0333 9.03333 10.3333 8.66667 10.3333H6C5.63333 10.3333 5.33333 10.0333 5.33333 9.66668C5.33333 9.30001 5.63333 9.00001 6 9.00001ZM10 12.3333H2C1.63267 12.3333 1.33333 12.034 1.33333 11.6667V7.66668H10.6667V11.6667C10.6667 12.034 10.3673 12.3333 10 12.3333ZM2 3.00001H2.66667V3.66668C2.66667 4.03334 2.96667 4.33334 3.33333 4.33334C3.7 4.33334 4 4.03334 4 3.66668V3.00001H8V3.66668C8 4.03334 8.3 4.33334 8.66667 4.33334C9.03333 4.33334 9.33333 4.03334 9.33333 3.66668V3.00001H10C10.3673 3.00001 10.6667 3.29934 10.6667 3.66668V6.33334H1.33333V3.66668C1.33333 3.29934 1.63267 3.00001 2 3.00001ZM10 1.66668H9.33333V1.00001C9.33333 0.633344 9.03333 0.333344 8.66667 0.333344C8.3 0.333344 8 0.633344 8 1.00001V1.66668H4V1.00001C4 0.633344 3.7 0.333344 3.33333 0.333344C2.96667 0.333344 2.66667 0.633344 2.66667 1.00001V1.66668H2C0.897333 1.66668 0 2.56401 0 3.66668V11.6667C0 12.7693 0.897333 13.6667 2 13.6667H10C11.1027 13.6667 12 12.7693 12 11.6667V3.66668C12 2.56401 11.1027 1.66668 10 1.66668Z"
                                                    fill="#667085"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <label
                                    htmlFor="dateFromInput"
                                    className="text-[#514E4E] text-sm font-semibold"
                                >
                                    Date To
                                </label>
                                <div className="col-span-3">
                                    <div className="relative">
                                        <input
                                            name="dateTo"
                                            value={model.exportDate.dateTo}
                                            onChange={model.exportHandleForm}
                                            className="rounded-[4px] border border-[#667085] pl-[42px] pr-[22px] py-4 placeholder:text-[#667085] w-full appearance-none"
                                            type="date"
                                            id="dateFromInput"
                                            placeholder="Select date"
                                        />
                                        <div className="absolute top-0 left-0 h-full flex items-center pl-[20px]">
                                            <svg
                                                width={12}
                                                height={14}
                                                viewBox="0 0 12 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M2.66667 9.66668C2.66667 9.30001 2.96667 9.00001 3.33333 9.00001C3.7 9.00001 4 9.30001 4 9.66668C4 10.0333 3.7 10.3333 3.33333 10.3333C2.96667 10.3333 2.66667 10.0333 2.66667 9.66668ZM6 9.00001H8.66667C9.03333 9.00001 9.33333 9.30001 9.33333 9.66668C9.33333 10.0333 9.03333 10.3333 8.66667 10.3333H6C5.63333 10.3333 5.33333 10.0333 5.33333 9.66668C5.33333 9.30001 5.63333 9.00001 6 9.00001ZM10 12.3333H2C1.63267 12.3333 1.33333 12.034 1.33333 11.6667V7.66668H10.6667V11.6667C10.6667 12.034 10.3673 12.3333 10 12.3333ZM2 3.00001H2.66667V3.66668C2.66667 4.03334 2.96667 4.33334 3.33333 4.33334C3.7 4.33334 4 4.03334 4 3.66668V3.00001H8V3.66668C8 4.03334 8.3 4.33334 8.66667 4.33334C9.03333 4.33334 9.33333 4.03334 9.33333 3.66668V3.00001H10C10.3673 3.00001 10.6667 3.29934 10.6667 3.66668V6.33334H1.33333V3.66668C1.33333 3.29934 1.63267 3.00001 2 3.00001ZM10 1.66668H9.33333V1.00001C9.33333 0.633344 9.03333 0.333344 8.66667 0.333344C8.3 0.333344 8 0.633344 8 1.00001V1.66668H4V1.00001C4 0.633344 3.7 0.333344 3.33333 0.333344C2.96667 0.333344 2.66667 0.633344 2.66667 1.00001V1.66668H2C0.897333 1.66668 0 2.56401 0 3.66668V11.6667C0 12.7693 0.897333 13.6667 2 13.6667H10C11.1027 13.6667 12 12.7693 12 11.6667V3.66668C12 2.56401 11.1027 1.66668 10 1.66668Z"
                                                    fill="#667085"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3 mt-6">
                                <button
                                    onClick={model.buttonExportModal}
                                    className="rounded bg-[#1BBDD4] border border-[#1BBDD4] p-3 text-white text-sm font-semibold"
                                >
                                    Export
                                </button>
                                <button className="rounded bg-white border border-[#B8B6B6] p-3 text-[#514E4E] text-sm font-semibold">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    );
};
