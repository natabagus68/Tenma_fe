import { AccessApiRepository } from "@data/api/access-api-repository";
import { MenuApirepository } from "@data/api/access-menu-api-repository";
import { Access } from "@domain/models/access";
import { Menu } from "@domain/models/menu";
import { PaginatedData } from "@domain/models/paginated-data";
import { Permission } from "@domain/models/permisition";
import { AccessRepository } from "@domain/repositories/access-repository";
import { MenuRepository } from "@domain/repositories/menu-repository";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export const useAccessMenu = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [permisions, setPermisions] = useState<Permission[]>([]);
    const menuRepo: MenuRepository = new MenuApirepository();
    const [showModal, setShowModal] = useState<boolean>(false);
    const [modelId, setModelId] = useState<string>("");
    const [menu, setMenu] = useState<PaginatedData<Menu>>(
        PaginatedData.create<Menu>({
            page: 0,
            limit: 10,
            lastPage: 0,
            totalRow: 0,
            data: [],
        })
    );

    const fetchMenuAccess = () => {
        menuRepo.get(id).then((result) => setMenu(result));
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
        menu.data.forEach((item) => {
            if (item.id === id) {
                setPermisions((prev) => {
                    return item.permission.map((el) => {
                        return Permission.create({
                            name: el.name,
                            active: el.active,
                            used: el.used,
                        });
                    });
                });
            }
        });
        setModelId(id);
    };

    const onBack = () => {
        navigate(-1);
    };
    const handleChangeCheckedPermission = (
        e: React.ChangeEvent<HTMLButtonElement>,
        id: string
    ) => {
        setPermisions((prev) => {
            return prev.map((item) => {
                if (id === item.id) item.active = JSON.parse(e.target.value);
                return item;
            });
        });
    };

    const savePermissions = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const data = permisions.map((item) => {
            return {
                permission_id: item.id,
                is_permission_active: item.active,
            };
        });
        console.log(data);
        await menuRepo.updatePermission(id, modelId, data);
        setModelId("");
        setPermisions([]);
        setShowModal(!showModal);
    };

    const onCancelModalPermission = (
        e: React.MouseEvent<HTMLButtonElement>
    ) => {
        e.preventDefault();
        setPermisions([]);
        setShowModal(!showModal);
        setModelId("");
    };
    const changeActiveMEnu = async (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number,
        moduleId: string
    ) => {
        setMenu((prev) => {
            return PaginatedData.create({
                ...prev.unmarshall(),
                data: prev.unmarshall().data.map((item, i) => {
                    if (index === i) {
                        item.active = !item.active;
                    }
                    return item;
                }),
            });
        });

        await menuRepo.updateRoleMenu(id, moduleId);
    };

    useEffect(() => {
        fetchMenuAccess();
    }, []);

    return {
        menu,
        showModal,
        permisions,
        setShowModal,
        onPageChange,
        onBack,
        buttonModal,
        changeActiveMEnu,
        handleChangeCheckedPermission,
        onCancelModalPermission,
        savePermissions,
    };
};
