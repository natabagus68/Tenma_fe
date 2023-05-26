import { Segment3dApiRepository } from "@data/api/segment-3d-api-repository";
import { ToolApiRepository } from "@data/api/tool-api-repository";
import { Segment3D } from "@domain/models/segment-3d";
import { Tool } from "@domain/models/tool";
import { Segment3dRepository } from "@domain/repositories/segment-3d-repository";
import { ToolRepository } from "@domain/repositories/tool-repository";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export function useCreateSegment() {
    const segmentRepository: Segment3dRepository = new Segment3dApiRepository();
    const toolRepo: ToolRepository = new ToolApiRepository();
    const navigate = useNavigate();
    const { id } = useParams();
    const [segment, setSegment] = useState<Segment3D>(
        Segment3D.create({
            tool: undefined,
            segments: [null],
            progressCheckId: id,
        })
    );
    const [tools, setTools] = useState<Tool[]>([]);
    const [saveConfirmShow, setSaveConfirmShow] = useState(false);
    const onSegmentChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        e.preventDefault();
        setSegment((prevState) =>
            Segment3D.create({
                ...prevState.unmarshall(),
                [e.target.name]: e.target.value,
            })
        );
    };
    const onUpdateSegment = (
        e: React.ChangeEvent<HTMLInputElement>,
        i: number
    ) => {
        e.preventDefault();
        setSegment((prevState) =>
            prevState.duplicate().updateSegment(i, e.target.files[0])
        );
    };
    const onToolChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSegment((prevState) =>
            Segment3D.create({
                ...prevState.unmarshall(),
                tool: tools
                    .find((item) => item.id == e.target.value)
                    .unmarshall(),
            })
        );
    };
    const onAddSegment = (e: React.MouseEvent<HTMLButtonElement>) => {
        setSegment((prevState) => prevState.duplicate().createSegment());
    };
    const onRemoveSegment = (
        e: React.MouseEvent<HTMLButtonElement>,
        i: number
    ) => {
        e.preventDefault();
        setSegment((prevState) => prevState.duplicate().removeSegment(i));
    };
    const onSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSaveConfirmShow(true);
    };
    const onConfirmSave = (e: React.MouseEvent<HTMLButtonElement>) => {
        segmentRepository
            .store(segment)
            .then((res) => {
                navigate(-1);
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "ada form yang kosong",
                });
            });
    };
    const onCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
        navigate(-1);
    };
    useEffect(() => {
        toolRepo
            .get({ limit: 9999999, page: 1 })
            .then((res) => setTools(res.data));
    }, []);
    return {
        segment,
        tools,
        saveConfirmShow,
        setSaveConfirmShow,
        onSegmentChange,
        onToolChange,
        onUpdateSegment,
        onAddSegment,
        onRemoveSegment,
        onSave,
        onConfirmSave,
        onCancel,
    };
}
