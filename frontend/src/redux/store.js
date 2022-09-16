import { configureStore } from "@reduxjs/toolkit"
import {userReducer} from '../redux/features/authSlice'
import { stoneReducer } from "./features/gemstoneSlice"
const store = configureStore({
    reducer:{
     stone:stoneReducer,
     auth:userReducer
    }
})

export default store