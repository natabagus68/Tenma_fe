import { useAccessMenu } from "../menu/user-access-menu-view-model";

const Modal = ({
  showHide,
  setShowHide,
  data = [],
  onChange = null,
  onCancel = null,
  onSave = null,
}) => {
  console.log(data);
  if (showHide) {
    return (
      <div className="text-[#514E4E] font-open-sans">
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
          <div className="relative w-[30%] my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none px-8">
              {/*header*/}
              <div className="flex items-center flex-col  justify-center px-5 pt-5 rounded-t ">
                <h1 className="text-2xl text-[#514E4E] text-center font-[600]">Dashboard</h1>
                <p className="text-[#514E4E] font-normal text-center text-sm">Check to grant access</p>
                <div className="w-full pt-3">
                  <div className="flex flex-col gap-3 py-4">
                    {data.map((item, i) => {
                      return (
                        <div className="flex gap-3 items-center">
                          <input
                            type="checkbox"
                            value={data[i].active}
                            onChange={onChange}
                            className="w-6 h-6 accent-gray-700"
                          />
                          <label className="text-sm">{item.name}</label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-center p-6 rounded-b gap-3">
                <button
                  type="button"
                  onClick={onCancel}
                  className="h-[46px] w-[200px] border-[#667085] bg-[#FFFFFF] text-[#667085] text-sm border rounded-[4px] font-[600]"
                > Cancel </button>
                <button
                  type="button"
                  onClick={onSave}
                  className="h-[46px] w-[200px] border-[#1BBDD4] bg-[#1BBDD4] text-[#FFFFFF] text-sm border rounded-[4px] font-[600]"
                > Save Permissions </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </div>
    );
  } else null;
};

export default Modal;

