import { config } from "@common/utils";
import { UserApiRepository } from "@data/api/user-api-repository";
import { PaginatedData } from "@domain/models/paginated-data";
import { User } from "@domain/models/user";
import { UserRepository } from "@domain/repositories/user-repository";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function useAccount() {
    const navigate = useNavigate();
    const userRepo: UserApiRepository = new UserApiRepository();
    const [userParam, setUserParam] = useState({
        page: 1,
        limit: 10,
        lastPage: 1,
        q: "",
    });
    const [account, setAccount] = useState<PaginatedData<User>>(
        PaginatedData.create<User>({
            page: 1,
            limit: 10,
            lastPage: 1,
            totalRow: 0,
            data: [],
        })
    );
    const [deleteConfirmShow, setDeleteConfirmShow] = useState(false);
    const onToogleActive = (e: React.MouseEvent<any>, id: User["id"]) => {
        e.preventDefault();
        userRepo.updateVerify(id).then(() => {
            setAccount((prevState) => {
                const object = prevState.duplicate();
                const newData = object.data.map((item) => {
                    if (item.id == id) item.is_verified = !item.is_verified;
                    return item;
                });
                object.updateData(newData);
                return object;
            });
        });
    };
    const onDetail = (
        e: React.MouseEvent<HTMLButtonElement>,
        id: User["id"]
    ) => {
        e.preventDefault();
        navigate(`${config.pathPrefix}user/${id}/detail`);
    };
    const onEdit = (e: React.MouseEvent<HTMLButtonElement>, id: User["id"]) => {
        e.preventDefault();
        navigate(`${config.pathPrefix}user/${id}/edit-account-user`);
    };
    const onDelete = (
        e: React.MouseEvent<HTMLButtonElement>,
        id: User["id"]
    ) => {
        e.preventDefault();
        setDeleteConfirmShow(true);
        setAccount((prevState) => {
            const newState = prevState.duplicate();
            newState.data = newState.data.map((item) =>
                item.id === id ? item.check() : item.uncheck()
            );
            return newState;
        });
    };
    const onConfirmDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        userRepo
            .delete(account.data.find((item) => item.checked).id)
            .then(() => {
                setAccount((prevState) => {
                    const newState = prevState.duplicate();
                    newState.data = newState.data.filter(
                        (item) => !item.checked
                    );
                    return newState;
                });

                setDeleteConfirmShow(false);
            });
    };
    const onCreateNewAccount = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate(`${config.pathPrefix}user/create`);
    };

    const onPageChange = (page: number) => {
        setAccount((prev) => {
            return PaginatedData.create({
                ...prev.unmarshall(),
                page,
            });
        });
    };
    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserParam((prev) => {
            return { ...prev, q: e.target.value };
        });
    };

    useEffect(() => {
        userRepo
            .get({
                q: userParam.q,
                limit: userParam.limit,
                page: userParam.page,
            })
            .then((result) =>
                setAccount(
                    PaginatedData.create({
                        limit: userParam.limit,
                        page: userParam.page,
                        lastPage: 0,
                        data: result,
                    })
                )
            );
    }, [userParam]);
    return {
        account,
        deleteConfirmShow,
        userParam,
        setDeleteConfirmShow,
        onToogleActive,
        onDetail,
        onEdit,
        onDelete,
        onConfirmDelete,
        onCreateNewAccount,
        onPageChange,
        onSearch,
    };
}
