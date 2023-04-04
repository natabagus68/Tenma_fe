import {
  ILineControlCallback,
  LineControlListener,
} from "@domain/listeners/line-control-listener";
import { IDashboardLine } from "@domain/models/dashboard-line";
import { Socket } from "./_socket";

export type ILineControlSocketCallback = (
  dashboardLine: IDashboardLine
) => void;

export class LineControlSocketListener implements LineControlListener {
  constructor(private socket: Socket) {}
  onDashboardChange(callback: ILineControlCallback): void {
    const auth = localStorage.getItem("auth");
    if (auth) {
      const authJson = JSON.parse(auth);
      this.socket.io.emit("join", authJson.lineShift.line_id);
    } else {
      throw "Please Log In";
    }
    this.socket.io.on("line-control-dashboard-change", (data) => {
      callback({
        lineNo: data.line_no || "~",
        shiftNo: data.shift_no || "~",
        workOrderNo: data.work_order_no || "~",
        partNo: data.part_no || "~",
        planOutput: data.plan_output || 0,
        actualOk: data.actual_ok || 0,
        actualNg: data.actual_ng || 0,
        ngRate: data.ng_rate || 0,
      });
    });
  }
}
