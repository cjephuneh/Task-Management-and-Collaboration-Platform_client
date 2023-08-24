import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authservice'




const initialState = {
    user: null,

    //user
    isUserError: false,
    isUserLoading: false,
    isUserSuccess: false,
    userErrorMessage: '',

}



//allow users to login

export const login = createAsyncThunk(/auth/login, async (userData, thunkAPI) => {
    try{
        const response = await authService.login(userData);
        return response.data;
    }
    catch(error){
        return thunkAPI.rejectWithValue(error.response.data);
    }
})


//allow users to register
export const register = createAsyncThunk(/auth/users, async (userData, thunkAPI) => {
    try{
        const response = await authService.register(userData);
        return response.data;
    }
    catch(error){
        return thunkAPI.rejectWithValue(error.response.data);
    }
})



export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      // logout
      logout: (state) => {
        state.user = null
      },
  
      // function to reset values to initial state
      resetAuthStateValues: (state) => {
        state.isUserLoading = false
        state.isUserSuccess = false
        state.isUserError = false
        state.isUserMessage = ''
      },
    },
    // asynchronous fxns
    extraReducers: (builder) => {
      builder
        .addCase(register.pending, (state) => {
          state.isUserLoading = true
        })
        .addCase(register.fulfilled, (state, action) => {
          state.isUserLoading = false
          state.isUserSuccess = true
          state.user = action.payload
        })
        .addCase(register.rejected, (state, action) => {
          state.isUserLoading = false
          state.isUserError = true
          state.isUserMessage = action.payload
          state.user = null
        })
  
        .addCase(login.pending, (state) => {
          state.isUserLoading = true
        })
        .addCase(login.fulfilled, (state, action) => {
          state.isUserLoading = false
          state.isUserSuccess = true
          state.user = action.payload
        })
        .addCase(login.rejected, (state, action) => {
          state.isUserLoading = false
          state.isUserError = true
          state.isUserMessage = action.payload
          state.user = null
        })
    },
  })
  
  export const { resetAuthStateValues } = authSlice.actions
  
  export default authSlice.reducer
  