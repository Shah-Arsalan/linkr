import { useDispatch, useSelector } from "react-redux"
import "./Suggestionmodal.css"
import { AppDispatch, RootState } from "../../ReduxToolkit/Store"
import { followHandler, getAllUserHandler } from "../../ReduxToolkit/UserSlice"
import { useEffect } from "react"

const SuggestionModal = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {users} = useSelector((state : RootState) => state.user)
    const {user} = useSelector((state:RootState) => state.auth)

    const currentUser = users.filter((ele) => ele.email == user)
    const followingUsers = currentUser[0]?.following;
  

    const suggestedUsers = users.filter((ele) => ele.email !== user && followingUsers?.every((email) => email !== ele.email))
    console.log("the suggested users", suggestedUsers);

    const slicedUsers = suggestedUsers.slice(0 , 4);

    const handleFollow = (email : string) =>{
        dispatch(followHandler({email , useremail:user}))
    }

    useEffect(() => {
        dispatch(getAllUserHandler());
    },[])
    return (
        <div className="suggestion-outer">
            <p>Suggestions for you</p>
            {slicedUsers.map((ele:any) =>{
                return (
                    <div className="profile">
                      <div className="user-profile">
                        <img className="profile-pic" src={"https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png"} alt="profile" />
                        <div className="name-section">
                            <h5>{ele.firstname + " "  + ele.lastname}</h5>
                            <p>{ele.email}</p>
                        </div>
                        </div>
                    
                        <button className="primary-btn" onClick={()=>handleFollow(ele.email)}>+ Follow</button>
                    </div>
                )
            })}

        </div>
    )
}


export default SuggestionModal;