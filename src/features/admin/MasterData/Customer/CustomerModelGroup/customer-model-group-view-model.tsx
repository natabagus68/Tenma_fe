import { config } from "@common/utils";
import { PaginatedData } from "@domain/models/paginated-data";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CustomerModelGroup } from "@domain/models/customer-model-group";
import { CustomerModelGroupApiRepository } from "@data/api/customer-model-group-api-repository";
export default function useCustomerMOdelGroup() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const customerModelGroupRepository = new CustomerModelGroupApiRepository();
    const [customerModelGroup, setCustomerModelGroup] = useState<
        PaginatedData<CustomerModelGroup>
    >(
        PaginatedData.create<CustomerModelGroup>({
            page: 0,
            limit: 0,
            lastPage: 0,
            data: [],
        })
    );

    const openModal = (id: string) => {
        setCustomerModelGroup((prev) => {
            const cmg = PaginatedData.create<CustomerModelGroup>(
                prev.unmarshall()
            );
            cmg.data.map((item) => {
                if (item.id === id) {
                    item.checked = true;
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
            const cust = PaginatedData.create<CustomerModelGroup>(
                prev.unmarshall()
            );
            cust.data = cust.data.filter((item) => !item.checked);
            return cust;
        });
    };
    useEffect(() => {
        customerModelGroupRepository
            .get({
                limit: customerModelGroup.limit,
                page: customerModelGroup.page,
            })
            .then((result) => setCustomerModelGroup(result));
    }, []);

    return {
        toAdd,
        toEdit,
        customerModelGroup,
        openModal,
        showModal,
        setShowModal,
        onConfirm,
    };
}
