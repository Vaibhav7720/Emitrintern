import { createSlice } from "@reduxjs/toolkit";

const initialState = { username: null, points: 0 };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increasePts: (state) => {
      state.points++;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { increasePts, setUsername } = userSlice.actions;
export default userSlice.reducer;
