import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAll } from '../services/advice';

const initialState = { isReload: false, data: [] };

export const getAdvice = createAsyncThunk(
  'advice/getall',
  async (params, { rejectWithValue }) => {
    try {
      const res = await getAll(params);
      return { data: res.data, message: '' };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const adviceSlice = createSlice({
  name: 'advice',
  initialState,
  extraReducers: {
    [getAdvice.fulfilled]: (state, action) => {
      state.data = action.payload.data;
      state.isReload = false;
    },
  },
});

const { reducer } = adviceSlice;

export default reducer;
