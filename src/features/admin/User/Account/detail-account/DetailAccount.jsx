import { Breadcrumbs } from "@common/components";
import { ArrowIcon } from "@common/components/icons/ArrowIcon";
import { Td } from "@common/components/table/Td";
import { Tr } from "@common/components/table/Tr";
import { PenAltIcon } from "@common/components/icons";
import useDetailAccount from "./detail-account-view-model";

const DetailAccount = () => {
  const model = useDetailAccount();
  return (
    <div className="text-[#514E4E] font-open-sans">
      <Breadcrumbs items={["Account", "Details"]} />
      <div className="m-auto w-full border rounded-lg">
        <div className="w-full flex justify-between items-center px-8 py-6">
          <h1 className="font-[700] text-2xl">Details</h1>
          <div className="flex justify-end items-center gap-4">
            <div className="flex gap-3">
              <button
                className="py-[12px] px-[20px] border border-[#667085] align-middle rounded-[4px] flex gap-2"
                onClick={(e) => model.onBack(e)}
              >
                <div className="flex items-center gap-3">
                  <ArrowIcon color={"#667085"} className="-rotate-90" />
                  <span className="text-sm text-[#667085]">Back</span>
                </div>
              </button>
              <button
                onClick={model.toEdit}
                className="py-[12px] px-[20px] bg-[#F79009] text-white items-center rounded-[4px] flex gap-2"
              >
                <PenAltIcon />
                <span>Edit</span>
              </button>
            </div>
          </div>
        </div>
        <div className="border-t flex flex-col px-8 py-6">
          <div className="w-full justify-star pb-4">
            <h1 className="text-2xl text-start font-[400]">User Information</h1>
          </div>
          {/* table 1 */}
          <div className="w-1/2 flex flex-col justify-center">
            <div className="flex flex-row justify-start mb-5 w-auto">
              <span className="pr-5">Status:</span>
              {model.account.id ? (
                model.account.is_verified
                  ? ( <span className="font-open-sans font-[600] text-[#12B569]">Active</span>
                ) : ( <span className="font-open-sans font-[600] text-[#F04438]">Inactive</span>)
              ) : (
                ""
              )}
            </div>
            <table className="border-none w-[90%]">
              <tbody>
                <Tr>
                  <Td className="bg-gray-50 border-none font-[400]">Name</Td>
                  <Td className="bg-gray-50 border-none font-[600]">{model.account.name}</Td>
                </Tr>
                <Tr>
                  <Td className=" border-none font-[400]">Email</Td>
                  <Td className="border-none font-[600]">{model.account.email}</Td>
                </Tr>
                <Tr>
                  <Td className="bg-gray-50 border-none font-[400]">Role</Td>
                  <Td className="bg-gray-50 border-none font-[600]">{model.account?.roles[0]?.name}</Td>
                </Tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailAccount;
