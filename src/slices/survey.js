import {
  createSlice,
  createAction,
  createAsyncThunk,
  isFulfilled,
} from "@reduxjs/toolkit";
import {
  getCompanyHisData,
  getCustomerHisData,
  getSurveyData,
} from "../services/survey";

const initialState = {
  customerHisDatas: [],
  companyHisDatas: [],
  status: "",
  errorMessage: "",
};

// export const getSurveyDatas = createAsyncThunk(
//   "surveyData/get",
//   async ({ payload }, { rejectWithValue }) => {
//     try {
//       const res = await getSurveyData(payload);
//       return {
//         data: res.data,
//         payload: payload,
//       };
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );
export const getCustomerHisDatas = createAsyncThunk(
  "getCustomerHisDatas/get",
  async (id, data) => {
    try {
      const res = await getCustomerHisData(id, data);
      return res.data;
    } catch (error) {
      console.log(error);
      return Promise.reject(error.data);
    }
  }
);
export const getCompanyHisDatas = createAsyncThunk(
  "companyHisDatas/get",
  async (id, data) => {
    try {
      const res = await getCompanyHisData(id, data);
      return res.data;
    } catch (error) {
      console.log(error);
      return Promise.reject(error.data);
    }
  }
);
export const getSurveyDatas = createAsyncThunk(
  "surveyData/get",
  async (data) => {
    try {
      const res = await getSurveyData(data);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      return Promise.reject(error.data);
    }
  }
);

const surveySlice = createSlice({
  name: "survey",
  initialState,
  extraReducers: (builder) => {
    // GET Customer His REDUCER
    builder.addCase(getCustomerHisDatas.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getCustomerHisDatas.fulfilled, (state, action) => {
      state.status = "success";
      state.customerHisDatas = action.payload;
    });
    builder.addCase(getCustomerHisDatas.rejected, (state, action) => {
      state.status = "rejected";
      state.errorMessage = action.error.message;
    });
    // GET Company His REDUCER
    builder.addCase(getCompanyHisDatas.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getCompanyHisDatas.fulfilled, (state, action) => {
      state.status = "success";
      state.companyHisDatas = action.payload;
    });
    builder.addCase(getCompanyHisDatas.rejected, (state, action) => {
      state.status = "rejected";
      state.errorMessage = action.error.message;
    });
    // // GET Survey REDUCER
    // builder.addCase(getSurveyDatas.pending, (state) => {
    //   state.status = "pending";
    // });
    // builder.addCase(getSurveyDatas.fulfilled, (state, action) => {
    //   state.status = "success";
    //   state.data = action.payload;
    // });
    // builder.addCase(getSurveyDatas.rejected, (state, action) => {
    //   state.status = "rejected";
    //   state.errorMessage = action.error.message;
    // });
  },
});

const { reducer } = surveySlice;

export default reducer;
