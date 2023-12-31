import { config } from "@common/utils";
import { AccessApiRepository } from "@data/api/access-api-repository";
import { Access } from "@domain/models/access";
import { PaginatedData } from "@domain/models/paginated-data";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function useUserAccess() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [params, setParams] = useState({
    page: 1,
    limit: 10,
  });
  const [access, setAccess] = useState<PaginatedData<Access>>(
    PaginatedData.create<Access>({
      page: 1,
      limit: 10,
      lastPage: 0,
      totalRow: 0,
      data: [],
    })
  );
  const accessRepo: AccessApiRepository = new AccessApiRepository();

  const fetchAccessData = () => {
    accessRepo
      .get({ page: params.page, limit: params.limit })
      .then((result) => setAccess(result));
  };

  const toMenu = (id: string) => {
    navigate(`${config.pathPrefix}access/${id}/menu`);
  };
  const toEdit = (id: string) => {
    navigate(`${config.pathPrefix}access/edit-new-role/${id}`);
  };
  const toAddData = () => {
    navigate(`${config.pathPrefix}access/add-new-role`);
  };

  const buttonDelete = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: Access["id"]
  ) => {
    e.preventDefault();
    setAccess((prev) => {
      return PaginatedData.create<Access>({
        ...prev.unmarshall(),
        data: prev.data.map((item) => {
          return Access.create({
            id: item.id,
            name: item.name,
            checked: id === item.id ? true : false,
          });
        }),
      });
    });

    setOpenModal(true);
  };

  const confirmDelete = () => {
    const dataId = access.data.find((item) => item.checked);
    accessRepo.destroy(dataId.id).then(() => {
      setAccess((prev) => {
        return PaginatedData.create<Access>({
          ...prev.unmarshall(),
          data: prev.data.filter((item) => !item.checked),
        });
      });
      setOpenModal(false);
    });
  };

  const onPageChange = (e: React.SyntheticEvent, page: number) => {
    e.preventDefault();
    setParams((prev) => {
      return {
        ...prev,
        page,
      };
    });
  };

  const cancelDelete = () => {
    setOpenModal(false);
  };
  useEffect(() => {
    fetchAccessData();
  }, [params.page]);

  return {
    openModal,
    access,
    toMenu,
    toEdit,
    toAddData,
    confirmDelete,
    onPageChange,
    buttonDelete,
    cancelDelete,
    params,
  };
}
