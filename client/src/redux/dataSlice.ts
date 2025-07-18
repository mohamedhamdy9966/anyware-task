import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface DataState {
  announcements: any[];
  quizzes: any[];
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  announcements: [],
  quizzes: [],
  loading: false,
  error: null,
};

export const fetchAnnouncements = createAsyncThunk(
  "data/fetchAnnouncements",
  async () => {
    const response = await axios.get("http://localhost:3000/api/announcements");
    return response.data;
  }
);

export const fetchQuizzes = createAsyncThunk("data/fetchQuizzes", async () => {
  const response = await axios.get("http://localhost:3000/api/quizzes");
  return response.data;
});

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnnouncements.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAnnouncements.fulfilled, (state, action) => {
        state.loading = false;
        state.announcements = action.payload;
      })
      .addCase(fetchAnnouncements.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch announcements";
      })
      .addCase(fetchQuizzes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchQuizzes.fulfilled, (state, action) => {
        state.loading = false;
        state.quizzes = action.payload;
      })
      .addCase(fetchQuizzes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch quizzes";
      });
  },
});

export default dataSlice.reducer;
