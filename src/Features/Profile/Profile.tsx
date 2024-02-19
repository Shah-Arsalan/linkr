import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../ReduxToolkit/Store";
import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import { Post } from "../../Components/Post/Post";
import { useEffect } from "react";
import { getAllUserHandler } from "../../ReduxToolkit/UserSlice";
import { getAllPostsHandler } from "../../ReduxToolkit/PostSlice";

const Profile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);
  const { users } = useSelector((state: RootState) => state.user);
  const { posts } = useSelector((state: RootState) => state.post);

  const currentUser = users.find((ele) => ele.email == user);
  const currentUserPosts = posts.filter((ele) => ele.username == user);
  console.log("curr user posts in profile", currentUserPosts);

  useEffect(() => {
    dispatch(getAllUserHandler())
    dispatch(getAllPostsHandler())
  }, []);

  return (
    <>
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
              link
            </Typography>
          </Box>
        </Box>
        <Box>
          <Button>Edit</Button>
        </Box>
      </Box>

      {currentUserPosts?.map((ele) => {
        return <Post ele={ele} setAppear={null} />;
      })}
    </>
  );
};

export { Profile };
