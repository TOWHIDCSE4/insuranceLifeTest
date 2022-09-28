import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  updateUser,
  changePassword,
  sendAvatar,
} from '../services/configUser';

const initialState = {
  data: [],
  totalItem: 0,
  custom: [],
  contractById: null,
  refreshData: false,
};

export const updateUsers = createAsyncThunk(
  'configUser/updateUser',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await updateUser(payload);
      return { data: res.data, message: res.statusText };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const changePasswords = createAsyncThunk(
  'configUser/changePassword',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await changePassword(payload);
      return { data: res.data, message: res.statusText };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const sendAvatars = createAsyncThunk(
  'configUser/sendAvatar',
  async (payload) => {
    const res = await sendAvatar(payload);
    return res.data;
  }
);

const configUser = createSlice({
  name: 'configUser',
  initialState,
  extraReducers: {
    // [createContract.fulfilled]: (state) => {
    //   state.refreshData = true;
    //   state.refreshData = false;
    // },
  },
});


const { reducer } = configUser;

export default reducer;
