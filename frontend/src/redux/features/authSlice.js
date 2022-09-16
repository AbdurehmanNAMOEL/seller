import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

axios.interceptors.request.use((req)=>{
    if(localStorage.getItem("profile")){
        req.headers.authorization = `Bearer ${(JSON.parse(localStorage.getItem("profile")).token)}`
    }
  return req;
})
export const createAccount =createAsyncThunk("user/createAccount",async({userData,toast,navigate})=>{
   
    try {
         const response = await axios.post('http://localhost:4000/home/signup',userData)
         toast.success(`welcome ${userData.name}`)
         navigate('/')
         return response.data
    } catch (error) {
        toast.error(error.message)
    }
})

export const logIn =createAsyncThunk('user/logIn',async({userData,toast,navigate})=>{
    try {
         const response = await axios.post('http://localhost:4000/home/signIn',userData)
         toast.success(`welcome ${userData.name}`)
         navigate('/')
         return response.data
    } catch (error) {
        toast.error(error.message)
    }
})

export const getSeller =createAsyncThunk('user/getUser',async()=>{
    try {
         const response = await axios.get('http://localhost:4000/home/getUser')
         return response.data
    } catch (error) {
        console.log(error.message)
    }
})


const createUserSlice= createSlice({
    name:'user',
    initialState:{
        user:null,
        load:false,
        error:''
    },
    reducers:{
       logOut:(state,action)=>{
        state.user=[]
        localStorage.removeItem('profile')
       },
       getUser:(state,action)=>{
        state.user= action.payload
       }
    },
    extraReducers:{
        [createAccount.pending]:(state,action)=>{
            state.load=true
        },
         [createAccount.fulfilled]:(state,action)=>{
            state.load=false
            state.user= action.payload
            localStorage.setItem('profile',JSON.stringify({...action.payload}))
        },
         [createAccount.rejected]:(state,action)=>{
            state.load=true
            state.error= action.payload.message
        },

         [logIn.pending]:(state,action)=>{
            state.load=true
        },
         [logIn.fulfilled]:(state,action)=>{
            state.load=false
            state.user= action.payload
            localStorage.setItem('profile',JSON.stringify({...action.payload}))
        },
         [logIn.rejected]:(state,action)=>{
            state.load=true
            state.error= action.payload.message
        },

        [getSeller.pending]:(state,action)=>{
            state.load=true
        },
         [getSeller.fulfilled]:(state,action)=>{
            state.load=false
            state.user= action.payload
        },
         [getSeller.rejected]:(state,action)=>{
            state.load=true
            state.error= action.payload.message
        }
    }
})


export const {logOut,getUser} = createUserSlice.actions
export const userReducer = createUserSlice.reducer
