import { config } from "@common/utils";
import { UserApiRepository } from "@data/api/user-api-repository";
import { User } from "@domain/models/user";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function useDetailAccount() {
    const { id } = useParams();
    const navigate = useNavigate();
    const userRepo = new UserApiRepository();
    const [account, setAccount] = useState<User>(
        User.create({
            id: "",
            name: "",
            email: "",
            password: "",
            role_id: "",
            is_verified: false,
            photo: "",
            email_verified_at: null,
            fcm_token: "",
            created_at: "",
            updated_at: "",
            deleted_at: null,
            checked: false,
        })
    );

    const onBack = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("back");
        navigate(-1);
    };
    const toEdit = () => {
        navigate(`${config.pathPrefix}user/${id}/edit-account-user`);
    };
    useEffect(() => {
        userRepo.show(id).then((result) => setAccount(result));
    }, []);
    return {
        account,
        onBack,
        toEdit,
    };
}
