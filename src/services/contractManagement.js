import { sendDelete, sendGet, sendPost, sendPut } from './axios';

export const createContracts = (payload) => sendPost('contracts', payload);
export const getAll = (params) => sendGet('contracts', params);
export const update = (id, payload) => sendPut(`contract/${id}`, payload);
export const remove = (id) => sendDelete(`contract/${id}`);
