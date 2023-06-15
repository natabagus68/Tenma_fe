import { config } from "@common/utils";
import { CustomerModel } from "@domain/models/customer-model";
import { PaginatedData } from "@domain/models/paginated-data";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CustomerModelApiRepository } from "@data/api/customer-model-api-repository";
import { TableParam } from "types";
import { useContext } from "react";
import CustContex from "../layout-customer-contex";
export default function useCustomerModel() {
  const { search } = useContext(CustContex);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const customerModelRepository = new CustomerModelApiRepository();
  const [params, setParams] = useState<TableParam>({
    page: 1,
    limit: 10,
    q: "",
  });
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
  const onPageChange = (
    e: React.MouseEvent<HTMLButtonElement>,
    page: number
  ) => {
    e.preventDefault();
    setParams((prev) => {
      return {
        ...prev,
        page,
      };
    });
  };
  const cancelDelete = () => {
    setShowModal(!showModal);
  };
  useEffect(() => {
    customerModelRepository
      .get({ limit: params.limit, page: params.page, q: search })
      .then((result) => setCustomerModel(result));
  }, [params.page, search]);

  return {
    customerModel,
    toAddData,
    toEdit,
    onDelete,
    onConfirmDelete,
    showModal,
    setShowModal,
    onPageChange,
    cancelDelete,
    params,
  };
}
