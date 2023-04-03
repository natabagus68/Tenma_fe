import { config } from "@common/utils";
import { io, Socket as ISocket } from "socket.io-client";

export class Socket {
  public io: ISocket;
  private static instance: Socket;
  private constructor() {
    this.io = io(
      config.socketBaseUrl == "/" ? undefined : config.socketBaseUrl
    );
    this.io.on("connect", () => {
      const auth = localStorage.getItem("auth");
      if (auth) {
        const authJson = JSON.parse(auth);
        this.io.emit("join", authJson.lineShift.line_id);
      } else {
        throw "Please Log In";
      }
    });
  }
  static getInstance(): Socket {
    if (!Socket.instance) {
      Socket.instance = new Socket();
    }
    return Socket.instance;
  }
}
