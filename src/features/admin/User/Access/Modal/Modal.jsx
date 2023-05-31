import { useAccessMenu } from "../menu/user-access-menu-view-model";

const Modal = ({
  showHide,
  setShowHide,
  data = [],
  onChange = null,
  onCancel = null,
  onSave = null,
  model = useAccessMenu(),
}) => {
  if (showHide) {
    return (
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
          <div className="relative w-[30%] my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none px-8">
              {/*header*/}
              <div className="flex items-center flex-col  justify-center px-5 pt-5 rounded-t ">
                <h1 className="text-3xl text-[#514E4E] text-center font-semibold">
                  Dashboard
                </h1>
                <p className="text-[#514E4E] font-normal text-center text-xl">
                  Check to grant access{" "}
                </p>

                <div className="w-full pt-3">
                  <div className="w-full h-[40%] flex flex-col flex-wrap gap-3 ">
                    {model.permisions.map((item, i) => {
                      return (
                        <div className="flex gap-3 items-center ">
                          <input
                            type="checkbox"
                            checked={model?.permisions[i]?.active}
                            value={model?.permisions[i]?.active}
                            onChange={(e) =>
                              model.handleChangeCheckedPermission(e, item.id)
                            }
                            className="w-8 h-8 accent-gray-700  "
                          />
                          <label className="text-gray-400 text-xl">
                            {item.name}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-center p-6 rounded-b gap-3">
                <button
                  className="text-gray-100 border border-gray-100 uppercase text-sm px-12 py-3 rounded shadow  outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={onCancel}
                >
                  Cancel
                </button>
                <button
                  className="text-white bg-sky-standart  uppercase px-7 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border border-gray-100 rounded-md"
                  type="button"
                  onClick={onSave}
                >
                  Save Permissions
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    );
  } else null;
};

export default Modal;

