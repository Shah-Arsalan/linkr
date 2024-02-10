import "./Sidebar.css"

const Sidebar = () => {
    return (
        <div className="sidebar-outer">
            <div className="logo">Linkr</div>
            <ul className="side-list">
                <li>Feed</li>
                <li>Explore</li>
                <li>Bookmark</li>
                <li>Profile</li>
                <li>Logout</li>
                <li><button className="post-btn">Post</button></li>
            </ul>
        </div>
    )
}

export default Sidebar;