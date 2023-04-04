import React, { useState, useEffect } from "react";
import { Color } from "@domain/models/color";
import { useNavigate, useParams } from "react-router-dom";
import { ColorRepository } from "@domain/repositories/color-repository";
import { ColorApiRepository } from "@data/api/color-api-repository";

export function useColorForm() {
    const { id } = useParams();
    const colorRepository: ColorRepository = new ColorApiRepository();
    const navigate = useNavigate();
    const [color, setColor] = useState<Color>(
        Color.create({
            id: "",
            idColor: "",
            materialColor: "",
            checked: true,
        })
    );
    const onColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor((_color) => {
            const color = Color.create({
                ..._color.unmarshall(),
                [e.target.name]: e.target.value,
            });
            return color;
        });
    };
    const onSave = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        id
            ? await colorRepository.update(color)
            : await colorRepository.store(color);
        navigate(-1);
    };
    const onCancel = () => {
        navigate(-1);
    };
    useEffect(() => {
        if (id) {
            colorRepository.show(id).then((result) => setColor(result));
        }
    }, []);
    return {
        color,
        onColorChange,
        onSave,
        onCancel,
    };
}
