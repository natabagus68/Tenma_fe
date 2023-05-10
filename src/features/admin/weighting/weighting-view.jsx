import { Breadcrumbs } from "@common/components";
import { useWeighting } from "./weighting-view-model";
import ModalConfirm from "@common/components/Modal/ModalConfirm";
import moment from "moment";

const Weighting = () => {
    const model = useWeighting();
    return (
        <>
            <div className="mt-5 mb-4">
                <Breadcrumbs items={["Weighting"]} />
            </div>
            {/* form */}
            <div className="w-full py-6 border border-gray-100 rounded-md">
                <div className="px-4 pb-4 border-b border-gray-100">
                    <h1 className="font-semibold text-2xl text-gray-700">
                        Add Data
                    </h1>
                </div>
                <div className="py-5 px-4">
                    <form action="" className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="text-gray-400 text-md">
                                Tools
                            </label>
                            <select
                                name="toolID"
                                onChange={model.handleAddDataForm}
                                className="w-full py-2 px-2 outline-none text-gray-700 font-mono rounded-md border border-gray-100"
                            >
                                <option selected disabled>
                                    Tools
                                </option>
                                {model?.dataTools?.map((item) => {
                                    return (
                                        <option value={item.id}>
                                            {item?.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="text-gray-400 text-md">
                                ID Transaction
                            </label>
                            <select
                                name="transactionID"
                                onChange={model.handleAddDataForm}
                                className="w-full py-2 px-2 outline-none text-gray-700 font-mono rounded-md border border-gray-100"
                            >
                                <option selected disabled>
                                    transactions
                                </option>
                                {model.transaction?.map((item) => {
                                    return (
                                        <option value={item.id}>
                                            {item.progressTransactionID}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>

                        <div className="mt-5">
                            <button
                                onClick={model.storeAddData}
                                className="py-3 px-8 text-center bg-[#1BBDD4] text-white font-mono rounded-sm hover:scale-95 duration-200"
                            >
                                update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* weighting */}
            <div className="w-full py-6 border border-gray-100 rounded-md mt-5">
                {/* header */}
                <div className="px-4 pb-4 border-b border-gray-100 flex justify-between">
                    <h1 className="font-semibold text-2xl text-gray-700">
                        LOG Weighting
                    </h1>

                    <div className="relative w-1/5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 absolute top-2 left-3 text-gray-400"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>

                        <input
                            type="text"
                            name="search"
                            placeholder="Search tools or id trx"
                            className="w-full py-2 px-11 border border-gray-100 outline-none rounded-md placeholder:text-gray-400 text-gray-600"
                        />
                    </div>
                </div>
                {/* content */}
                <div>
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="py-4 px-4 text-left bg-gray-50 items-center text-gray-700">
                                    Tools
                                </th>
                                <th className="py-4 px-4 text-left bg-gray-50 items-center text-gray-700">
                                    ID Transaction
                                </th>
                                <th className="py-4 px-4 text-left bg-gray-50 items-center text-gray-700">
                                    Part Code
                                </th>
                                <th className="py-4 px-4 text-left bg-gray-50 items-center text-gray-700">
                                    Weight Part (gram)
                                </th>
                                <th className="py-4 px-4 text-left bg-gray-50 items-center text-gray-700">
                                    Timestamps
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {model.weighting?.map((item) => {
                                console.log(item.progressCheck);
                                return (
                                    <tr>
                                        <td className="py-4 px-4 text-left border-b border-gray-100 items-center text-gray-700">
                                            {item.tools?.name}
                                        </td>
                                        <td className="py-4 px-4 text-left border-b border-gray-100 items-center text-gray-700">
                                            TRX123456344
                                        </td>
                                        <td className="py-4 px-4 text-left border-b border-gray-100 items-center text-gray-700">
                                            {item.progressCheck.part.part_cd}
                                        </td>
                                        <td className="py-4 px-4 text-left border-b border-gray-100 items-center text-gray-700">
                                            {item.progressCheck.part_weight_qis}
                                        </td>
                                        <td className="py-4 px-4 text-left border-b border-gray-100 items-center text-gray-700">
                                            {moment(
                                                item.progressCheck.updated_at
                                            ).format("l")}
                                            &nbsp;
                                            {moment(
                                                item.progressCheck.updated_at
                                            ).format("LT")}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <ModalConfirm
                showModal={model.modal}
                setShowModal={model.setModal}
                onConfirm={model.onConfirm}
            />
        </>
    );
};

export default Weighting;
