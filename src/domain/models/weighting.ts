import { Entity } from "./_entity";
import { DailyProgressCheck } from "./daily-progress-check";
import { ProgressCheck } from "./progress-check-dashboard";
import { Tool } from "./tool";
import { Transaction } from "./transaction";

export interface IWeighting {
    id?: string;
    tools: Tool;
    progressCheck: [];
}

export class Weighting extends Entity<IWeighting> {
    static create(props: IWeighting): Weighting {
        return new Weighting(props);
    }
    unmarshall() {
        return {
            id: this.id,
            tools: this.tools,
            progressCheck: this.progressCheck,
        };
    }

    get id(): string {
        return this._props.id;
    }
    get tools(): Tool {
        return this._props.tools;
    }
    get progressCheck(): [] {
        return this._props.progressCheck;
    }
}
