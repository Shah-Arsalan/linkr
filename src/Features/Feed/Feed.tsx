import { Box } from "@mui/material";
import Searchbar from "../../Components/Searchbar/Searchbar.";
import Sidebar from "../../Components/Sidebar/Sidebar";
import SuggestionModal from "../../Components/SuggestionModal/Suggestionmodal";
import "./Feed.css";
import PostTextField from "../../Components/PostTextField/PostTextField";
import { PostTextModal } from "../../Components/PostTextModal/PostTextModal";
import { useEffect, useState } from "react";
import { Post } from "../../Components/Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../ReduxToolkit/Store";
import { getAllPostsHandler } from "../../ReduxToolkit/PostSlice";
import { getAllUserHandler } from "../../ReduxToolkit/UserSlice";


const Feed = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [appearModal , setAppearModal] = useState(false)
    const {posts} = useSelector((state:RootState) => state.post)
    console.log("posts in feed" , posts)
    const {user} = useSelector((state:RootState) => state.auth)
    const {users} = useSelector((state:RootState) => state.user)
    const currentUser = users.filter((ele) => ele.email == user)
    const following = currentUser[0]?.following

    const currUserPosts = posts?.filter((ele ) => ele.username == user || following?.some(email => email == ele.username) )

    useEffect(()=>{
        dispatch(getAllPostsHandler());
        dispatch(getAllUserHandler())
    },[])



    return (
<>
<PostTextField setAppear={setAppearModal}/>
{appearModal && <PostTextModal setAppear={setAppearModal}/>}
{
    currUserPosts?.map((ele) =>{
        return <Post  ele={ele} setAppear={setAppearModal}/>
    })
}
</>
    )
}

export default Feed;