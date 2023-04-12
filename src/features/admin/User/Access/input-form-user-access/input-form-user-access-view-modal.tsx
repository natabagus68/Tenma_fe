import { config } from "@common/utils";
import { AccessApiRepository } from "@data/api/access-api-repository";
import { Access } from "@domain/models/access";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function useInputFormAccess() {
    const { id } = useParams();
    const navigate = useNavigate();
    const accessRepo: AccessApiRepository = new AccessApiRepository();
    const [access, setAccess] = useState<Access>(
        Access.create({
            id: "",
            name: "",
        })
    );

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAccess((prevState) => {
            const newAccess = prevState.duplicate();
            newAccess.update({
                ...prevState.unmarshall(),
                [e.target.name]: e.target.value,
            });
            return newAccess;
        });
    };
    const fetchById = () => {};
    const onSave = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (id) {
            // ......
            navigate(-1);
        } else {
            accessRepo.store(access.name).then(() => {
                navigate(`${config.pathPrefix}user/access/`);
            });
        }
    };
    const onCancel = () => {
        navigate("../");
    };
    return {
        access,
        onChangeInput,
        onSave,
        onCancel
    };
}
