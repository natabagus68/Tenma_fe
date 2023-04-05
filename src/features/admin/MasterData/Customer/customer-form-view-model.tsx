import { CustomerApiRepository } from "@data/api/customer-api-repository";
import { CustomerRepository } from "@domain/repositories/customer-repository";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Customer } from "@domain/models/customer";

export default function useCustomerForm() {
    const navigate = useNavigate();
    const customerRepository: CustomerRepository = new CustomerApiRepository();
    const { id } = useParams();
    const [customer, setCustomer] = useState<Customer>(
        Customer.create({
            id: "",
            name: "",
            checked: false,
        })
    );

    const onCustomerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCustomer((_prev) => {
            const cm = Customer.create({
                ..._prev.unmarshall(),
                [e.target.name]: e.target.value,
            });

            return cm;
        });
    };

    const onSave = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        id
            ? await customerRepository.update(customer)
            : await customerRepository.store(customer);

        navigate("../");
    };

    const onCancel = () => {
        navigate("../");
    };

    useEffect(() => {
        if (id) {
            customerRepository.show(id).then((result) => setCustomer(result));
        }
    }, []);

    return {
        id,
        customer,
        onCustomerChange,
        onSave,
        onCancel,
    };
}
