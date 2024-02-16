import "./Searchbar.css";
import { TextField, Stack, Autocomplete, IconButton, InputAdornment, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Searchbar = () => {
  return (
    <TextField
    id="outlined-adornment-weight"
    variant="outlined"
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <IconButton><SearchIcon/></IconButton>
        </InputAdornment>
      ),
    }}

    placeholder="Search ... "
    size="small"
    fullWidth

    sx={{background:"white" , marginTop:2 , position:"sticky" , top:2 , zIndex:100}}


  />
  );
};

export default Searchbar;
