import axios from "axios";
import { AppURL, NODE_PRODUCTION_ENVIRONMENT } from "../ConstantsEnums";

export const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === NODE_PRODUCTION_ENVIRONMENT
      ? AppURL.Production
      : AppURL.Local,
  timeout: 100000,
});
