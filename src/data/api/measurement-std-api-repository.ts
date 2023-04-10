import { PaginatedData } from "@domain/models/paginated-data";
import { TableParam } from "types";
import { api } from "./_api";
import { MeasurementStd } from "@domain/models/measurement-std";
import { MeasurementStdRepository } from "@domain/repositories/measurement-std-repository";
import { Segment } from "@domain/models/segment";
import { Part } from "@domain/models/part";
export class MeasurementStdApiRepository implements MeasurementStdRepository {
    async get(params: TableParam): Promise<PaginatedData<MeasurementStd>> {
        const { data } = await api.get(`std-measurement`, {
            params: params,
        });
        console.log(data, "api");
        return PaginatedData.create({
            page: params.page,
            limit: params.limit,
            lastPage: data.totalPage,
            data: data.data.map((item) => {
                return MeasurementStd.create({
                    id: item.id,
                    part: Part.create({
                        id: item.part.id,
                        custItemId: item.part.cust_item_id,
                        partCode: item.part.part_code,
                        partName: item.part.part_name,
                        oldPartNumber: item.part.old_part_number,
                        itemGroupCode: item.part.item_group_code,
                        itemGroupName: item.part.item_group_name,
                        customerModel: item.part.customer_model,
                        customer: item.part.customer,
                        material: item.part.material,
                        materialColor: item.part.material_color,
                        customerModelGroup: item.part.customer_model_group,
                        unitCd: item.part.unit_cd,
                        materialDetails: item.part.material_details,
                        productWeight: item.part.product_weight,
                        customerModelId: item.part.customer_model_id,
                        customerId: item.part.customer_id,
                        customerModelGroupId: item.part.customer_model_group_id,
                    }),
                    segments: item.special_accept_segments.map((el) => {
                        return Segment.create({
                            id: el.id,
                            character: el.character,
                            nominal: el.nominal,
                            nominalValue: el.nominalValue,
                            upper: el.upper,
                            lower: el.lower,
                            saUpper: el.saUpper,
                            saLower: el.saLower,
                            tool: el.tool,
                            checked: el.checked,
                        });
                    }),
                    checked: false,
                });
            }),
        });
    }
    async show(id: string): Promise<MeasurementStd> {
        const { data } = await api.get(`std-measurement/${id}`);
        console.log(data.data);
        return MeasurementStd.create({
            id: data.data.id,
            part: Part.create({
                id: data.data.part.id,
                custItemId: data.data.part.cust_item_id,
                partCode: data.data.part.part_code,
                partName: data.data.part.part_name,
                oldPartNumber: data.data.part.old_part_number,
                itemGroupCode: data.data.part.item_group_code,
                itemGroupName: data.data.part.item_group_name,
                customerModel: data.data.part.customer_model,
                customer: data.data.part.customer,
                material: data.data.part.material,
                materialColor: data.data.part.material_color,
                customerModelGroup: data.data.part.customer_model_group,
                unitCd: data.data.part.unit_cd,
                materialDetails: data.data.part.material_details,
                productWeight: data.data.part.product_weight,
                customerModelId: data.data.part.customer_model_id,
                customerId: data.data.part.customer_id,
                customerModelGroupId: data.data.part.customer_model_group_id,
            }),
            segments: data.data.special_accept_segments.map((item) => {
                return Segment.create({
                    id: item.id,
                    character: item.character,
                    nominal: item.nominal,
                    nominalValue: item.nominal_value,
                    upper: item.upper,
                    lower: item.lower,
                    saUpper: item.standard_upper,
                    saLower: item.standard__ower,
                    tool: item.tool,
                    checked: item.checked,
                });
            }),
            checked: false,
        });
    }
    async store(params: MeasurementStd): Promise<MeasurementStd> {
        const { data } = await api.post(`std-measurement/`, {
            part_code: params.part.id,
            segments: params.segments.map((item) => {
                return {
                    character: item.character,
                    nominal_type: item.nominal,
                    nominal_value: item.nominalValue,
                    standard_upper: item.upper,
                    standard_lower: item.lower,
                    special_accept_lower: item.saLower,
                    special_accept_upper: item.saUpper,
                    tool_id: item.tool.id,
                };
            }),
        });

        return MeasurementStd.create({
            id: data.data.id,
            part: Part.create({
                id: data.data.part.id,
                custItemId: data.data.part.cust_item_id,
                partCode: data.data.part.part_code,
                partName: data.data.part.part_name,
                oldPartNumber: data.data.part.old_part_number,
                itemGroupCode: data.data.part.item_group_code,
                itemGroupName: data.data.part.item_group_name,
                customerModel: data.data.part.customer_model,
                customer: data.data.part.customer,
                material: data.data.part.material,
                materialColor: data.data.part.material_color,
                customerModelGroup: data.data.part.customer_model_group,
                unitCd: data.data.part.unit_cd,
                materialDetails: data.data.part.material_details,
                productWeight: data.data.part.product_weight,
                customerModelId: data.data.part.customer_model_id,
                customerId: data.data.part.customer_id,
                customerModelGroupId: data.data.part.customer_model_group_id,
            }),
            segments: data.data.special_accept_segments.map((el) => {
                return Segment.create({
                    id: el.id,
                    character: el.character,
                    nominal: el.nominal,
                    nominalValue: el.nominalValue,
                    upper: el.upper,
                    lower: el.lower,
                    saUpper: el.saUpper,
                    saLower: el.saLower,
                    tool: el.tool,
                    checked: el.checked,
                });
            }),
            checked: false,
        });
    }
    async update(params: MeasurementStd): Promise<MeasurementStd> {
        const { data } = await api.patch(`std-measurement/${params.id}`, {
            part_code: params.part.id,
            segments: params.segments.map((item) => {
                return {
                    character: item.character,
                    nominal_type: item.nominal,
                    nominal_value: item.nominalValue,
                    standard_upper: item.upper,
                    standard_lower: item.lower,
                    special_accept_lower: item.saLower,
                    special_accept_upper: item.saUpper,
                    tool_id: item.tool.id,
                };
            }),
        });

        return MeasurementStd.create({
            id: data.data.id,
            part: Part.create({
                id: data.data.part.id,
                custItemId: data.data.part.cust_item_id,
                partCode: data.data.part.part_code,
                partName: data.data.part.part_name,
                oldPartNumber: data.data.part.old_part_number,
                itemGroupCode: data.data.part.item_group_code,
                itemGroupName: data.data.part.item_group_name,
                customerModel: data.data.part.customer_model,
                customer: data.data.part.customer,
                material: data.data.part.material,
                materialColor: data.data.part.material_color,
                customerModelGroup: data.data.part.customer_model_group,
                unitCd: data.data.part.unit_cd,
                materialDetails: data.data.part.material_details,
                productWeight: data.data.part.product_weight,
                customerModelId: data.data.part.customer_model_id,
                customerId: data.data.part.customer_id,
                customerModelGroupId: data.data.part.customer_model_group_id,
            }),
            segments: data.data.special_accept_segments.map((el) => {
                return Segment.create({
                    id: el.id,
                    character: el.character,
                    nominal: el.nominal,
                    nominalValue: el.nominalValue,
                    upper: el.upper,
                    lower: el.lower,
                    saUpper: el.saUpper,
                    saLower: el.saLower,
                    tool: el.tool,
                    checked: el.checked,
                });
            }),
            checked: false,
        });
    }
    async destroy(id: string): Promise<boolean> {
        await api.delete(`std-measurement${id}`);
        return true;
    }
}