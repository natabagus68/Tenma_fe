import { config } from "@common/utils";
import { AccessApiRepository } from "@data/api/access-api-repository";
import { Access } from "@domain/models/access";
import { useState, useEffect } from "react";
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

    // const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setAccess((_access) => {
    //         const access = Access.create({
    //             ..._access.unmarshall(),
    //             [e.target.name]: e.target.value,
    //         });
    //         return access;
    //     });
    // };
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
    // const onSave = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     id
    //         ? await accessRepo.update(id,access)
    //         : await accessRepo.store(access.name);
    //     navigate(-1);
    // };
    const onCancel = () => {
        navigate("../");
    };

    // useEffect(()=>{
    //     if(id){
    //         accessRepo.show(id).then((result) =>{
    //             console.log(result)
    //         })
    //     }
    // },[])
    return {
        id,
        access,
        onChangeInput,
        onSave,
        onCancel
    };
}
