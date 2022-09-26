import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { create, getUser, getAll, update, getSearch, remove, removeUsers, uploadFile, resetUser } from '../services/userManagement';

const initialState = {
  data: [],
  totalItem: null,
};

export const searchUser = createAsyncThunk('userManagement/getSearch', async (payload) => {
  const res = await getSearch(payload);
  return res.data;
});

export const createUser = createAsyncThunk(
  'userManagement/createUser',
  async (payload) => {
    const res = await create(payload);
    return res.data;
  }
);
export const getUserProfile = createAsyncThunk('userManagement/getUser', async () => {
  const res = await getUser();
  return res.data;
});
export const updateUser = createAsyncThunk(
  'userManagement/updateUser',
  async (data) => {
    const res = await update(data);
    return res.data;
  }
);
export const resetUserId = createAsyncThunk(
  'userManagement/updateUser',
  async (data) => {
    const res = await resetUser(data);
    return res.data;
  }
);
export const uploadFiles = createAsyncThunk(
  'userManagement/uploadFile',
  async (data) => {
    console.log(data);
    const res = await uploadFile(data);
    return res.data;
  }
);
export const retrieveData = createAsyncThunk(
  'userManagement/retrieve',
  async ({ page, limit }) => {
    const res = await getAll(page, limit);
    return res.data;
  }
);
export const removeUser = createAsyncThunk(
  'userManagement/removeUser',
  async (id) => {
    await remove(id);
    return { id };
  }
);
export const removeUserIds = createAsyncThunk(
  'userManagement/removeUser',
  async (data) => {
    const res = await removeUsers(data);
    console.log(res.data);
    return res.data;
  }
);

const useManagement = createSlice({
  name: 'userManagement',
  initialState,
  extraReducers: {
    [searchUser.fulfilled]: (state, action) => {
      state.data = [...action.payload.data];
      state.totalItem = action.payload.total;
    },
    [createUser.fulfilled]: (state, action) => {
      state.data.push(action.payload);
    },
    [retrieveData.fulfilled]: (state, action) => {
      state.data = [...action.payload.data];
      state.totalItem = action.payload.total;
    },
    [updateUser.fulfilled]: (state, action) => {
      const index = state.data.findIndex((data) => data.id === action.payload.id);
      state.data[index] = {
        ...state.data[index],
        ...action.payload,
      };
    },
    [removeUser.fulfilled]: (state, action) => {
      let index = state.data.findIndex(({ id }) => id == action.payload.id);
      state.data.splice(index, 1);
    },
    [removeUserIds.fulfilled]: (state, action) => {
      // state.data = state.data.filter(
      //   ({ id }) => action.payload.id.includes(id)
      // );
    },
  },
});

const { reducer } = useManagement;

export default reducer;
