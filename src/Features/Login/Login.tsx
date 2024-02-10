import "./Login.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Box, Typography} from '@mui/material'
import Input from '@mui/joy/Input';
import { Button } from "@mui/joy";

const Login = () => {
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const[appear , setAppear] = useState(false);
  const [message , setMessage ] = useState("");




  return (
    <>
    <Box sx={{width:'100%' ,height:'100%', display:'flex' , alignItems:'center' , justifyContent:'center'}}>
    <Box sx={{display:"flex", flexDirection: 'column' , bgcolor:'white' , width:'30%' , padding:2 , justifyContent:"center" , borderRadius:4 , borderTop:"3px solid blue"}}>
      <Box sx={{display:"flex",flexDirection: 'column', alignItems:'center', justifyContent:'center' , gap:.5 }}>
      <Typography variant="h3" fontWeight={300}>Welcome to Linkr</Typography>
      <Typography>Get Linked!</Typography>
      <Typography sx={{marginTop:1}}>Sign In</Typography>
      </Box>
      <Box sx={{display:"flex" , flexDirection:"column", gap:2 , padding:3 , borderTop:1 , marginTop:1}}>
        <Box sx={{display:"flex" , flexDirection:"column" , alignItems:"start", gap:1}}>
          <div>User Name or email:</div>
          <Input
  placeholder="username or email"
  size="md"
  variant="outlined"
  sx={{width:"100%"}}
/>
        </Box>
        <Box sx={{display:"flex" , flexDirection:"column" , alignItems:"start", gap:1}}>
        <div>Password</div>
          <Input
  placeholder="*********"
  size="md"
  variant="outlined"
  sx={{width:"100%"}}
/>
          
        </Box>
        <Button
  color="primary"
  onClick={function(){}}
  size="md"
  variant="solid"
  sx={{marginTop:2 , width:"100%"}}
>
  Sign In
</Button>
      </Box>

<Typography fontWeight={300}>Don't have an account? Sign up</Typography>
    </Box>
    </Box>
    </>
  );
};

export { Login };
