import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {createContracts, getAll} from '../services/contractManagement';


const initialState = {
  data: [],
  totalItem: null,
};

export const createContract = createAsyncThunk(
  'contractManagement/createContract',
  async (payload) => {
    const res = await createContracts(payload);
    return res.data;
  }
);

export const retrieveData = createAsyncThunk(
  'contractManagement/retrieveData',
  async (payload) => {
    const res = await getAll(payload);
    console.log(res.data.contracts);
    return res.data;
  }
);

const contractManagement = createSlice({
  name: 'contractManagement',
  initialState,
  extraReducers: {
    // [searchUser.fulfilled]: (state, action) => {
    //   state.data = [...action.payload.data];
    //   state.totalItem = action.payload.total;
    // },
    [createContract.fulfilled]: (state, action) => {
      state.data.push(action.payload);
    },
    [retrieveData.fulfilled]: (state, action) => {
      state.data = [...action.payload.contracts];
    },
  },
});

const { reducer } = contractManagement;

export default reducer;
