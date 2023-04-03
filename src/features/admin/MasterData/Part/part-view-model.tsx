import { config } from "@common/utils";
import { IPaginatedData, PaginatedData } from "@domain/models/paginated-data";
import { IPart, Part } from "@domain/models/part";
import { PartRepository } from "@domain/repositories/part-repository";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export function usePart(partRepository: PartRepository) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [deleteConfirmShow, setDeleteConfirmShow] = useState(false);
    const navigate = useNavigate();
    const partRef = useRef<PaginatedData<Part>>(
        PaginatedData.create<Part>({
            data: [],
            lastPage: 1,
            limit: Number(searchParams.get("limit")) || 10,
            page: Number(searchParams.get("page")) || 1,
            q: searchParams.get("q") || "",
        })
    );
    const [part, setPart] = useState<IPaginatedData<IPart>>(
        partRef.current.unmarshall()
    );
    const onAddData = () => {
        console.log("add Data");
    };
    const onDetail = (part: IPart) => {
        navigate(`${config.pathPrefix}master-data/part/detail/${part.id}`);
    };
    const onEdit = (part: IPart) => {
        navigate(`${config.pathPrefix}mater-data/part/${part.id}/edit`);
    };
    const onDelete = (part: IPart) => {
        partRef.current.data = partRef.current.data.map((item) =>
            item.id == part.id ? item.check() : item.uncheck()
        );
        setPart(partRef.current.unmarshall());
        setDeleteConfirmShow(true);
    };
    const onPageChange = (page: number) => {
        console.log(page);
    };
    const onConfirmDelete = () => {
        setDeleteConfirmShow(false);
        partRepository.destroy(
            partRef.current.data.find((item) => item.checked)
        );
    };
    useEffect(() => {
        setSearchParams({
            q: part.q,
            page: `${part.page}`,
            limit: `${part.limit}`,
        });
    }, [part]);
    useEffect(() => {
        partRepository
            .get({ limit: part.limit, page: part.page, q: part.q })
            .then((result) => {
                partRef.current = result;
                setPart(partRef.current.unmarshall());
            });
    }, []);
    return {
        part,
        onAddData,
        onDetail,
        onEdit,
        onDelete,
        onPageChange,
        deleteConfirmShow,
        setDeleteConfirmShow,
        onConfirmDelete,
    };
}
