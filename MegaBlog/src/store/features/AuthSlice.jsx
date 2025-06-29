import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  UserData: null,
};

export const AuthSlice = createSlice({
    name: 'auth',
    initialState ,
    reducers : {
        LogIn : (state,action)=>{
            state.status = true;
            state.UserData = action.payload.UserData;
        },

        LogOut:(state)=>{
            state.status = false;
            state.UserData = null;
        }
    }
})

export const { LogIn,LogOut}   = AuthSlice.actions;

export default AuthSlice.reducer;