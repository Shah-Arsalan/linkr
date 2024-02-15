import {
  Avatar,
  Box,
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import "./Post.css";
import { useSelector } from "react-redux";
import { RootState } from "../../ReduxToolkit/Store";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";

const Post = () => {
  const { firstname, lastname, user } = useSelector(
    (state: RootState) => state.auth
  );
  const content =
    "This is some rubbish content This is some rubbish contentThis is some rubbish contentThis is some rubbish content";
  console.log("the user is", user);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        background: "white",
        padding: 2,
        borderRadius: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Typography>
            {firstname + " " + lastname} <Typography>{user}</Typography>
          </Typography>
        </Box>
        <IconButton sx={{ width: "fit-content" }}>
          {" "}
          <MoreVertIcon />{" "}
        </IconButton>
      </Box>
      <Box sx={{ marginTop: 1, padding: 0.5 }}>
        <Typography align="left" fontWeight={300}>
          {content}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 1, marginTop: 1 }}>
        <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
          <FavoriteBorderOutlinedIcon />
          <Typography fontSize={13}>Like</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
          <BookmarkAddOutlinedIcon />
          <Typography fontSize={13}>Bookmark</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: 1, alignItems: "center", marginTop: 2 }}>
        <Avatar
          sx={{ width: 24, height: 24 }}
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
        />
        <TextField
          id="outlined-adornment-weight"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button>Post</Button>
              </InputAdornment>
            ),
          }}

          placeholder="Enter your comment ... "
          size="small"
          fullWidth
        />
      </Box>
    </Box>
  );
};

export { Post };
