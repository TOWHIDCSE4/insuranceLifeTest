import {sendGet} from './axios';
import {ENDPOINT} from "../config/endpoint";

export const getCustomers = (payload) => sendGet(ENDPOINT.customers, payload)