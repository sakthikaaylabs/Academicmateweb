import React from "react";
import "../../style/notification.css";
import { Card, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";

const person1 = require("../../assets/person/1.jpeg")

const Notification = () => {
  return (
    <div className="notification">
      <div className="notification-page">
        <Card className="notificationCard">
          <Typography variant="h5">Notification</Typography>
          <div className="notificationCardIcon">
            <InfoIcon />
            <DeleteIcon />
          </div>
        </Card>
        <Card className="notificationMsgContainer">
           <div className="notificationMsgImg"><img src={person1} alt="img"/><span>An investment in knowledge pays the best interest. – Benjamin Franklin</span></div>
           <div>An investment in knowledge pays the best interest. – Benjamin Franklin</div>
           <div>An investment in knowledge pays the best interest. – Benjamin Franklin</div>
           <div>An investment in knowledge pays the best interest. – Benjamin Franklin</div>
           <div>An investment in knowledge pays the best interest. – Benjamin Franklin</div>
           <div>An investment in knowledge pays the best interest. – Benjamin Franklin</div>
           <div>An investment in knowledge pays the best interest. – Benjamin Franklin</div>
           <div>An investment in knowledge pays the best interest. – Benjamin Franklin</div>
           <div>An investment in knowledge pays the best interest. – Benjamin Franklin</div>
           <div>An investment in knowledge pays the best interest. – Benjamin Franklin</div>
           <div>An investment in knowledge pays the best interest. – Benjamin Franklin</div>
        </Card>
      </div>
    </div>
  );
};

export default Notification;
