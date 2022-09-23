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
const group1 =require("../../assets/group/group1.jpg")
const group2 =require("../../assets/group/group2.jpg")
const group3 =require("../../assets/group/group3.jpg")
const group4 =require("../../assets/group/group4.jpg")
const group5 =require("../../assets/group/group5.jpg")
// const group6 =require("../../assets/post/10.jpeg")

const g5ic =require("../../assets/group/g5ic.jpg")
const g4ic =require("../../assets/group/g5i4.jpg")
const g3ic =require("../../assets/group/g3ic.jpg")
const g2ic =require("../../assets/group/g2ic.jpg")
const g1ic =require("../../assets/group/g1ic.jpg")
// const gic =require("../../assets/group/gic.png")



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

const Group = () => {
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
                  image={group2}
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
                  Prickly Piranhas 
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  There are critical thinkers in this bunch
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
                  image={group1}
                  alt="green iguana"
                />
                <div className="group-page-userimg-container">
                  <img
                    src={g1ic}
                    className="group-page-userimg"
                    alt="userimg"
                  />
                </div>
                <CardContent className="group-page-name">
                  <Typography gutterBottom variant="h6" component="div">
                  Young Scientists
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Well, the name says it all
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
                    src={g2ic}
                    className="group-page-userimg"
                    alt="userimg"
                  />
                </div>
                <CardContent className="group-page-name">
                  <Typography gutterBottom variant="h6" component="div">
                  Rapid Readers
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  A group of students who are above their reading grade level
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
                  image={group5}
                  alt="green iguana"
                />
                <div className="group-page-userimg-container">
                  <img
                    src={g3ic}
                    className="group-page-userimg"
                    alt="userimg"
                  />
                </div>
                <CardContent className="group-page-name">
                  <Typography gutterBottom variant="h6" component="div">
                  Canny Cougars
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  You are quick witted thinkers
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
                  image={group4}
                  alt="green iguana"
                />
                <div className="group-page-userimg-container">
                  <img
                    src={g4ic}
                    className="group-page-userimg"
                    alt="userimg"
                  />
                </div>
                <CardContent className="group-page-name">
                  <Typography gutterBottom variant="h6" component="div">
                  Clever Cats
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  You’re clever and you know it
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
                  image={group3}
                  alt="green iguana"
                />
                <div className="group-page-userimg-container">
                  <img
                    src={g5ic}
                    className="group-page-userimg"
                    alt="userimg"
                  />
                </div>
                <CardContent className="group-page-name">
                  <Typography gutterBottom variant="h6" component="div">
                  Study Buddies
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Education is one thing no one can take away from you
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

export default Group;
