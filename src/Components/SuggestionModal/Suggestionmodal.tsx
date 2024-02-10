import "./Suggestionmodal.css"

const SuggestionModal = () => {
    const demoarr= [{name : "arslan" , id:"hussain" ,pic:"https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png"},
    {name : "arslan" , id:"hussain" ,pic:"https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png"},
    {name : "arslan" , id:"hussain" ,pic:"https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png"}]
    return (
        <div className="suggestion-outer">
            <p>Suggestions for you</p>
            {demoarr.map(ele =>{
                return (
                    <div className="profile">
                        <img className="profile-pic" src={ele.pic}/>
                        <div className="name-section">
                            <h5>{ele.name}</h5>
                            <p>{ele.id}</p>
                        </div>
                        <button className="primary-btn">+ Follow</button>
                    </div>
                )
            })}

        </div>
    )
}


export default SuggestionModal;