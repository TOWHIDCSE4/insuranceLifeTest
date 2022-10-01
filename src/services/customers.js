import { sendGet, sendPatch } from "./axios";
import { ENDPOINT } from "../config/endpoint";

export const getCustomers = (payload) => sendGet(ENDPOINT.customers, payload);
export const updateCustomer = (id, payload) => sendPatch(`${ENDPOINT.customers}/${id}`, payload);
