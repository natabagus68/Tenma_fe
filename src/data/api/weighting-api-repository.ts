import { Weighting } from "@domain/models/weighting";
import { WeightingRepository } from "@domain/repositories/weighting-repository";
import { api } from "./_api";
import { WeightingForm } from "@domain/models/weighting-form";
import { Transaction } from "@domain/models/transaction";
import { DailyProgressCheck } from "@domain/models/daily-progress-check";
import { Cavity } from "@domain/models/cavity-weighting";

export class WeightingApiRepository implements WeightingRepository {
  async getWeighting(search?: string): Promise<Weighting[]> {
    const { data } = await api.get("weighting-log", {
      params: {
        search,
      },
    });

    const res = data.data.map((item) => {
      return Weighting.create({
        tools: item.tool,
        progressCheck: item.progress_check,
      });
    });

    return res;
  }
  async store(props: WeightingForm): Promise<boolean> {
    await api.post("weighting-log", {
      id_tool: props.toolID,
      progress_check_id: props.transactionID,
      cavity_id: props.cavityID,
    });
    return true;
  }

  async getTransaction(): Promise<Transaction[]> {
    const { data } = await api.get("weighting-log/transaction-id-data");
    return data.data.map((item) => {
      return Transaction.create({
        id: item.id,
        progressTransactionID: item.progress_transaction_id,
      });
    });
  }

  async getCavity(transactionID: string): Promise<Cavity[]> {
    const { data } = await api.get(`weighting-log/${transactionID}/cavities`);
    return data.data.map((item: any) => {
      return Cavity.create({
        id: item.id,
        name: item.name,
        type: item.cavity_type,
      });
    });
  }
}

