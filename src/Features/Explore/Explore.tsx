import { TextField , Stack , Autocomplete , IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import "./Explore.css"
import Searchbar from "../../Components/Searchbar/Searchbar.";


const Explore = () => {
    return(
        <div className="explore-outer">
        <Searchbar/>
        </div>
    )
}


export default Explore;