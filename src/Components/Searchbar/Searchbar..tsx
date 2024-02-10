import "./Searchbar.css"
import { TextField , Stack , Autocomplete , IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = () => {
    return(
        <>
        <div className="search-bar">
        <IconButton >
        <SearchIcon className="search-icon"/>
      </IconButton>
        <TextField fullWidth label="fullWidth" variant="standard" id="fullWidth" />

    </div>
        </>
    )
}


export default Searchbar;