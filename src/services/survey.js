import { sendGet, sendPost } from "./axios";
import { ENDPOINT } from "../config/endpoint";

export const getSurveyData = (id, payload) =>
  sendGet(`${ENDPOINT.surveys.surveys}/${id}`, payload);
export const getCustomerHisData = (id, payload) =>
  sendGet(`${ENDPOINT.surveys.surveysCusHis}/${id}`, payload);
export const getCompanyHisData = (id, payload) =>
  sendGet(`${ENDPOINT.surveys.surveysComHis}/${id}`, payload);
