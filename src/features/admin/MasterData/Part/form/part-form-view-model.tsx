import { ICustomer } from "@domain/models/customer";
import { ICustomerModel } from "@domain/models/customer-model";
import { ICustomerModelGroup } from "@domain/models/customer-model-group";
import { IMaterial } from "@domain/models/material";
import { IPart, Part } from "@domain/models/part";
import { CustomerModelGroupRepository } from "@domain/repositories/customer-model-group-repository";
import { CustomerModelRepository } from "@domain/repositories/customer-model-repository";
import { CustomerRepository } from "@domain/repositories/customer-repository";
import { MaterialRepository } from "@domain/repositories/material-repository";
import { PartRepository } from "@domain/repositories/part-repository";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export function usePartForm(
    partRepository: PartRepository,
    customerModelRepository: CustomerModelRepository,
    customerRepository: CustomerRepository,
    customerModelGroupRepository: CustomerModelGroupRepository,
    materialRepository: MaterialRepository
) {
    const navigate = useNavigate();
    const { partId } = useParams();
    const [part, setPart] = useState<IPart>();
    const [customerModels, setCustomerModels] = useState<ICustomerModel[]>([]);
    const [customers, setCustomers] = useState<ICustomer[]>([]);
    const [customerModelGroups, setCustomerModelGroups] = useState<
        ICustomerModelGroup[]
    >([]);
    const [materials, setMaterials] = useState<IMaterial[]>([]);
    const onFormChange = (name: keyof IPart, value: IPart[keyof IPart]) => {
        setPart((prevState) => ({ ...prevState, [name]: value }));
    };
    const onSubmit = async () => {
        try {
          if (partId) {
            await partRepository.update(Part.create(part))
            Swal.fire({
              icon: "success",
              title: "Update Part Successed",
              timer: 1500,
              showConfirmButton: false,
            })
          } else {
            // console.log(part)
          }
        } catch (e) {
            console.error(e)
        }
    };
    const onCancel = () => {
        navigate(-1);
    };
    useEffect(() => {
        customerModelRepository
            .get({ limit: 99999, page: 1 })
            .then((result) =>
                setCustomerModels(result.data.map((item) => item.unmarshall()))
            );
        customerRepository
            .get({ limit: 99999, page: 1 })
            .then((result) =>
                setCustomers(result.data.map((item) => item.unmarshall()))
            );
        customerModelGroupRepository
            .get({ limit: 99999, page: 1 })
            .then((result) =>
                setCustomerModelGroups(
                    result.data.map((item) => item.unmarshall())
                )
            );
        materialRepository
            .get({ limit: 99999, page: 1 })
            .then((result) =>
                setMaterials(result.data.map((item) => item.unmarshall()))
            );
    }, []);
    useEffect(() => {
        partRepository
            .show(partId)
            .then((result) => setPart(result.unmarshall()));
    }, [partId]);
    return {
        part,
        customers,
        customerModels,
        customerModelGroups,
        materials,
        partId,
        onFormChange,
        onSubmit,
        onCancel,
    };
}
