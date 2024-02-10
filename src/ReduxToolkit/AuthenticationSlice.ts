import { createSlice ,current } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { useLocation, useNavigate } from "react-router-dom";
import { initialStateType } from '../Types/initialStateType';



const tokenFromLocalStorage = localStorage.getItem("token");
const userFromLocalStorage = localStorage.getItem("user");

const initialState: initialStateType = {
  token: tokenFromLocalStorage || null,
  user: userFromLocalStorage ? JSON.parse(userFromLocalStorage) : null,
};


type  loginThunkArgs = {
    email: string;
    password: string;
  }
  

  interface MyReturnValue {

  }



  type  signupThunkargs = {
    firstname:string,
    lastname:string,
    email: string;
    password: string;
  }
  

  interface MyReturnValue {

  }
  
  // Create the async thunk function
  const loginHandler = createAsyncThunk<MyReturnValue, loginThunkArgs>(
    'auth/login',
    async (args, thunkAPI) => {
      // You can access the arguments like this
      const { email, password } = args;
  
      try {
        // Your async operation here
        const response = await axios.post("/api/auth/login", {
            email,
            password,
          });
    
         return {data :response.data} 
  
      } catch (error:any) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );


const signupHandler = createAsyncThunk<MyReturnValue, signupThunkargs>("auth/signup" , async ({email,password,firstname,lastname}, thunkAPI) => {

  try {
      const response = await axios.post("/api/auth/signup", {
        email,
        password,
        firstname,
        lastname
      });

     return {data :response.data}
    
      
    } catch (error:any) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
})





const authenticationSlice = createSlice({
    name : "authentication",
    initialState, 
     reducers: {
      logout: (state, action) => {
        state.token = "";
        state.user ="";
        localStorage.removeItem("LoginCredentials");
      },
    }, 
    extraReducers:(builder) => {
        
    }
})

export default authenticationSlice.reducer
export {loginHandler , signupHandler}
export const {logout} = authenticationSlice.actions