import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import SuggestionModal from './Components/SuggestionModal/Suggestionmodal';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from './Features/Login/Login';
import Explore from './Features/Explore/Explore';
import { Signup } from './Features/Signup/Signup';
import { PrivateRoute } from './Features/PrivateRoute/PrivateRoute';
import Feed from './Features/Feed/Feed';
import { MainContainer } from './Features/MainContainer/MainContainer';
import { Profile } from './Features/Profile/Profile';


function App() {
  return (
    <div className="App">
   
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <MainContainer>
              <Feed/>
              </MainContainer>
            </PrivateRoute>
          }
        />
        <Route path="/explore" element={
          <PrivateRoute>
          <MainContainer>
            <Explore/>
          </MainContainer>
          </PrivateRoute>
        }/>

<Route path="/profile" element={
          <PrivateRoute>
          <MainContainer>
            <Profile/>
          </MainContainer>
          </PrivateRoute>
        }/>
      </Routes>
  

    </div>

  );
}

export default App;
