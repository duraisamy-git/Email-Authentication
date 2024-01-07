import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
    user: null,

};

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser: (state, action)=>{
            state.user = action.payload;
        },
        removeUser: (state,action)=>{
            state.user = null
        },

    },
});

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;

export const handleLogin = (token)=>{
    return async (dispatch) =>{
        const response = await axios.get("https://email-login-fjv7.onrender.com/user/data", {
            headers:{
                Authorization:token,
            },
        });
        dispatch(setUser(response.data));
    };
};