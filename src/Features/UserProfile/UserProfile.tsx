import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { RootState } from "../../ReduxToolkit/Store";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { Post } from "../../Components/Post/Post";

const UserProfile = () => {
    const {userId}  = useParams();
    const {users} = useSelector((state:RootState) => state.user);
    const {posts} = useSelector((state:RootState) => state.post)
    const currentUser = users.find((ele) => ele._id === userId)
    const currentUserPosts = posts.filter((ele) => ele.username == currentUser?.email)
    return(<>
      <Box
        sx={{
          display: "flex",
          background: "white",
          justifyContent: "space-between",
          marginTop: 2,
          borderRadius: 3,
        }}
      >
        <Box sx={{ display: "flex", padding: 2, gap: 3 }}>
          <Box sx={{ alignSelf: "center" }}>
            <Avatar sx={{ height: 80, width: 80 }} />
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "column", textAlign: "left" }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
              <Typography fontWeight={600}>
                {currentUser?.firstname + " " + currentUser?.lastname}
              </Typography>
              <Typography>{currentUser?.email}</Typography>
            </Box>

            <Typography>
              {currentUser?.bio !== undefined
                ? currentUser?.bio
                : "edit to enter bio"}
            </Typography>

            <Box>
              <Typography></Typography>
              <Typography></Typography>
              <Typography></Typography>
            </Box>

            <Typography color={"blue"} sx={{ textDecoration: "underline" }}>
            {currentUser?.link !== undefined
                ? currentUser?.link
                : "edit to enter link"}
            </Typography>
          </Box>
        </Box>
      </Box>

      {currentUserPosts?.map((ele) => {
        return <Post ele={ele} setAppear={null} />;
      })}

    </>)
}


export {UserProfile}