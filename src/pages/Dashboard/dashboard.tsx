import { Card } from "@mui/material";
import React from "react";
import { Posts } from "./data";
import Post from "./post";
import "../../style/dashboard.css";
import "../../style/rightSidebar.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
import RightSidebar from "../../components/RightSideBar/rightSidebar";
const image =require ('../../assets/person/1.jpeg')


const Dashboard = () => {
  return (
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
    </div>
  );
};



export default Dashboard;
