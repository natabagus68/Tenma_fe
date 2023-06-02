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
      checked: false,
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

  const onSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (id) {
      accessRepo
        .update(id, access)
        .then(() => navigate(`${config.pathPrefix}access/`));
      navigate("../");
    } else {
      accessRepo.store(access.name).then(() => {
        navigate(`${config.pathPrefix}access/`);
      });
    }
  };

  const onCancel = () => {
    navigate("../");
  };

  useEffect(() => {
    if (id) {
      accessRepo.show(id).then((result) => {
        setAccess(result);
      });
    }
  }, []);
  return {
    id,
    access,
    onChangeInput,
    onSave,
    onCancel,
  };
}

