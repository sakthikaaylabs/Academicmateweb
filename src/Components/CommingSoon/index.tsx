import "../../style/comingsoon.css";
import { Box, Button, Card, CardMedia, InputAdornment, OutlinedInput, Typography } from "@mui/material";
import { EmailOutlined } from '@mui/icons-material'
import {useNavigate} from 'react-router-dom'
const ComingsoonImg = require("../../assets/constructionasset.png");

export default function ComingSoon() {
  const navigate=useNavigate();
  return (
    <div className="comingSoon-page-container">
      <Card className="comingSoonpage">
        <CardMedia
          component="img"
          sx={{ width: "60%" }}
          image={ComingsoonImg}
          alt="LoginImg"
        />
        <Card className="comingSoon-card" sx={{ boxShadow: 0 }}>
          <Typography variant="h3">
            We're under
            <br />
            <span>Construction</span>
            <br />
            Check back for an
            <br />
            Update
          </Typography>
          <Box>
            <OutlinedInput
              id="name"
              placeholder="Your Email Address"
              sx={{ display: "flex", flexDirection: "row-reverse", pl: 2,mt:2 }}
              endAdornment={
                <InputAdornment position="start">
                  <EmailOutlined />
                </InputAdornment>
              }
            />
            <Button variant="contained" sx={{ borderRadius: 3,width:'100%',mt:2 }} >Notify</Button>
            <Button variant="contained" sx={{ borderRadius: 3,width:'100%',mt:2 }} onClick={()=>navigate('/')} >Back to Home</Button>
          </Box>
        </Card>
      </Card>
    </div>
  );
}
