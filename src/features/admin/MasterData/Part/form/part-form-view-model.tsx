import { Part } from "@domain/models/part";
import { PartRepository } from "@domain/repositories/part-repository";
import { useRef } from "react";

export function usePartForm(partRepository:PartRepository){
    const partRef = useRef(Part.createEmpty())
}