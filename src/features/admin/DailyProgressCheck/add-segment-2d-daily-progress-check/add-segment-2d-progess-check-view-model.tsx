import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function useAddSegmentTwoD() {
    const { id } = useParams();
    const navigate = useNavigate();

    const addSegment = () => {};
    const onSave = () => {};
    const onCancel = () => {
        navigate("../");
    };
    const handelInputNameChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {};
    const handleTableInput = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {};
    return {
        id,
        onSave,
        addSegment,
        onCancel,
        handelInputNameChange,
        handleTableInput,
    };
}
