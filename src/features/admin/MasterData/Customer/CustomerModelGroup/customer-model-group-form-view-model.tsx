import { config } from "@common/utils";
import { PaginatedData } from "@domain/models/paginated-data";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CustomerModelGroup } from "@domain/models/customer-model-group";
import { CustomerModelGroupApiRepository } from "@data/api/customer-model-group-api-repository";

export default function useFormCustomerModelGroup() {
  const { id } = useParams();
  const navigate = useNavigate();
  const customerModelGroupRepository = new CustomerModelGroupApiRepository();
  const [customerModelGroup, setCustomerModelGroup] =
    useState<CustomerModelGroup>(
      CustomerModelGroup.create({
        id: "",
        name: "",
        checked: false,
      })
    );

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerModelGroup((_prev) => {
      const cmg = CustomerModelGroup.create({
        ..._prev.unmarshall(),
        [e.target.name]: e.target.value,
      });

      return cmg;
    });
  };

  const onSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    id
      ? await customerModelGroupRepository.update(customerModelGroup)
      : await customerModelGroupRepository.store(customerModelGroup);
    navigate(-1);
  };

  const onCancel = () => {
    navigate(`${config.pathPrefix}master-data/customer/customer-model-group`);
  };

  const onConfirm = () => {};
  useEffect(() => {
    if (id) {
      const data = customerModelGroupRepository.show(id).then((result) => {
        setCustomerModelGroup(result);
      });
    }
  }, []);

  return {
    id,
    customerModelGroup,
    inputOnChange,
    onSave,
    onCancel,
  };
}

