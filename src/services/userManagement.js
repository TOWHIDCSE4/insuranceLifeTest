import { sendPost, sendGet, sendDelete, sendPut } from "./axios";

export const create = (payload) => sendPost('users', payload)
export const getUser = () => sendGet('api/user/me')
export const getSearch = (payload) => sendGet(`users/search?q=${payload.q}&page=${payload.page}&limit=${payload.limit}`)
export const getAll = (page,limit) => sendGet(`/users/search?page=${page}&limit=${limit}`)
export const update = (payload) => sendPut('users/role', payload)
export const resetUser = (payload) => sendPost('users/bulk-reinit', payload)
export const uploadFile = (payload) => sendPost('users/bulk-create-upload', payload, {headers: { "Content-Type": "multipart/form-data" }})
export const remove = (payload) => sendDelete(`users/${payload}`)
export const removeUsers = (payload) => sendDelete('users', payload,{headers:{"Content-Type": "application/json"}})
