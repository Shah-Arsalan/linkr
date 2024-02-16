import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { initalPostState, postType} from "../Types/postType";
import axios from "axios";


const initialState : initalPostState = {
    posts : []
}

type noteThunkArgs = {
    token : string | null,
    post : postType
}

type noteReturnValue = any

const postHandler = createAsyncThunk<noteReturnValue, noteThunkArgs>("data/posts" , async ({token , post}, thunkAPI) => {
    try{
        const response = await axios.post('http://localhost:3000/posts', post , {
            headers:{
                authorization : token
            }
        })


        return {data : response.data}

    }catch(error:any){
        console.log(error)
        thunkAPI.rejectWithValue(error)

    }


  })
  
  
  
  




const postSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{

    },
    extraReducers : (builder) =>{
        builder.addCase(postHandler.fulfilled , (state, action)=>{
            console.log("all posts are" , action.payload.data.posts)
            state.posts = action.payload.data.posts

        })
    },

})

export default postSlice.reducer;
export {postHandler}