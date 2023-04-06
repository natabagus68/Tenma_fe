import { config } from "@common/utils";
import { CustomerModel } from "@domain/models/customer-model";
import { CustomerApiRepository } from "@data/api/customer-api-repository";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function useCustomerModelForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const customerModelRepository = new CustomerApiRepository();
    const [customerModel, setCustomerModel] = useState<CustomerModel>(
        CustomerModel.create({
            id: "",
            name: "",
            checked: false,
        })
    );

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCustomerModel((prev) => {
            const cm = CustomerModel.create({
                ...prev.unmarshall(),
                [e.target.name]: e.target.value,
            });
            return cm;
        });
    };

    const onSave = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        id
            ? await customerModelRepository.update(customerModel)
            : await customerModelRepository.store(customerModel);

        navigate(-1);
    };

    const onCancel = () => {
        navigate(-1);
    };

    useEffect(() => {
        if (id) {
            customerModelRepository
                .show(id)
                .then((result) => setCustomerModel(result));
        }
    }, []);

    return {
        id,
        customerModel,
        onInputChange,
        onSave,
        onCancel,
    };
}
