import axios from "axios";
import { config } from "../../common/utils";

const api = axios.create({
  baseURL: config.apibaseUrl,
});

api.interceptors.request.use((config) => {
  const auth = localStorage.getItem("auth");
  const jsonAuth = auth ? JSON.parse(auth) : null;
  config.headers["Authorization"] = `jwt ${jsonAuth?.token}`;
  return config;
});

export { api };
