import { Breadcrumbs } from "@common/components";
import useFormAccount from "./account-form-view-model";

const AddAccount = () => {
  const model = useFormAccount();
  return (
    <div className="text-[#514E4E] font-open-sans">
      <Breadcrumbs
        items={["User", "Account", model.id ? "Edit data" : "Add Data"]}
      />
      <div className="m-auto w-full border border-[#D0D3D9] rounded-[4px]">
        <div className="w-full py-6 px-8 flex justify-between items-center">
          <h1 className="font-[700] text-2xl">
            {model.id ? "Edit Data" : "Add Data"}
          </h1>
        </div>
        <div className="border-t border-[#D0D3D9] pt-5 px-8 pb-80">
          <form>
            <div className="flex flex-col gap-3">
              <label className="font-[400]">Nama</label>
              <input
                type="text"
                value={model.account.name}
                onChange={(e) => model.onChangeInput(e)}
                name="name"
                placeholder="Input name"
                className="w-[80%] border border-[#D0D3D9] rounded-lg outline-none px-4 py-2 font-400 placeholder:text-[#B8B6B6]"
              />
            </div>
            <div className="flex flex-col gap-3 mt-3">
              <label className="font-[400]">Email</label>
              <input
                type="Email"
                value={model.account.email}
                name="email"
                onChange={(e) => model.onChangeInput(e)}
                placeholder="Input email"
                className="w-[80%] border border-[#D0D3D9] rounded-lg outline-none px-4 py-2 font-400 placeholder:text-[#B8B6B6]"
              />
            </div>
            <div className="flex flex-col gap-3 mt-3 relative">
              <label className="font-[400]">Password</label>
              <input
                value={model.account.password}
                onChange={(e) => model.onChangeInput(e)}
                name="password"
                type={model.passwordShow ? "text" : "password"}
                placeholder="Input Password"
                className="w-[80%] border border-[#D0D3D9] rounded-lg outline-none px-4 py-2 font-400 placeholder:text-[#B8B6B6]"
              />
              <div
                onClick={(e) => {
                  model.onPasswordShow(e);
                }}
                className="inline  absolute top-11 left-[76.5%]"
              >
                {model.passwordShow ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-3">
              <label className="">Role</label>
              <select
                name="role_id"
                value={model.account.role_id}
                onChange={(e) => model.onChangeInput(e)}
                className="w-[80%] border border-[#D0D3D9] rounded-lg outline-none px-4 py-2 font-400"
              >
                {model.access.data.map((item, index) =>
                  item.id == model.account.role_id ? (
                    <option value={item.id} key={index} selected>
                      {item.name}
                    </option>
                  ) : (
                    <option value={item.id} key={index} selected>
                      {item.name}
                    </option>
                  )
                )}
              </select>
            </div>
            <div className="flex gap-4 mt-6">
              <button
                onClick={(e) => model.onSave(e)}
                className="bg-[#1BBDD4] text-white items-center flex justify-center w-[200px] h-[46px] rounded-[4px] text-sm font-[600]"
              >
                Save
              </button>
              <button
                className="border text-[#667085] items-center flex justify-center w-[200px] h-[46px] rounded-[4px] text-sm font-[600]"
                onClick={model.onCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAccount;

