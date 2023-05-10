import { config } from "@common/utils";
import { AccessApiRepository } from "@data/api/access-api-repository";
import { Access } from "@domain/models/access";
import { PaginatedData } from "@domain/models/paginated-data";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function useUserAccess() {
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [access, setAccess] = useState<PaginatedData<Access[]>>(
        PaginatedData.create<Access[]>({
            page: 0,
            limit: 10,
            lastPage: 0,
            totalRow: 0,
            data: [],
        })
    );
    const accessRepo: AccessApiRepository = new AccessApiRepository();

    const fetchAccessData = () => {
        accessRepo
            .get({ page: access.page, limit: access.limit })
            .then((result) => setAccess(result));
    };

    const toMenu = (id: string) => {
        navigate(`${config.pathPrefix}user/access/${id}/menu`);
    };
    const toEdit = (id: string) => {
        navigate(`${config.pathPrefix}user/access/edit-new-role/${id}`);
    };
    const toAddData = () => {
        navigate(`${config.pathPrefix}user/access/add-new-role`);
    };

    const onPageChange = (page: number) => {
        setAccess((prev) => {
            return PaginatedData.create({
                ...prev.unmarshall(),
                page,
            });
        });
    };
    const toDelete = (id: string) => {};
    const confirmDelete = () => {};

    useEffect(() => {
        fetchAccessData();
    }, []);

    return {
        access,
        toMenu,
        toEdit,
        toAddData,
        toDelete,
        confirmDelete,
        onPageChange,
    };
}
