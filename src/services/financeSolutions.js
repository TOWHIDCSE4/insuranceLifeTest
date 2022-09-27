import { sendGet, sendPost } from "./axios";
import { ENDPOINT } from "../config/endpoint";

export const getFinanceFundsData = (payload) =>
  sendGet(`${ENDPOINT.financeSolutions.financeFunds}`, payload);
export const getFinanceSolutionsData = (id, payload) =>
  sendGet(`${ENDPOINT.financeSolutions.financeSolutions}/${id}`, payload);
export const postFinanceSolutionsData = (payload) =>
  sendPost(`${ENDPOINT.financeSolutions.financeSolutions}`, payload);
