import React from 'react';
import { Card, CardMedia, OutlinedInput, InputAdornment, Typography, Button, Box, Checkbox, Link } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { EmailOutlined, LockOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import {API} from '../shared/api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginImg = require ('./../assets/login.jpg');


interface State {
  email: string;
  password: string;
  showPassword: boolean;
}

function Login() {
  const navigate = useNavigate();
  const [checked, setChecked] = React.useState(false);
  const [values, setValues] = React.useState<State>({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = async(event:any) => {
    const { name, value }=event.target;
   setValues((prev:any)=>({...prev,[name]:value}))
};

  const handleChangeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const formSubmit=async()=>{
    const formData=JSON.parse(JSON.stringify(values));
    
    console.log("no error")
    const response = await API('post','/login',formData)
    console.log(response)
   
    if(!response.data.success){
      const {msg}=response.data
          toast(msg)
        return;
    }
    const {data}=response.data
    localStorage.setItem('acadeUser',JSON.stringify(data))         
     return navigate('/',{state:"login"});  
}
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
                  name="email"
                  placeholder='Your Email Address'
                  sx={{ display: 'flex', flexDirection: 'row-reverse', pl: 2 }}
                  onChange={handleChange}
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
                  name="password"
                  placeholder='Password'
                  sx={{ display: 'flex', flexDirection: 'row-reverse', pl: 2 }}
                  onChange={handleChange}
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
              <Button variant="contained" sx={{ borderRadius: 3, backgroundColor: 'black', color: 'white' }} onClick={formSubmit}> Login</Button>
              <Typography sx={{fontSize:14}}>Dont Have Account <Link sx={{ textDecoration: 'none',cursor:'pointer' }} onClick={()=>navigate("/register")}>Register</Link></Typography>
            </div>
            <div style={{ display: 'flex', flexDirection: "column", gap: '5px',marginTop:5 }}>
              <Typography variant="h6" sx={{fontSize:14}}>Or, Signin with your social Account</Typography>
              <Button variant="contained" sx={{ borderRadius: 3, display:'flex', justifyContent:'flex-start', gap: '15px' }}><GoogleIcon /> <span>Sign in With Google</span></Button>
              <Button variant="contained" sx={{ borderRadius: 3, display:'flex', justifyContent:'flex-start', gap:'15px' }}><FacebookIcon /> <span>Sign in With Facebook</span></Button>
            </div>
          </div>
        </div>
      </Card>
      <ToastContainer/>
    </Card>
  )
}

export default Login;