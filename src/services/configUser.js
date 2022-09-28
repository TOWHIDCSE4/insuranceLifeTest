import {sendPost, sendPatch } from './axios';

export const updateUser = (payload) => sendPatch(`users/me/profile`, payload);
export const changePassword = (payload) => sendPatch(`change-password/`, payload);
export const sendAvatar = (payload) => sendPost(`user/me/avatar-upload`, payload)

