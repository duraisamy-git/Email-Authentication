import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../components/slices/user";


const store = configureStore({
   reducer: {
    userInfo: userReducer,
   },
});

export default store;