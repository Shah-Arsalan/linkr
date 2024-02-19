
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

