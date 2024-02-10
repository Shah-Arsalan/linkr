import "./Signup.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Input from "@mui/joy/Input";
import { Button } from "@mui/joy";

const Signup = () => {
  const navigate = useNavigate();
  const [signupCredentials , setSignupCredentials] = useState({
    email:"",
    firstname:"",
    lastname:"",
    password:""
  })

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
              />
            </Box>
            <Button
              color="primary"
              onClick={function () {}}
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
