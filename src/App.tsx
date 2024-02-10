import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import SuggestionModal from './Components/SuggestionModal/Suggestionmodal';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from './Features/Login/Login';
import Explore from './Features/Explore/Explore';
import { Signup } from './Features/Signup/Signup';


function App() {
  return (
    <div className="App">
   
      <Routes>
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
  

    </div>

  );
}

export default App;
