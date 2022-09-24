import {
  Card,
  Typography,
  styled,
  InputBase,
  Button,
  Grid,
  CardMedia,
  CardActionArea,
  CardActions,
  CardContent,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import "../../style/group.css";
import { FiFilter } from "react-icons/fi";
import { AiOutlineVideoCamera } from "react-icons/ai";
const coverimg = require("../../assets/fp2.jpg");
// const image14 =require("../../assets/post/5.jpeg")
// const image15 =require("../../assets/post/6.jpeg")
// const image16 =require("../../assets/post/7.jpeg")
// const image17 =require("../../assets/post/8.jpeg")
// const image18 =require("../../assets/post/9.jpeg")
// const image19 =require("../../assets/post/10.jpeg")

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "50px",
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: "white",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

const Academy = () => {
  return (
    <div className="group-page-container">
      <div className="group-page">
        <Card className="group-header">
          <Typography variant="h5">Group</Typography>
          <div className="group-header-search">
            <Search sx={{ backgroundColor: "#f5f5f5" }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <FiFilter />
          </div>
        </Card>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{gap:4,paddingLeft:10}}>
        <Card sx={{ maxWidth: 600, maxHeight: 300, height: 190 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="100"
                  image={coverimg}
                  alt="green iguana"
                />
                <div className="group-page-userimg-container">
                  <img
                    src={coverimg}
                    className="group-page-userimg"
                    alt="userimg"
                  />
                </div>
                <CardContent className="group-page-name">
                  <Typography gutterBottom variant="h6" component="div">
                    Academic Name
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    EmailName
                  </Typography>
                </CardContent>
                <CardActions className="group-btn">
                  <div className="group-camera-icon">
                    <AiOutlineVideoCamera
                      className="group-btn-icon"
                      style={{ width: "30px", height: "30px", color:'white' }}
                    />
                  </div>
                  <Button variant="contained" sx={{ borderRadius: 5,backgroundColor:'#5a4ae3',height:35 }}>
                    Follow
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 600, maxHeight: 300, height: 190 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="100"
                  image={coverimg}
                  alt="green iguana"
                />
                <div className="group-page-userimg-container">
                  <img
                    src={coverimg}
                    className="group-page-userimg"
                    alt="userimg"
                  />
                </div>
                <CardContent className="group-page-name">
                  <Typography gutterBottom variant="h6" component="div">
                    Academic Name
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    EmailName
                  </Typography>
                </CardContent>
                <CardActions className="Academic-btn">
                  <div className="Academic-camera-icon">
                    <AiOutlineVideoCamera
                      className="Academic-btn-icon"
                      style={{ width: "30px", height: "30px", color:'white' }}
                    />
                  </div>
                  <Button variant="contained" sx={{ borderRadius: 5,backgroundColor:'#5a4ae3',height:35 }}>
                    Follow
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 600, maxHeight: 300, height: 190 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="100"
                  image={coverimg}
                  alt="green iguana"
                />
                <div className="group-page-userimg-container">
                  <img
                    src={coverimg}
                    className="group-page-userimg"
                    alt="userimg"
                  />
                </div>
                <CardContent className="group-page-name">
                  <Typography gutterBottom variant="h6" component="div">
                    Academic Name
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    EmailName
                  </Typography>
                </CardContent>
                <CardActions className="group-btn">
                  <div className="group-camera-icon">
                    <AiOutlineVideoCamera
                      className="group-btn-icon"
                      style={{ width: "30px", height: "30px", color:'white' }}
                    />
                  </div>
                  <Button variant="contained" sx={{ borderRadius: 5,backgroundColor:'#5a4ae3',height:35 }}>
                    Follow
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 600, maxHeight: 300, height: 190 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="100"
                  image={coverimg}
                  alt="green iguana"
                />
                <div className="group-page-userimg-container">
                  <img
                    src={coverimg}
                    className="group-page-userimg"
                    alt="userimg"
                  />
                </div>
                <CardContent className="group-page-name">
                  <Typography gutterBottom variant="h6" component="div">
                    Academic Name
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    EmailName
                  </Typography>
                </CardContent>
                <CardActions className="group-btn">
                  <div className="group-camera-icon">
                    <AiOutlineVideoCamera
                      className="group-btn-icon"
                      style={{ width: "30px", height: "30px", color:'white' }}
                    />
                  </div>
                  <Button variant="contained" sx={{ borderRadius: 5,backgroundColor:'#5a4ae3',height:35 }}>
                    Follow
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 600, maxHeight: 300, height: 190 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="100"
                  image={coverimg}
                  alt="green iguana"
                />
                <div className="group-page-userimg-container">
                  <img
                    src={coverimg}
                    className="group-page-userimg"
                    alt="userimg"
                  />
                </div>
                <CardContent className="group-page-name">
                  <Typography gutterBottom variant="h6" component="div">
                    Academi Name
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    EmailName
                  </Typography>
                </CardContent>
                <CardActions className="group-btn">
                  <div className="group-camera-icon">
                    <AiOutlineVideoCamera
                      className="group-btn-icon"
                      style={{ width: "30px", height: "30px", color:'white' }}
                    />
                  </div>
                  <Button variant="contained" sx={{ borderRadius: 5,backgroundColor:'#5a4ae3',height:35 }}>
                    Follow
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 600, maxHeight: 300, height: 190 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="100"
                  image={coverimg}
                  alt="green iguana"
                />
                <div className="group-page-userimg-container">
                  <img
                    src={coverimg}
                    className="group-page-userimg"
                    alt="userimg"
                  />
                </div>
                <CardContent className="group-page-name">
                  <Typography gutterBottom variant="h6" component="div">
                    Academi Name
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    EmailName
                  </Typography>
                </CardContent>
                <CardActions className="group-btn">
                  <div className="group-camera-icon">
                    <AiOutlineVideoCamera
                      className="group-btn-icon"
                      style={{ width: "30px", height: "30px", color:'white' }}
                    />
                  </div>
                  <Button variant="contained" sx={{ borderRadius: 5,backgroundColor:'#5a4ae3',height:35 }}>
                    Follow
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
            </Grid>
        <Card className="group-footer">3</Card>
      </div>
    </div>
  );
};

export default Academy;
