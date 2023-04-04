import axios from "axios";
import { config } from "../../common/utils";

const api = axios.create({
  baseURL: config.apibaseUrl,
});

api.interceptors.request.use((config) => {
  const auth = localStorage.getItem("token");
  config.headers["Authorization"] = `jwt ${auth}`;
  return config;
});

export { api };
