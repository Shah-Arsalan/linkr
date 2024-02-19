import { createSlice ,current } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { useLocation, useNavigate } from "react-router-dom";
import { initialStateType } from '../Types/initialStateType';

// const tokenFromLocalStorage = localStorage.getItem("LoginCredentilas");
// const userFromLocalStorage = localStorage.getItem("user");

const FromLocalStorage = localStorage.getItem("LoginCredentials");
const token = FromLocalStorage ? JSON.parse(FromLocalStorage).token : null;
const user = FromLocalStorage ? JSON.parse(FromLocalStorage).user : null;
const firstname = FromLocalStorage ? JSON.parse(FromLocalStorage).firstname : null;
const lastname = FromLocalStorage ? JSON.parse(FromLocalStorage).lastname : null;

console.log("in auth slice" , token , user , firstname , lastname )


const initialState: initialStateType = {
  token: token,
  user: user,
  isSigned: false,
  firstname:firstname,
  lastname:lastname
};



type  loginThunkArgs = {
    email: string;
    password: string;
  }
  




  type  signupThunkargs = {
    firstname:string,
    lastname:string,
    email: string;
    password: string;
  }
  

  type  MyReturnValue  = any
  

type loginReturnValue = any
  // Create the async thunk function
  const loginHandler = createAsyncThunk<loginReturnValue, loginThunkArgs>(
    'auth/login',
    async (args, thunkAPI) => {
      // You can access the arguments like this
      const { email, password } = args;
  
      try {
        // Your async operation here
        const response = await axios.post("http://localhost:3000/users/login", {
            email,
            password,
          });
    
          console.log("the data is ", response.data)
         return {data :response.data} 
  
      } catch (error:any) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );


const signupHandler = createAsyncThunk<MyReturnValue, signupThunkargs>("auth/signup" , async ({email,password,firstname,lastname}, thunkAPI) => {

  try {
      const response = await axios.post("http://localhost:3000/users/signup", {
        email,
        password,
        firstname,
        lastname
      });

     return {data :response.data }
    
      
    } catch (error:any) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
})





const authenticationSlice = createSlice({
    name : "authentication",
    initialState, 
     reducers: {
      logout: (state) => {
        state.token = "";
        state.user ="";
        localStorage.removeItem("LoginCredentials");
      },

      setSignOut : (state) => {
        state.isSigned = false;
      }
    }, 
    extraReducers:(builder) => {
      builder.addCase(signupHandler.fulfilled , (state , action) => {
        console.log("this is working",action.payload);
        state.isSigned = true;
      })


      builder.addCase(loginHandler.fulfilled , (state, action) => {
        console.log("being success");
        console.log("this is action",action.payload)
        state.token = action.payload.data.token;
        state.user = action.payload.data.email;
        state.firstname = action.payload.data.firstname;
        state.lastname = action.payload.data.lastname
        localStorage.setItem(
          "LoginCredentials",
          JSON.stringify({
            token: action.payload.data.token,
            user: action.payload.data.email,
            firstname:action.payload.data.firstname,
            lastname:action.payload.data.lastname
          })
        );
      })
        
    }
})

export default authenticationSlice.reducer
export {loginHandler , signupHandler}
export const {logout , setSignOut} = authenticationSlice.actions