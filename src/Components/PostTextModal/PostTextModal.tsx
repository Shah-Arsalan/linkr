import { Box, Button, IconButton, TextField } from "@mui/material"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../ReduxToolkit/Store";

const PostTextModal = ({ setAppear }: {
    setAppear: React.Dispatch<React.SetStateAction<boolean>>;
  }) => {

    const [post , setPost] = useState({
      content:"",
      likes: {
          likeCount: 0, 
          likedBy: [], 
      },
      username:"",
      bookmark:[],
      comments:[]
  })

  const {token} = useSelector((state:RootState) => state.auth)


  

    return (
        <Box sx={{width:"100vw" , position:"fixed" , height:"100vh" , top:0 , left:0 , right:0 , display:"flex",  alignItems:"center" , justifyContent:"center" , background:"rgba(0, 0, 0, 0.5)" ,zIndex:1000}} >   
        <Box sx={{display:"flex" , flexDirection:"column" , padding:2 , background:"white" , gap:2 , width:"30%"}}>
        <IconButton onClick={()=>setAppear(prev => !prev)} sx={{width:"fit-content"}}> <ArrowBackIosIcon/> </IconButton>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={7}
          placeholder="Type your post here..."
          onChange={(e)=>setPost({...post, content:e.target.value})}
        />
        <Button variant="contained">Post</Button>
        </Box>
        </Box>
    )
}


export {PostTextModal}