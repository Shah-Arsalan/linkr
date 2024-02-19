import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userArrType } from "../Types/userType";
import axios from "axios";



const initialState:userArrType= {
    users : []
}


type followHandlerThunkArgs = {
    email : string,
    useremail : string | null
}

type followHandlerReturnValue = any;


const getAllUserHandler = createAsyncThunk('users/allUsers' , async(_, thunkAPI) => {
    try{

        const response = await axios.get('http://localhost:3000/users/allusers')

        return response.data



    }catch(error:any){
        thunkAPI.rejectWithValue(error)
    }
})


const followHandler = createAsyncThunk<followHandlerReturnValue , followHandlerThunkArgs>('users/follow',async({email , useremail} , thunkAPI)  =>{
    try{
        console.log("in followhandler", email , useremail)
        const response = await axios.post('http://localhost:3000/users/follow',{email , useremail})
        
        console.log("the folow response is" , response.data);

        return response.data
        
        


    }catch(error:any){
        thunkAPI.rejectWithValue(error)
    }
})



const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{

    },
    extraReducers:(builder) => {

        builder.addCase(getAllUserHandler.fulfilled , (state,action) => {
            console.log("all the users are",action.payload.users)
            state.users = action.payload.users
        })


        builder.addCase(followHandler.fulfilled, (state,action)=>{
            state.users = action.payload.users
        })

    }
})


export default userSlice.reducer;
export { getAllUserHandler , followHandler}
