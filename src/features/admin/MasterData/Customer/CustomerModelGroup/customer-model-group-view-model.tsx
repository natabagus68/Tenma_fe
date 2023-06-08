import { config } from "@common/utils";
import { PaginatedData } from "@domain/models/paginated-data";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CustomerModelGroup } from "@domain/models/customer-model-group";
import { CustomerModelGroupApiRepository } from "@data/api/customer-model-group-api-repository";
import { TableParam } from "types";
import { useContext } from "react";
import CustContex from "../layout-customer-contex";

export default function useCustomerMOdelGroup() {
  const { search } = useContext(CustContex);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const customerModelGroupRepository = new CustomerModelGroupApiRepository();
  const [params, setParams] = useState<TableParam>({
    page: 0,
    limit: 1,
    q: "",
  });
  const [customerModelGroup, setCustomerModelGroup] = useState<
    PaginatedData<CustomerModelGroup>
  >(
    PaginatedData.create<CustomerModelGroup>({
      page: 0,
      limit: 1,
      lastPage: 0,
      totalRow: 0,
      data: [],
    })
  );

  const openModal = (id: string) => {
    setCustomerModelGroup((prev) => {
      const cmg = PaginatedData.create<CustomerModelGroup>(prev.unmarshall());
      cmg.data.forEach((item) => {
        if (item.id === id) {
          item.check();
        } else {
          item.uncheck();
        }
        return item;
      });
      return cmg;
    });
    setShowModal(true);
  };

  const toAdd = () => {
    navigate(`${config.pathPrefix}master-data/customer/add-data-c3`);
  };

  const toEdit = (id: string) => {
    navigate(
      `${config.pathPrefix}master-data/customer/${id}/edit-customer-model-group`
    );
  };
  const onConfirm = async (e: React.MouseEvent) => {
    e.preventDefault();
    const id = customerModelGroup.data.find((item) => item.checked).id;
    console.log(id);
    await customerModelGroupRepository.destroy(id);
    setShowModal(false);
    setCustomerModelGroup((prev) => {
      const cust = PaginatedData.create<CustomerModelGroup>(prev.unmarshall());
      cust.data = cust.data.filter((item) => !item.checked);
      return cust;
    });
  };
  const onPageChange = (
    e: React.MouseEvent<HTMLButtonElement>,
    page: number
  ) => {
    e.preventDefault();
    setParams((item) => {
      return {
        ...item,
        page: page,
      };
    });
  };
  const cancelDelete = () => {
    setShowModal(!showModal);
  };
  useEffect(() => {
    customerModelGroupRepository
      .get({
        limit: params.limit,
        page: params.page,
        q: search,
      })
      .then((result) => setCustomerModelGroup(result));
  }, [params.page, search]);

  return {
    toAdd,
    toEdit,
    customerModelGroup,
    openModal,
    showModal,
    setShowModal,
    onConfirm,
    onPageChange,
    cancelDelete,
  };
}

