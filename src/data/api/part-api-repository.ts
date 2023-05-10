import { Part } from "@domain/models/part";
import { PartRepository } from "@domain/repositories/part-repository";
import { api } from "./_api";
import { TableParam } from "types";
import { PaginatedData } from "@domain/models/paginated-data";

export class PartApiRepository implements PartRepository {
    async get(tableParam: TableParam): Promise<PaginatedData<Part>> {
        const {
            data: { data = [] },
        } = await api.get("part", {
            params: tableParam,
        });
        return PaginatedData.create<Part>({
            data: data.map((item) =>
                Part.create({
                    id: item.id,
                    custItemId: item.cust_item_cd,
                    partCode: item.part_cd,
                    partName: item.part_name,
                    oldPartNumber: item.old_part_number,
                    itemGroupCode: item.item_group_cd,
                    itemGroupName: item.item_group_name,
                    customerModel: item.customer_model?.name,
                    customer: item.customer?.name,
                    material: item.material?.id_material,
                    materialColor: item.material?.color?.name,
                    customerModelGroup: item.customer_model_group?.name,
                    unitCd: item.unit_cd,
                    materialDetails: item.material?.detail,
                    productWeight: item.productWeight || 0,
                    customerModelId: item.customer_model?.id || "",
                    customerId: item.customer?.id || "",
                    customerModelGroupId: item.customer_model_group?.id || "",
                })
            ),
            lastPage: data.totalPage,
            limit: tableParam.limit,
            page: tableParam.page,
            q: tableParam.q,
            totalRow: data.totalRows,
        });
    }
    async show(id: string): Promise<Part> {
        const {
            data: { data = {} },
        } = await api.get(`part/${id}`);
        return Part.create({
            id: data.id,
            custItemId: data.cust_item_cd,
            partCode: data.part_cd,
            partName: data.part_name,
            oldPartNumber: data.old_part_number,
            itemGroupCode: data.item_group_cd,
            itemGroupName: data.item_group_name,
            customerModel: data.customer_model_id,
            customer: data.customer?.name,
            material: data.material?.id,
            materialColor: data.material?.color?.name,
            customerModelGroup: data.customer_model_group?.name,
            unitCd: data.unit_cd,
            materialDetails: data.material?.detail,
            productWeight: data.product_weight || 0,
            customerModelId: data.customer_model_id,
            customerId: data.customer_id,
            customerModelGroupId: data.customer_model_group_id,
        });
    }
    async store(part: Part): Promise<Part> {
        const { data: { data } = {} } = await api.post(`part`, {
            cust_item_cd: part.custItemId,
            part_cd: part.partCode,
            part_name: part.partName,
            item_group_cd: part.itemGroupCode,
            item_group_name: part.itemGroupName,
            old_part_number: part.oldPartNumber,
            customer_model_name: part.customerModelId,
            customer_name: part.customerId,
            customer_model_group_name: part.customerModelGroupId,
            material_id: part.material,
            unit_cd: part.unitCd,
            product_weight: part.productWeight,
        });
        return Part.create({
            id: data.id,
            custItemId: data.custItemId,
            partCode: data.partCode,
            partName: data.partName,
            oldPartNumber: data.oldPartNumber,
            itemGroupCode: data.itemGroupCode,
            itemGroupName: data.itemGroupName,
            customerModel: data.customerModel,
            customer: data.customer,
            material: data.material,
            materialColor: data.materialColor,
            customerModelGroup: data.customerModelGroup,
            unitCd: data.unitCd,
            materialDetails: data.materialDetails,
            productWeight: data.productWeight,
            customerModelId: data.customerModelId,
            customerId: data.customerId,
            customerModelGroupId: data.customerModelGroupId,
        });
    }
    async update(part: Part): Promise<Part> {
        const { data: { data } = {} } = await api.put(`part/${part.id}`, {
            cust_item_cd: part.custItemId,
            part_cd: part.partCode,
            part_name: part.partName,
            item_group_cd: part.itemGroupCode,
            item_group_name: part.itemGroupName,
            old_part_number: part.oldPartNumber,
            customer_model_name: part.customerModelId,
            customer_name: part.customerId,
            customer_model_group_name: part.customerModelGroupId,
            material_id: part.material,
            unit_cd: part.unitCd,
            product_weight: part.productWeight,
        });
        return Part.create({
            id: data.id,
            custItemId: data.custItemId,
            partCode: data.partCode,
            partName: data.partName,
            oldPartNumber: data.oldPartNumber,
            itemGroupCode: data.itemGroupCode,
            itemGroupName: data.itemGroupName,
            customerModel: data.customerModel,
            customer: data.customer,
            material: data.material,
            materialColor: data.materialColor,
            customerModelGroup: data.customerModelGroup,
            unitCd: data.unitCd,
            materialDetails: data.materialDetails,
            productWeight: data.productWeight,
            customerModelId: data.customerModelId,
            customerId: data.customerId,
            customerModelGroupId: data.customerModelGroupId,
        });
    }
    async destroy(part: Part): Promise<boolean> {
        await api.delete(`part/${part.id}`);
        return true;
    }
}
