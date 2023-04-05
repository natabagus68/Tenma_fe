import React, { useState, useEffect } from "react";
import { Tool } from "@domain/models/tool";
import { useNavigate, useParams } from "react-router-dom";
import { ToolRepository } from "@domain/repositories/tool-repository";
import { ToolApiRepository } from "@data/api/tool-api-repository";

export function useToolForm() {
    const { id } = useParams();
    const toolRepository: ToolRepository = new ToolApiRepository();
    const navigate = useNavigate();
    const [tool, setTool] = useState<Tool>(
        Tool.create({
            idTool: "",
            toolCode: "",
            name: "",
            address: "",
            checked: false,
        })
    );
    const onToolChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTool((_tool) => {
            const tool = Tool.create({
                ..._tool.unmarshall(),
                [e.target.name]: e.target.value,
            });
            return tool;
        });
    };
    const onSave = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        id
            ? await toolRepository.update(tool)
            : await toolRepository.store(tool);
        navigate(-1);
    };
    const onCancel = () => {
        navigate(-1);
    };
    useEffect(() => {
        if (id) {
            toolRepository.show(id).then((result) => setTool(result));
        }
    }, []);
    return {
        tool,
        onToolChange,
        onSave,
        onCancel,
        id,
    };
}
