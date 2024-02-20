import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../ReduxToolkit/Store";
import { updateUserHandler } from "../../ReduxToolkit/UserSlice";
import { userType } from "../../Types/userType";

const UserDetailsModal = ({setAppear , currentUser} : {setAppear : React.Dispatch<React.SetStateAction<boolean>> , currentUser :  userType | undefined}) => {
    const dispatch = useDispatch<AppDispatch>();
    const {user} = useSelector((state:RootState) => state.auth)
    const initialDetails = {
        bio:currentUser?.bio ? currentUser.bio : null,
        link:currentUser?.link ? currentUser.link :null,
        email:user
    }
    const [userDetails , setUserDetials] = useState(initialDetails);
    const updateUserDetails= () =>{
        setAppear(prev => !prev);
        dispatch(updateUserHandler(userDetails))
        
    }
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          position: "fixed",
          height: "100vh",
          top: 0,
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(0, 0, 0, 0.5)",
          zIndex: 1000,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: 1,
            background: "white",
            gap: 1,
            width: "30%",
            borderRadius:3,
          }}
        >
          <IconButton
            onClick={()=>setAppear(prev => !prev)}
            sx={{ width: "fit-content" , marginLeft:3 }}
          >
            {" "}
            <ArrowBackIosIcon />{" "}
          </IconButton>
          <Box sx={{display:"flex" , alignItems:"center" , justifyContent:"space-around"}}>
         <Typography>Enter bio :</Typography>
          <TextField
            id="outlined-multiline-static"
            placeholder="your bio..."
            size="small"
            multiline
            rows={4}
            value={userDetails.bio}
            onChange={(e)=>setUserDetials({...userDetails , bio:e.target.value})}
          />
          </Box>
          <Box sx={{display:"flex" , alignItems:"center" , justifyContent:"space-around", marginBottom:2}}>
         <Typography>Enter link :</Typography>
          <TextField
            id="outlined-multiline-static"
            placeholder="enter link here"
            size="small"
            value={userDetails.link}
            onChange={(e)=>setUserDetials({...userDetails , link:e.target.value})}
          
          />
          </Box>
          <Button onClick={()=>updateUserDetails()}>Update</Button>
        </Box>
        
      </Box>
    </>
  );
};

export { UserDetailsModal };
