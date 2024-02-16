// content:String,
// likes: {
//     likeCount: { type: Number, default: 0 }, 
//     likedBy: { type: [String], default: [] }, 
// },
// username:String,
// bookmark:[String],
// comments:[{
//     username:String,
//     text:String,
// }]


export type postType = {
    content : string,
    likes : {
        likeCount : number,
        likedBy: Array<string>
    },
    username : string | null,
    bookmark:Array<string>,
    comments: {
        username: string,
        text: string
    }[]
}


export type initalPostState = {
    posts : Array<postType>
}

