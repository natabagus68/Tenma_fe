import React, { useState, useEffect } from "react";
import { Material } from "@domain/models/material";
import { useNavigate, useParams } from "react-router-dom";
import { MaterialRepository } from "@domain/repositories/material-repository";
import { MaterialApiRepository } from "@data/api/material-api-repository";
import { PaginatedData } from "@domain/models/paginated-data";
import { Color } from "@domain/models/color";
import { ColorRepository } from "@domain/repositories/color-repository";
import { ColorApiRepository } from "@data/api/color-api-repository";

export function useMaterialForm() {
    const { id } = useParams();
    const materialRepository: MaterialRepository = new MaterialApiRepository();
    const colorRepository: ColorRepository = new ColorApiRepository();
    const navigate = useNavigate();
    const [material, setMaterial] = useState<Material>(
        Material.create({
            idMaterial: "",
            name: "",
            materialDetail: "",
            colorId: "",
        })
    );
    const [colors, setColors] = useState<PaginatedData<Color>>(
        PaginatedData.create<Color>({
            page: 0,
            limit: 0,
            lastPage: 0,
            data: [],
        })
    );
    const onMaterialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMaterial((_material) => {
            const material = Material.create({
                ..._material.unmarshall(),
                [e.target.name]: e.target.value,
            });
            return material;
        });
    };
    const onSave = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        id
            ? await materialRepository.update(material)
            : await materialRepository.store(material);
        navigate(-1);
    };
    const onCancel = () => {
        navigate(-1);
    };
    useEffect(() => {
        colorRepository
            .get({ limit: 99999, page: 1 })
            .then((result) => setColors(result));
        if (id) {
            materialRepository.show(id).then((result) => setMaterial(result));
        }
    }, []);
    return {
        material,
        onMaterialChange,
        onSave,
        onCancel,
        colors,
    };
}
