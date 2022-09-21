import React from "react";
import "../../style/forgotPassword.css";
import {
  Box,
  Button,
  Card,
  CardMedia,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { EmailOutlined } from "@mui/icons-material";

const forgotPwdImg = require("../../assets/rspas2.jpg");

export default function ForgotPassword() {
  return (
    <Card className="forgotPwd-page">
      <CardMedia
        className="forgotPwdImg"
        component="img"
        image={forgotPwdImg}
        sx={{
          width: "60%",
          ["@media (max-width:1200px)"]: { display: "none" },
        }}
        alt="LoginImg"
      />
      <Card className="forgotPwd-container">
        <div>
          <div className="forgotPwd-form-container">
            <Typography variant="h4">Forgot Your Password ?</Typography>
            <Typography variant="h6">Enter Your Registered Email Address</Typography>
            <form className="forgotPwd-form">
              <Box>
                <OutlinedInput
                  id="name"
                  placeholder="Enter Email Address"
                  sx={{ display: "flex", flexDirection: "row-reverse", pl: 2 }}
                  endAdornment={
                    <InputAdornment position="start">
                      <EmailOutlined />
                    </InputAdornment>
                  }
                />
              </Box>
              <div className="forgotPwd-btn-container">
              <Button
                variant="contained"
                className="forgotPwd-btn"
                sx={{
                  width: "100%",
                  borderRadius: 3,
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                Continue
              </Button></div>
            </form>
          </div>
        </div>
      </Card>
    </Card>
  );
}
