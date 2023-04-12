import { config } from "@common/utils";
import { UserApiRepository } from "@data/api/user-api-repository";
import { PaginatedData } from "@domain/models/paginated-data";
import { User } from "@domain/models/user";
import { UserRepository } from "@domain/repositories/user-repository";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function useAccount() {
    const navigate = useNavigate();
    const userRepo: UserRepository = new UserApiRepository();
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
            data: [],
        })
    );
    const [deleteConfirmShow, setDeleteConfirmShow] = useState(false);
    const onToogleActive = (e: React.MouseEvent<any>, id: User["id"]) => {
        e.preventDefault();
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
        navigate(`${config.pathPrefix}user/${id}/edit`);
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
            });
    };
    const onCreateNewAccount = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate(`${config.pathPrefix}user/create`);
    };
    useEffect(() => {
        // userRepo.get({
        //     q: userParam.q,
        //     limit: userParam.limit,
        //     page: userParam.page
        // }).then(result => setAccount(PaginatedData.d))
    }, [userParam]);
    return {
        account,
        deleteConfirmShow,
        setDeleteConfirmShow,
        onToogleActive,
        onDetail,
        onEdit,
        onDelete,
        onConfirmDelete,
        onCreateNewAccount,
    };
}