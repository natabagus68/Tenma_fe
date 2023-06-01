import { config } from "@common/utils";
import { CustomerModel } from "@domain/models/customer-model";
import { PaginatedData } from "@domain/models/paginated-data";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CustomerModelApiRepository } from "@data/api/customer-model-api-repository";
export default function useCustomerModel() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const customerModelRepository = new CustomerModelApiRepository();
  const [customerModel, setCustomerModel] = useState<
    PaginatedData<CustomerModel>
  >(
    PaginatedData.create<CustomerModel>({
      page: 0,
      limit: 0,
      lastPage: 0,
      totalRow: 0,
      data: [],
    })
  );

  const toEdit = (id: string) => {
    navigate(
      `${config.pathPrefix}master-data/customer/${id}/edit-data-customer-model`
    );
  };
  const toAddData = () => {
    navigate(`${config.pathPrefix}master-data/customer/add-data-c2`);
  };

  const onDelete = (id: string) => {
    setCustomerModel((prevState) => {
      const cm = PaginatedData.create<CustomerModel>(prevState.unmarshall());
      cm.data.forEach((item) =>
        item.id == id ? item.check() : item.uncheck()
      );

      return cm;
    });
    setShowModal(true);
  };

  const onConfirmDelete = async (e: React.MouseEvent) => {
    e.preventDefault();
    const id = customerModel.data.find((item) => item.checked).id;
    console.log(id);
    await customerModelRepository.destroy(id);
    setShowModal(false);
    setCustomerModel((prev) => {
      const cust = PaginatedData.create<CustomerModel>(prev.unmarshall());
      cust.data = cust.data.filter((item) => !item.checked);
      return cust;
    });
  };
  const onPageChange = (page: number) => {
    setCustomerModel((prev) => {
      const data = PaginatedData.create({ ...prev.unmarshall(), page });
      return data;
    });
  };
  const onCancelModal = () => {
    setShowModal(!showModal);
  };
  useEffect(() => {
    customerModelRepository
      .get({ limit: customerModel.limit, page: customerModel.page })
      .then((result) => setCustomerModel(result));
  }, []);

  return {
    customerModel,
    toAddData,
    toEdit,
    onDelete,
    onConfirmDelete,
    showModal,
    setShowModal,
    onPageChange,
    onCancelModal,
  };
}

