import { useDispatch } from "react-redux"
import "./Sidebar.css"
import { AppDispatch } from "../../ReduxToolkit/Store";
import { logout } from "../../ReduxToolkit/AuthenticationSlice";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logout());

    }
    return (
        <div className="sidebar-outer">
            <div className="logo">Linkr</div>
            <ul className="side-list">
                <li>Feed</li>
                <li onClick={() => navigate("/explore")}>Explore</li>
                <li>Bookmark</li>
                <li onClick={() => navigate("/profile")}>Profile</li>
                <li onClick={()=>handleLogout()}>Logout</li>
                <li><button className="post-btn">Post</button></li>
            </ul>
        </div>
    )
}

export default Sidebar;