import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { create, getAll, remove, update } from '../services/manageContent';

const initialState = [];

export const retrieveData = createAsyncThunk(
  'manageContent/getAll',
  async ({ type = 'articles', params }, { rejectWithValue }) => {
    try {
      const res = await getAll(type, params);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createContent = createAsyncThunk(
  'manageContent/create',
  async ({ type, payload }, { rejectWithValue }) => {
    try {
      const res = await create(type, payload);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const updateContent = createAsyncThunk(
  'manageContent/update',
  async ({ type, id, payload }, { rejectWithValue }) => {
    try {
      const res = await update(type, id, payload);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteContent = createAsyncThunk(
  'manageContent/delete',
  async ({ type, id }, { rejectWithValue }) => {
    try {
      await remove(type, id);
      return { id };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const manageContentSlice = createSlice({
  name: 'manageContent',
  initialState,
  reducers: {},
  extraReducers: {
    [createContent.fulfilled]: (state, action) => {
      state.push(action.payload.article);
    },
    [retrieveData.fulfilled]: (state, action) => {
      return [...action.payload.articles];
    },
    [updateContent.fulfilled]: (state, action) => {
      const index = state.findIndex(
        (data) => data.id === action.payload.article.id
      );
      state[index] = {
        ...state[index],
        ...action.payload.article,
      };
    },
    [deleteContent.fulfilled]: (state, action) => {
      let index = state.findIndex(({ id }) => id == action.payload.id);
      state.splice(index, 1);
    },
  },
});

const { reducer } = manageContentSlice;
export default reducer;
