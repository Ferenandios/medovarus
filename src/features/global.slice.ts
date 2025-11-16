import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import type {
  IState,
  AdsResponse,
  Advertisement,
  Moderator,
} from "../types/types";

export const getAds = createAsyncThunk<AdsResponse, number>(
  "global/getAds",
  async (page: number) => {
    const response = await axios.get<AdsResponse>(
      `${import.meta.env.VITE_API}/ads?page=${page}`
    );
    return response.data;
  }
);
export const getItem = createAsyncThunk<Advertisement, number>(
  "global/getItem",
  async (id: number) => {
    const response = await axios.get<Advertisement>(
      `${import.meta.env.VITE_API}/ads/${id}`
    );
    return response.data;
  }
);
export const getStats = createAsyncThunk<Moderator>(
  "global/getStats",
  async () => {
    const response = await axios.get<Moderator>(
      `${import.meta.env.VITE_API}/moderators/me`
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
  currentItem: {
    id: -1,
    title: "",
    description: "",
    price: 0,
    category: "",
    categoryId: 0,
    status: "pending",
    priority: "normal",
    createdAt: "",
    updatedAt: "",
    images: [],
    seller: {
      id: 0,
      name: "",
      rating: "",
      totalAds: 0,
      registeredAt: "",
    },
    characteristics: {},
    moderationHistory: [],
  },
  showModal: false,
  stats: {
    id: 0,
    name: "",
    email: "",
    role: "",
    statistics: {
      totalReviewed: 0,
      todayReviewed: 0,
      thisWeekReviewed: 0,
      thisMonthReviewed: 0,
      averageReviewTime: 0,
      approvalRate: 0,
    },
    permissions: [],
  },
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    clearPage: (state: IState) => {
      state.ads = [];
    },
    setShowModal: (state: IState, action: PayloadAction<boolean>) => {
      state.showModal = action.payload;
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
      })

      .addCase(getItem.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(
        getItem.fulfilled,
        (state, action: PayloadAction<Advertisement>) => {
          state.isLoading = false;
          state.currentItem = action.payload;
        }
      )

      .addCase(getItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Unknown error";
      })
      .addCase(getStats.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(
        getStats.fulfilled,
        (state, action: PayloadAction<Moderator>) => {
          state.isLoading = false;
          state.stats = action.payload;
        }
      )

      .addCase(getStats.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Unknown error";
      });
  },
});

export default globalSlice.reducer;
export const { clearPage, setShowModal } = globalSlice.actions;
