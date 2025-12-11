import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => ({
  userName: "",
  toWatch: [],
  watched: [],
});

const profileSlice = createSlice({
  name: "profile",
  initialState: getInitialState(),
  reducers: {},
});

export default profileSlice.reducer;
