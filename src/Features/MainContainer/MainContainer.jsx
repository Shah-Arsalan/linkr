import { Box } from "@mui/material";
import Searchbar from "../../Components/Searchbar/Searchbar."
import Sidebar from "../../Components/Sidebar/Sidebar"
import SuggestionModal from "../../Components/SuggestionModal/Suggestionmodal";
import "./MainContainer.css"



const MainContainer = ( {children} ) => {
    return (
      <Box sx={{width:"100%", display:"flex" , justifyContent:"center", alignItems:"start"}}>
      <Box sx={{display:"flex" , justifyContent:"center" , gap:5 , width:"80%" , alignItems:"start"}}>
        <Sidebar/>
        <Box sx={{width:"40%"}}>
          <Searchbar/>
          <Box >{children}</Box>
        </Box>
        <SuggestionModal/>
      </Box>
      </Box>
    );
  }


  export {MainContainer}