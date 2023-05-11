import { Transaction } from "@domain/models/transaction";
import { IWeighting, Weighting } from "@domain/models/weighting";
import { WeightingForm } from "@domain/models/weighting-form";

export interface WeightingRepository {
    getWeighting(search?: string): Promise<Weighting[]>;
    store(props: WeightingForm): Promise<boolean>;
    getTransaction(): Promise<Transaction[]>;
}
