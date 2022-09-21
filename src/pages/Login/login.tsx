import React from 'react';
import { Card, CardMedia, OutlinedInput, InputAdornment, Typography, Button, Box, Checkbox, Link } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { EmailOutlined, LockOutlined } from '@mui/icons-material';

const LoginImg = require ('../../assets/login.jpg');


interface State {
  email: string;
  password: string;
  showPassword: boolean;
}

function Login() {
  const [checked, setChecked] = React.useState(false);
  const [values, setValues] = React.useState<State>({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleChangeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Card sx={{ display: "flex", flexDirection: "row", height: "100vh", width: "100vw", fontFamily:'Roboto' }}>
      <CardMedia
        component="img"
        sx={{ width: "60%", ['@media (max-width:1200px)']: { display: "none" } }}
        image={LoginImg}
        alt="LoginImg"
      />
      <Card sx={{ width: "40%", display: 'flex', alignItems: 'center', justifyContent: 'center', ['@media (max-width:1200px)']: { width: '100%' } }}>
        <div >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <Typography variant="h4" sx={{ pb: 2 }}>Login into Your Account</Typography>
            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px',width:"100%" }}>
              <Box>
                <OutlinedInput
                  id="name"
                  placeholder='Your Email Address'
                  sx={{ display: 'flex', flexDirection: 'row-reverse', pl: 2 }}
                  endAdornment={
                    <InputAdornment position="start">
                      <EmailOutlined />
                    </InputAdornment>
                  }
                />
              </Box>
              <Box>
                <OutlinedInput
                  id="name"
                  placeholder='Password'
                  sx={{ display: 'flex', flexDirection: 'row-reverse', pl: 2 }}
                  endAdornment={
                    <InputAdornment position="start">
                      <LockOutlined />
                    </InputAdornment>
                  }
                />
              </Box>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',gap:'55px' }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                  <Checkbox
                    checked={checked}
                    onChange={handleChangeCheck}
                    inputProps={{ 'aria-label': 'controlled' }}
                    sx={{padding:0}}
                  />
                  <Typography sx={{fontSize:14}}>Remember me</Typography>
                </div>
                <div>
                <Link sx={{ textDecoration: 'none',fontSize:15 }}>Forgot Your Password</Link>
                </div>
              </div>
            </form>
            <div style={{ display: 'flex', flexDirection: "column", gap: '10px' }}>
              <Button variant="contained" sx={{ borderRadius: 3, backgroundColor: 'black', color: 'white' }}> Login</Button>
              <Typography sx={{fontSize:14}}>Dont Have Account <Link sx={{ textDecoration: 'none' }}>Register</Link></Typography>
            </div>
            <div style={{ display: 'flex', flexDirection: "column", gap: '5px',marginTop:5 }}>
              <Typography variant="h6" sx={{fontSize:14}}>Or, Signin with your social Account</Typography>
              <Button variant="contained" sx={{ borderRadius: 3, display:'flex', justifyContent:'flex-start', gap: '15px' }}><GoogleIcon /> <span>Sign in With Google</span></Button>
              <Button variant="contained" sx={{ borderRadius: 3, display:'flex', justifyContent:'flex-start', gap:'15px' }}><FacebookIcon /> <span>Sign in With Facebook</span></Button>
            </div>
          </div>
        </div>
      </Card>
    </Card>
  )
}

export default Login;