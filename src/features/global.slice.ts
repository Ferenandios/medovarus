import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import type { IState, AdsResponse } from "../types/types";

export const getAds = createAsyncThunk<AdsResponse, number>(
  "global/fetchAds",
  async (page: number) => {
    const response = await axios.get<AdsResponse>(
      `${import.meta.env.VITE_API}?page=${page}`
    );
    return response.data;
  }
);

const initialState: IState = {
  ads: [],
  pagination: {
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: 10,
  },
  isLoading: false,
  error: null,
  selectedAdId: null,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    clearPage: (state: IState) => {
      state.ads = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAds.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(
        getAds.fulfilled,
        (state, action: PayloadAction<AdsResponse>) => {
          state.isLoading = false;
          state.ads = action.payload.ads;
          state.pagination = action.payload.pagination;
        }
      )

      .addCase(getAds.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Unknown error";
      });
  },
});

export default globalSlice.reducer;
export const { clearPage } = globalSlice.actions;
