import { TextField , Stack , Autocomplete , IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import "./Explore.css"
import Searchbar from "../../Components/Searchbar/Searchbar.";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../ReduxToolkit/Store";
import { Post } from "../../Components/Post/Post";
import { useEffect } from "react";
import { getAllPostsHandler } from "../../ReduxToolkit/PostSlice";


const Explore = () => {
    const dispatch = useDispatch<AppDispatch>();
    const  {posts} = useSelector((state:RootState) => state.post)

    console.log("posts in explore" , posts)

    useEffect(()=>{
        dispatch(getAllPostsHandler());
    },[])

    return(
<>
{
    posts?.map((ele) => {
        return <Post ele={ele} setAppear={null}/>
    })
}
</>
    )
}


export default Explore;