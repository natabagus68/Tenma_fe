import { MaterialApiRepository } from "@data/api/material-api-repository";
import { IMaterial } from "@domain/models/material";
import { IPaginatedData, PaginatedData } from "@domain/models/paginated-data";
import { MaterialRepository } from "@domain/repositories/material-repository";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function useMaterial() {
    const materialRepository: MaterialRepository = new MaterialApiRepository();
    const [searchParams, setSearchParams] = useSearchParams();
    const [material, setMaterial] = useState<IPaginatedData<IMaterial>>(
        PaginatedData.create<IMaterial>({
            data: [],
            lastPage: 1,
            limit: Number(searchParams.get("limit")) || 10,
            page: Number(searchParams.get("page")) || 1,
            q: searchParams.get("q"),
        })
    );
    const onAdd = () => {};
    const onEdit = () => {};
    const onDelete = () => {};
    const onPageChange = (page: number) => {};
    const fetchMaterial = () => {
        materialRepository
            .get({
                limit: material.limit,
                page: material.page,
                q: material.q,
            })
            .then((result) => setMaterial(result.unmarshall()));
    };
    useEffect(() => {
        fetchMaterial();
    }, []);
    return {
        material,
        onAdd,
        onEdit,
        onDelete,
        onPageChange,
    };
}
