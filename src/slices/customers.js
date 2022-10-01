import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCustomers, updateCustomer } from "../services/customers";
import {message} from 'antd'

const initialState = {
  data: [],
  selectedCustomer: {},
  updateCustomer: {},
  isLoading: false,
  isError: false,
  error: "",
};

export const getCustomerList = createAsyncThunk("customers/get", async () => {
  try {
    const res = await getCustomers();
    return res.data;
  } catch (error) {
    return Promise.reject(error.data);
  }
});

export const editCustomer = createAsyncThunk("customers/update", async ({ id, data }) => {
  try {
    const res = await updateCustomer(id, data);
    if (res?.status === 201 || res?.status === 200) {
      message.success("Customer updated successfully");
      return res.data;
    } else {
      message.error("Something went wrong");
    }
  } catch (error) {
    return Promise.reject(error.data);
  }
});

const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    setSelectedCustomer: (state, action) => {
      state.selectedCustomer = state.data?.find((customaer) => customaer?.customerId === action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCustomerList.fulfilled, (state, action) => {
        state.data = action.payload?.data;
      })
      .addCase(editCustomer.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(editCustomer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.updateCustomer = action.payload;
        state.error = "";
      })
      .addCase(editCustomer.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.updateCustomer = [];
      });
  },
});
export const { setSelectedCustomer } = customerSlice.actions;

export default customerSlice.reducer;
