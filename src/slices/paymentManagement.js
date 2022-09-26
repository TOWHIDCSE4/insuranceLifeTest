import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  create,
  getAll,
  remove,
  importFile,
} from '../services/paymentManagement';

const initialState = { data: [], total: 0 };

export const retrieveData = createAsyncThunk(
  'paymentManagement/getAll',
  async (params, { rejectWithValue }) => {
    try {
      const res = await getAll(params);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createPayment = createAsyncThunk(
  'paymentManagement/create',
  async (params, { rejectWithValue }) => {
    try {
      const res = await create(params);
      return { data: res.data, message: 'Tạo thanh toán thành công' };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const uploadFile = createAsyncThunk(
  'paymentManagement/upload',
  async (params, { rejectWithValue }) => {
    try {
      const res = await importFile(params);
      return { data: res.data, message: 'Upload thanh toán thành công' };
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const deletePayment = createAsyncThunk(
  'paymentManagement/delete',
  async (params, { rejectWithValue }) => {
    try {
      await remove(params);
      return { id: params.transactionIds, message: 'Xóa thông tin thành công' };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const paymentManagementSlice = createSlice({
  name: 'paymentManagement',
  initialState,
  reducers: {},
  extraReducers: {
    [createPayment.fulfilled]: (state, action) => {
      state.data.push(action.payload);
    },
    [retrieveData.fulfilled]: (state, action) => {
      state.data = action.payload.data;
      state.total = action.payload.total;
    },
    [deletePayment.fulfilled]: (state, action) => {
      // let index = state.data.findIndex(({ id }) =>
      //   action.payload.id.includes(id)
      // );
      // state.data.splice(index, 1);
      state.data = state.data.filter(
        ({ id }) => !action.payload.id.includes(id)
      );
    },
  },
});

const { reducer } = paymentManagementSlice;
export default reducer;
