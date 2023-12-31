import { config } from "@common/utils";
import { PaginatedData } from "@domain/models/paginated-data";
import { Customer, ICustomer } from "@domain/models/customer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CustomerApiRepository } from "@data/api/customer-api-repository";
import { CustomerRepository } from "@domain/repositories/customer-repository";
import { TableParam } from "types";
import { useContext } from "react";
import CustContex from "./layout-customer-contex";
export default function () {
  const { search } = useContext(CustContex);
  const [id, setId] = useState<string>("");
  const customerRepository: CustomerRepository = new CustomerApiRepository();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [params, setParams] = useState<TableParam>({
    page: 1,
    limit: 10,
    q: "",
  });
  const [customer, setCustomer] = useState<PaginatedData<Customer>>(
    PaginatedData.create<Customer>({
      page: 0,
      limit: 0,
      lastPage: 0,
      totalRow: 0,
      data: [],
    })
  );

  const onEdit = (id: string) => {
    navigate(`${config.pathPrefix}master-data/customer/${id}/edit-customer`);
  };

  const onAddData = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(config.pathPrefix + "master-data/customer/add-data-c1");
  };
  const openModal = (id: string) => {
    setCustomer((prev) => {
      const cust = PaginatedData.create<Customer>(prev.unmarshall());
      cust.data.map((item) => {
        if (item.id == id) {
          item.checked = true;
        }
        return item;
      });

      return cust;
    });
    setShowModal(!showModal);
    setId(id);
  };

  const onConfirm = async (e: React.MouseEvent, id: string) => {
    e.preventDefault();

    await customerRepository.destroy(id);
    setCustomer((prev) => {
      return PaginatedData.create({
        ...prev.unmarshall(),
        data: prev.unmarshall().data.filter((e) => e.id !== id),
      });
    });

    setShowModal(!showModal);
    setId("");
  };

  const onCancelModal = () => {
    setId("");
    setShowModal(!showModal);
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
    customerRepository
      .get({ limit: params.limit, page: params.page, q: search })
      .then((result) => {
        return setCustomer(result);
      });
  }, [params.page, search]);

  return {
    params,
    id,
    customer,
    onEdit,
    onAddData,
    showModal,
    setShowModal,
    openModal,
    onConfirm,
    onPageChange,
    onCancelModal,
    cancelDelete,
  };
}
