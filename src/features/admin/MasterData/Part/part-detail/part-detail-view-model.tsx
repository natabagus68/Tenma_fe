import { config } from "@common/utils";
import { PartApiRepository } from "@data/api/part-api-repository";
import { IPart, Part } from "@domain/models/part";
import { PartRepository } from "@domain/repositories/part-repository";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function usePartDetail() {
  const partRepository = new PartApiRepository();
  const navigate = useNavigate();
  const partRef = useRef(Part.createEmpty());
  const [part, setPart] = useState<IPart>(partRef.current);
  const { partId } = useParams();
  const onBack = () => {
    navigate(-1);
  };
  const onEdit = () => {
    navigate(`${config.pathPrefix}master-data/part/${part.id}/edit`);
  };
  useEffect(() => {
    partRepository.showForDetail(partId).then((result) => {
      partRef.current = Part.create(result.unmarshall());
      setPart(partRef.current.unmarshall());
    });
  }, []);
  return { part, onBack, onEdit };
}

