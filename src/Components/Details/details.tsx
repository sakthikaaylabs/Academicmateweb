import CardActions from "@mui/material/CardActions";
import {
  Card,
  Button,
  Typography,
  Grid,
  Divider,
  ImageList,
  ImageListItem,
  CardMedia,
  CardHeader,
  styled,
  Avatar,
  Collapse,
} from "@mui/material";
import React from "react";
import "../../style/details.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
import { FaLock } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { BiGroup } from "react-icons/bi";
import { MdOutlineVisibility } from "react-icons/md";
import { itemData } from "./data";
import CardContent from "@mui/material/CardContent";
// import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const postImg = require("../../assets/image/image4.jpg");
// const user = require("../../assets/image/image10.jpg");
const coverImg = require("../../assets/detail-usercoverImg.jpg");
const userImg = require("../../assets/detail-user.jpg");

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Details = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="detail-page-container">
      <Grid
        className="detail-page"
        sx={{ backgroundColor: "#edeef0", border: 0, boxShadow: 0 }}
      >
        <Grid
          className="detail-page1"
          sx={{ backgroundColor: "#edeef0", border: 0, boxShadow: 0, gap: 3 }}
        >
          <Card className="detail-user" sx={{ border: 0, boxShadow: 0 }}>
            <Card className="detail-user1">
              <img src={coverImg} alt="img" />
            </Card>
            <Card
              className="detail-user2"
              sx={{
                backgroundColor: "none",
                border: 0,
                boxShadow: 0,
                borderRadius: 0,
                zIndex: 1,
              }}
            >
              <img src={userImg} alt="img" />
              <Typography className="detail-user-name">
                Vijay<span>vijay@gmail.com</span>
              </Typography>
            </Card>
            <Card
              className="detail-user3"
              sx={{ backgroundColor: "none", border: 0, boxShadow: 0 }}
            >
              <Typography className="detail-user-status">
                234<span>Posts</span>
              </Typography>
              <Typography className="detail-user-status">
                1M<span>Followers</span>
              </Typography>
              <Typography className="detail-user-status">
                500<span>Follow</span>
              </Typography>
            </Card>
            <Card
              className="detail-user4"
              sx={{ backgroundColor: "none", border: 0, boxShadow: 0 }}
            >
              <Button
                variant="contained"
                sx={{ background: "green", height: "45px" }}
              >
                ADD FRIEND
              </Button>
              <Card
                className="detail-user4-icon"
                sx={{ background: "grey", height: "45px" }}
              >
                <MailOutlineIcon />
              </Card>
              <Card
                className="detail-user4-icon"
                sx={{ background: "greyn", height: "45px" }}
              >
                ...
              </Card>
            </Card>
          </Card>
          <Card className="detail-about">
            <div className="detail-about-header">
              <Typography
                sx={{
                  fontSize: "18px",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                About
              </Typography>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                aspernatur! Voluptatum, molestiae, velit architecto omnis
                provident accusamus quam maiores, deserunt itaque modi quisquam
                adipisci molestias?
              </p>
            </div>
            <Divider />
            <div className="detail-about-footer">
              <div>
                <span className="detail-about-footer-icon">
                  <FaLock />
                </span>
                <span className="detail-about-footer-text">
                  <h4>Private</h4>
                  <h6>How Are you?</h6>
                </span>
              </div>
              <div>
                <span className="detail-about-footer-icon">
                  <MdOutlineVisibility />
                </span>
                <span className="detail-about-footer-text">
                  <h4>Visible</h4>
                  <h6>Anyone can find you</h6>
                </span>
              </div>
              <div>
                <span className="detail-about-footer-icon">
                  <IoLocationOutline />
                </span>
                <span className="detail-about-footer-text">
                  <h4>City Name</h4>
                </span>
              </div>
              <div>
                <span className="detail-about-footer-icon">
                  <BiGroup />
                </span>
                <span className="detail-about-footer-text">
                  <h4>Group Name</h4>
                </span>
              </div>
            </div>
          </Card>
          <Card className="detail-photos">
            <div className="detail-photos-header">
              <Typography
                sx={{
                  fontSize: "18px",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                Photos
              </Typography>
              <Button>see all</Button>
            </div>
            <div className="detail-photos-header-container">
              <ImageList
                sx={{ width: 450, height: 300 }}
                cols={2}
                rowHeight={100}
              >
                {itemData.map((item) => (
                  <ImageListItem key={item.img} sx={{ gap: 4 }}>
                    <img
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
              {/* <Button className="detail-photo-btn" variant="contained" sx={{backgroundColor:"grey"}}>more</Button> */}
            </div>
          </Card>
          {/* <Card><div><span>Event</span></div></Card> */}
        </Grid>
        <Grid
          className="detail-page2"
          sx={{ backgroundColor: "#edeef0", border: 0, boxShadow: 0 }}
        >
          <Card className="detail-page-create-post">
            <div className="share">
              <div className="shareWrapper">
                <div className="shareTop">
                  <img className="shareProfileImg" src={userImg} alt="" />
                  <input
                    placeholder="What's in your mind Vijay?"
                    className="shareInput"
                  />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                  <div className="shareOptions">
                    <div className="shareOption">
                      <PermMedia htmlColor="tomato" className="shareIcon" />
                      <span className="shareOptionText">Photo or Video</span>
                    </div>
                    <div className="shareOption">
                      <Label htmlColor="blue" className="shareIcon" />
                      <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                      <Room htmlColor="green" className="shareIcon" />
                      <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                      <EmojiEmotions
                        htmlColor="goldenrod"
                        className="shareIcon"
                      />
                      <span className="shareOptionText">Feelings</span>
                    </div>
                  </div>
                  <button className="shareButton">Share</button>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  M
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Reader World"
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image={postImg}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Average Doesn’t Mean Secure. Just because it’s common, that
                doesn’t mean it’s not risky. Many people fall into the
                misconception that if a lot of people are doing something, it
                must be the safest path.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  Imperfections are part of life. I think it’s sad that some
                  people feel that because being perfectly consistent with your
                  values is impossible, that there is no point trying to debug
                  the inconsistencies.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Details;
