import { Breadcrumbs } from "@common/components";
import useCustomerForm from "./customer-form-view-model";

const CustomerFormView = () => {
  const customerForm = useCustomerForm();
  return (
    <div className="text-[#514E4e] font-open-sans">
      <Breadcrumbs items={["Customer", customerForm.id ? "Edit Data" : "Add Data"]} />
      <div className="m-auto w-full border border-[#D0D3D9] rounded-md">
        <div className="w-full flex justify-between items-center px-8 py-6">
          <h1 className="font-[700] text-2xl">{customerForm.id ? "Edit Data" : "Add Data"}</h1>
        </div>
        <div className="border-t border-[#D0D3D9] px-8 py-3">
          <form onSubmit={customerForm.onSave}>
            <div className="flex flex-col gap-3">
              <label className="mb-2 font-[400]">Customer Name</label>
              <input type="text" name="name"
                value={customerForm.customer.name}
                onChange={customerForm.onCustomerChange}
                className="w-[80%] border border-[#D0D3D9] rounded-lg outline-none px-5 py-2 text-sm placeholder:text-[#B8B6B6]"
                placeholder="Input customer name"
              />
            </div>
            <div className="flex gap-4 mt-6">
              <button type="submit"
                className="w-[180px] h-[46px] bg-[#1BBDD4] border-[#1BBDD4] rounded-md text-white font-[600]"
              >Save</button>
              <button className="w-[180px] h-[46px] border border-[#667085] text-[#667085] rounded-md font-[600]"
                onClick={customerForm.onCancel}
              >Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomerFormView;