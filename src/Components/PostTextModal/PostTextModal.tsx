import { Box, Button, IconButton, TextField } from "@mui/material"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const PostTextModal = ({ setAppear }: {
    setAppear: React.Dispatch<React.SetStateAction<boolean>>;
  }) => {
    return (
        <Box sx={{width:"100vw" , position:"fixed" , height:"100vh" , top:0 , left:0 , right:0 , display:"flex",  alignItems:"center" , justifyContent:"center" , background:"rgba(0, 0, 0, 0.5)"}} >   
        <Box sx={{display:"flex" , flexDirection:"column" , padding:2 , background:"white" , gap:2 , width:"30%"}}>
        <IconButton onClick={()=>setAppear(prev => !prev)} sx={{width:"fit-content"}}> <ArrowBackIosIcon/> </IconButton>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={7}
          placeholder="Type your post here..."
        />
        <Button variant="contained">Contained</Button>
        </Box>
        </Box>
    )
}


export {PostTextModal}