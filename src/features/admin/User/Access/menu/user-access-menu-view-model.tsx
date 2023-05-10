import { AccessApiRepository } from "@data/api/access-api-repository";
import { Access } from "@domain/models/access";
import { PaginatedData } from "@domain/models/paginated-data";
import { AccessRepository } from "@domain/repositories/access-repository";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export const useAccessMenu = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const accessRepo: AccessRepository = new AccessApiRepository();
    const [showModal, setShowModal] = useState<boolean>(false);
    const [menu, setMenu] = useState<PaginatedData<Access>>(
        PaginatedData.create<Access>({
            page: 0,
            limit: 10,
            lastPage: 0,
            totalRow: 0,
            data: [],
        })
    );

    const fetchMenuAccess = () => {
        accessRepo.show(id).then((result) => {
            setMenu(result);
        });
    };

    const onPageChange = (page: number) => {
        setMenu((prev) => {
            return PaginatedData.create({
                ...prev.unmarshall(),
                page,
            });
        });
    };

    const buttonModal = (id: string) => {
        setShowModal(!showModal);
    };

    const onBack = () => {
        navigate(-1);
    };
    useEffect(() => {
        fetchMenuAccess();
    }, [menu]);

    return {
        menu,
        showModal,
        setShowModal,
        onPageChange,
        onBack,
        buttonModal,
    };
};
