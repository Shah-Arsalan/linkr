import { Box } from "@mui/material";
import Searchbar from "../../Components/Searchbar/Searchbar.";
import Sidebar from "../../Components/Sidebar/Sidebar";
import SuggestionModal from "../../Components/SuggestionModal/Suggestionmodal";
import "./Feed.css";
import PostTextField from "../../Components/PostTextField/PostTextField";
import { PostTextModal } from "../../Components/PostTextModal/PostTextModal";
import { useState } from "react";
import { Post } from "../../Components/Post/Post";

const Feed = () => {
    const [appearModal , setAppearModal] = useState(false)
    return (
<>
<PostTextField setAppear={setAppearModal}/>
{appearModal && <PostTextModal setAppear={setAppearModal}/>}
<Post/>
</>
    )
}

export default Feed;