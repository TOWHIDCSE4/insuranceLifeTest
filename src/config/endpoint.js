export const PATH = "api";

export const ENDPOINT = {
  auth: {
    login: "login",
    resetPassword: "reset-password",
  },
  customers: "customers",
  customerCare: "customer-care",
  events: "events",
  eventsSend: "events/send",
  financeKnowledge: {
    getArticles: "articles",
    getMostView: "most-view",
  },
  financeSolutions: {
    financeFunds: "finance-solutions/funds",
    financeSolutions: "finance-solutions",
  },
  surveys: {
    surveys: "surveys",
    surveysCusHis: "surveys/customer-history",
    surveysComHis: "surveys/company-history",
    surveysBulkCreate: "surveys/bulk-create",
  },
};
