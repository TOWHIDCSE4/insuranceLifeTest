import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage/session";

import loading from "./slices/loading";
import authReducer from "./slices/auth";
import events from "./slices/events";
import customerCare from "./slices/customerCare";
import financeKnowledgeReducer from "./slices/financeKnowledge";
import managementContentReducer from "./slices/managementContent";
import userManagement from "./slices/userManagement";
import contractManagement from "./slices/contractManagement";
import paymentManagement from "./slices/paymentManagement";
import surveyReducer from "./slices/surveys";
import customerReducer from "./slices/customers";
import financeSlice from "./slices/financeSolutions";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  loading: loading,
  customerCare: customerCare,
  auth: authReducer,
  financeKnowledgeReducer: financeKnowledgeReducer,
  managementContentReducer: managementContentReducer,
  events: events,
  userManagement: userManagement,
  contractManagement: contractManagement,
  paymentManagementReducer: paymentManagement,
  surveys: surveyReducer,
  customers: customerReducer,
  financeReducer: financeSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});

export const persistor = persistStore(store);
export default store;
