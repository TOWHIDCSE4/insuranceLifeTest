import {
  createSlice,
  createAction,
  createAsyncThunk,
  isFulfilled,
} from "@reduxjs/toolkit";
import {
  getFinanceFundsData,
  getFinanceSolutionsData,
  postFinanceSolutionsData,
} from "../services/financeSolutions";

const initialState = {
  getFinanceFundDatas: [],
  getFinanceDatas: [],
  postFinanceDatas: {},
  status: "",
  errorMessage: "",
};

export const getFinanceFundDatas = createAsyncThunk(
  "getFinanceFundDatas/get",
  async (data) => {
    try {
      const res = await getFinanceFundsData(data);
      return res.data;
    } catch (error) {
      //       console.log(error);
      return Promise.reject(error.data);
    }
  }
);
export const getFinanceDatas = createAsyncThunk(
  "getFinanceDatas/get",
  async (id, data) => {
    try {
      const res = await getFinanceSolutionsData(id, data);
      return res.data;
    } catch (error) {
      //       console.log(error);
      return Promise.reject(error.data);
    }
  }
);
export const postFinanceDatas = createAsyncThunk(
  "postFinanceDatas/post",
  async (data) => {
    try {
      const res = await postFinanceSolutionsData(data);
      // console.log("res", res);
      return res.data;
    } catch (error) {
      return Promise.reject(error.data);
    }
  }
);

const financeSlice = createSlice({
  name: "finance",
  initialState,
  extraReducers: (builder) => {
    // GET  REDUCER
    builder.addCase(getFinanceFundDatas.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getFinanceFundDatas.fulfilled, (state, action) => {
      state.status = "success";
      state.getFinanceFundDatas = action.payload;
    });
    builder.addCase(getFinanceFundDatas.rejected, (state, action) => {
      state.status = "rejected";
      state.errorMessage = action.error.message;
    });
    // GET  REDUCER
    builder.addCase(getFinanceDatas.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getFinanceDatas.fulfilled, (state, action) => {
      state.status = "success";
      state.getFinanceDatas = action.payload;
    });
    builder.addCase(getFinanceDatas.rejected, (state, action) => {
      state.status = "rejected";
      state.errorMessage = action.error.message;
    });
    // POST REDUCER
    builder.addCase(postFinanceDatas.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(postFinanceDatas.fulfilled, (state, action) => {
      state.status = "success";
      state.postFinanceDatas = action.payload;
    });
    builder.addCase(postFinanceDatas.rejected, (state, action) => {
      state.status = "rejected";
      state.errorMessage = action.error.message;
    });
  },
});

const { reducer } = financeSlice;

export default reducer;
