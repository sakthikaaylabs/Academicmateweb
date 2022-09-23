import React from 'react';
import '../../style/errorpage.css'
import { Button, Typography } from '@mui/material';
const ErrImg = require('../../assets/404page2.jpg')

const  Notfound = () => {
  return (
    <div className="notfound-container">
      <Typography variant='h3' className='forgotPwd-texth3'>Oops! It looks like <br/>you're lost</Typography>
      <img src={ErrImg} alt="404 Not found" className="notfound-image" />
      <Typography variant='h6' className='forgotPwd-texth6'>The page you're looking for isn't available. Try to search again or use the go to</Typography>
      <Button variant='contained' sx={{ borderRadius: 3, backgroundColor: 'black', color: 'white',marginTop:'15px' }}>Home Page</Button>
    </div>
  )
}

export default Notfound
