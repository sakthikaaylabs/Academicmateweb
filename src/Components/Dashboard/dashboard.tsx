import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Posts } from "./data";
import Post from "./post";
import "../../style/dashboard.css";
import "../../style/rightSidebar.css";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
import RightSidebar from "../RightSideBar/rightSidebar";
import { ToastContainer, toast } from 'react-toastify'
import { useLocation } from 'react-router-dom'
const image = require('../../assets/person/1.jpeg')




const Dashboard = () => {
  const location = useLocation()
  const [loading, setloading] = useState(true)
  useEffect(() => {
    const { state } = location
    if (state === 'login') {
      toast("Login SuccessFull")
    } else if (state === 'register') {
      toast("User created Successfully")
    }

    setTimeout(() => {
      setloading(false)
    }, 3000)

  }, [])
  return (loading ? (
    <div className="dashboard">
      <div className="home loading">
  <Box sx={{ display: 'flex',}}>
    <CircularProgress />
  </Box>
  </div>
  </div>) 

  :
    <div className="dashboard">
      <div className="home">
        <Card className="card">
          <div className="share">
            <div className="shareWrapper">
              <div className="shareTop">
                <img
                  className="shareProfileImg"
                  src={image}
                  alt=""
                />
                <input
                  placeholder="What's in your mind Ruby?"
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
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
      <RightSidebar />
      <ToastContainer />
    </div>
  );
};



export default Dashboard;
