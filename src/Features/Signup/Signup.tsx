import "./Signup.css";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Input from "@mui/joy/Input";
import { Button } from "@mui/joy";
import { signupHandler } from "../../ReduxToolkit/AuthenticationSlice";
import { useDispatch , useSelector } from "react-redux";
import { AppDispatch } from "../../ReduxToolkit/Store";
import { Link, useNavigate } from "react-router-dom";
import { dark } from "@mui/material/styles/createPalette";
import { initialStateType } from "../../Types/initialStateType";
import { RootState } from "../../ReduxToolkit/Store";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>()
  const auth = useSelector((state : RootState)=>state.auth)
  const isSigned = auth.isSigned;
  const [signupCredentials , setSignupCredentials] = useState({
    email:"",
    firstname:"",
    lastname:"",
    password:"",
  })

  const handleSignup = () =>{
      dispatch(signupHandler(signupCredentials))
  }


  useEffect(()=>{
isSigned && navigate("/login")
  },[isSigned])

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            bgcolor: "white",
            width: "30%",
            padding: 2,
            justifyContent: "center",
            borderRadius: 4,
            borderTop: "3px solid blue",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 0.5,
            }}
          >
            <Typography variant="h3" fontWeight={300}>
              Welcome to Linkr
            </Typography>
            <Typography>Get Linked!</Typography>
            <Typography sx={{ marginTop: 1 }}>Sign In</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              padding: 3,
              borderTop: 1,
              marginTop: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: 1,
              }}
            >
              <div>Email:</div>
              <Input
                placeholder="email"
                size="md"
                variant="outlined"
                sx={{ width: "100%" }}
                value={signupCredentials.email}
                onChange={(e)=>{setSignupCredentials({...signupCredentials, email:e.target.value})}}
                
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: 1,
              }}
            >
              <div>First Name:</div>
              <Input
                placeholder="firstname"
                size="md"
                variant="outlined"
                sx={{ width: "100%" }}
                onChange={(e)=>{setSignupCredentials({...signupCredentials, firstname:e.target.value})}}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: 1,
              }}
            >
              <div>Lastname:</div>
              <Input
                placeholder="lastname"
                size="md"
                variant="outlined"
                sx={{ width: "100%" }}
                onChange={(e)=>{setSignupCredentials({...signupCredentials, lastname:e.target.value})}}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: 1,
              }}
            >
              <div>Password</div>
              <Input
                placeholder="*********"
                size="md"
                variant="outlined"
                sx={{ width: "100%" }}
                onChange={(e)=>{setSignupCredentials({...signupCredentials, password:e.target.value})}}
              />
            </Box>
            <Button
              color="primary"
              onClick={()=>handleSignup()}
              size="md"
              variant="solid"
              sx={{ marginTop: 2, width: "100%" }}
            >
              Sign Up
            </Button>
          </Box>

          <Typography fontWeight={300}>
            Don't have an account? Sign up
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export { Signup };
