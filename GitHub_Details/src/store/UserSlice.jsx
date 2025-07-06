import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  repo : {},
  UserData: {},
};

const UserSlice = createSlice({
  name: "user", 
  initialState,
  reducers: {
    Repos: (state, action) => {
      state.repo = action.payload; 
    },
    UserData_update: (state, action) => {
      state.UserData = action.payload;
    },
  },
});


export const { Repos,UserData_update } = UserSlice.actions;
export default UserSlice.reducer;
