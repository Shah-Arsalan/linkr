import { Box } from "@mui/material";
import Searchbar from "../../Components/Searchbar/Searchbar.";
import Sidebar from "../../Components/Sidebar/Sidebar";
import SuggestionModal from "../../Components/SuggestionModal/Suggestionmodal";
import "./Feed.css";
import PostTextField from "../../Components/PostTextField/PostTextField";
import { PostTextModal } from "../../Components/PostTextModal/PostTextModal";
import { useEffect, useState } from "react";
import { Post } from "../../Components/Post/Post";
import { useSelector } from "react-redux";
import { RootState } from "../../ReduxToolkit/Store";

const Feed = () => {
    const [appearModal , setAppearModal] = useState(false)
    const {posts} = useSelector((state:RootState) => state.post)
    const {user} = useSelector((state:RootState) => state.auth)
    const currUserPosts = posts.filter((ele ) => ele.username == user)



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