import "./PostTextField.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";
import { RootState } from "../../ReduxToolkit/Store";
import { Typography } from "@mui/material";

export default function PostTextField({
  setAppear,
}: {
  setAppear: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { firstname, lastname } = useSelector((state: RootState) => state.auth);
  return (
    <>
      <Box
        onClick={() => {
          setAppear((prev) => !prev);
        }}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          padding: 1,
          border: 1,
          marginTop:1,
          borderRadius:1,
          background:"white"
        }}
      >
        <Box sx={{ display: "flex", gap: 1 }}>
          <AccountCircleIcon sx={{ color: "blue" }} />
          <Typography fontWeight={300} >
            What is on your mind {firstname + " " + lastname}
          </Typography>
        </Box>
        <AddIcon sx={{ color: "blue" }} />
      </Box>
    </>
  );
}
