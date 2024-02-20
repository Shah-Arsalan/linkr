export type userType = {
    _id:string
    email : string,
    firstname: String,
    lastname: String,
    username: String,
    password: String,
    usernandler: String,
    bio: String,
    link: String,
    profilePic: String,
    createdAt: String,
    updatedAt: String,
    following : Array<string>
    
}


export type userArrType = {
    users : Array<userType>
}









// const userSchema = new Schema({
//     email:String,
//     firstname: String,
//     lastname: String,
//     username: String,
//     password: String,
//     usernandler: String,
//     bio: String,
//     link: String,
//     profilePic: String,
//     createdAt: String,
//     updatedAt: String,
//     following:[String]
// })