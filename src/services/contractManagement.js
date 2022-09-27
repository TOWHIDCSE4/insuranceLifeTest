import { sendDelete, sendGet, sendPost, sendPut } from './axios';

export const createContracts = (payload) => sendPost('contracts', payload);
export const getAll = (params) => sendGet('contracts', params);
export const update = ({id, data}) => sendPut(`contracts/${id}`, data);
export const remove = (id) => sendDelete(`contract/${id}`);
export const getById = (params) => sendGet(`contracts/${params}`);
export const getCustom = ({name, limit, offset}) => sendGet(`customers?name=${name}&limit=${limit}&offset=${offset}`);
