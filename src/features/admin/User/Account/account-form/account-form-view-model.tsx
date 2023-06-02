import { AccessApiRepository } from "@data/api/access-api-repository";
import { UserApiRepository } from "@data/api/user-api-repository";
import { Access } from "@domain/models/access";
import { PaginatedData } from "@domain/models/paginated-data";
import { User } from "@domain/models/user";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function useFormAccount() {
  const { id } = useParams();
  const navigate = useNavigate();
  const accessRepo = new AccessApiRepository();
  const userRepo = new UserApiRepository();
  const [passwordShow, setPasswordShow] = useState<boolean>(false);
  const [access, setAccess] = useState<PaginatedData<Access>>(
    PaginatedData.create<Access>({
      page: 1,
      limit: 10,
      lastPage: 0,
      data: [],
    })
  );
  const [account, setAccout] = useState<User>(
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

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccout((prevState) => {
      const data = User.create(prevState.unmarshall());
      data.updateUser({
        ...prevState.unmarshall(),
        [e.target.name]: e.target.value,
      });
      return data;
    });
  };

  const onCancel = () => {
    navigate("../");
  };
  const fetchRoleData = () => {
    accessRepo
      .get({ page: access.page, limit: access.limit })
      .then((result) => setAccess(result));
  };

  const onPasswordShow = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setPasswordShow(!passwordShow);
  };

  const onSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    id
      ? userRepo.update(id, account).then(() => navigate(-1))
      : userRepo.create(account).then(() => navigate(-1));
  };
  const fetchById = () => {
    userRepo.show(id).then((result) => setAccout(result));
  };
  useEffect(() => {
    if (id) {
      fetchById();
      fetchRoleData();
    } else {
      fetchRoleData();
    }
  }, []);

  return {
    id,
    account,
    passwordShow,
    access,
    onChangeInput,
    onCancel,
    onPasswordShow,
    onSave,
  };
}

