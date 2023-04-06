import { config } from "@common/utils";
import { PaginatedData } from "@domain/models/paginated-data";
import { Customer, ICustomer } from "@domain/models/customer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CustomerApiRepository } from "@data/api/customer-api-repository";
import { CustomerRepository } from "@domain/repositories/customer-repository";

export default function () {
    const customerRepository: CustomerRepository = new CustomerApiRepository();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [customer, setCustomer] = useState<PaginatedData<Customer>>(
        PaginatedData.create<Customer>({
            page: 0,
            limit: 0,
            lastPage: 0,
            data: [],
        })
    );

    const onEdit = (id: string) => {
        navigate(
            `${config.pathPrefix}master-data/customer/${id}/edit-customer`
        );
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
    };

    const onConfirm = async (e: React.MouseEvent) => {
        e.preventDefault();
        const id = customer.data.find((item) => item.checked).id;
        console.log(id);
        await customerRepository.destroy(id);
        setShowModal(false);
        setCustomer((prev) => {
            const cust = PaginatedData.create<Customer>(prev.unmarshall());
            cust.data = cust.data.filter((item) => !item.checked);
            return cust;
        });
    };
    useEffect(() => {
        customerRepository
            .get({ limit: customer.limit, page: customer.page })
            .then((result) => {
                return setCustomer(result);
            });
    }, []);

    return {
        customer,
        onEdit,
        onAddData,
        showModal,
        setShowModal,
        openModal,
        onConfirm,
    };
}
