import React from 'react';
import { Card, CardMedia, Typography, Box, Checkbox, Button, Link,OutlinedInput, InputAdornment, } from '@mui/material';
import { AccountCircle, EmailOutlined, LockOutlined } from '@mui/icons-material';

const SignupImg = require('../../assets/signup.jpg');


interface State {
    name: string,
    email: string;
    password: string;
    confirmPassword: string
}

export default function Signup() {
    const [checked, setChecked] = React.useState(false);
    const [values, setValues] = React.useState<State>({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    return (
        <Card sx={{ display: "flex", flexDirection: "row", height: "100vh", width: "100vw", fontFamily:'Roboto' }}>
            <CardMedia
                component="img"
                sx={{ width: "60%",['@media (max-width:1200px)']:{display:"none"} }}
                image={SignupImg}
                alt="SigninImg"
            />
            <Card sx={{ width: "40%", display: 'flex', alignItems: 'center', justifyContent: 'center',['@media (max-width:1200px)']:{width:'100%'} }}>
                <div >
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                        <Typography variant="h4" sx={{pb:2}}>Create Your Account</Typography>
                        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
                            <Box>
                                <OutlinedInput
                                    id="name"
                                    placeholder='Your name'
                                    sx={{ display: 'flex', flexDirection: 'row-reverse', pl: 2 }}
                                    endAdornment={
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    }
                                />
                            </Box>
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
                            <Box>
                                <OutlinedInput
                                    id="name"
                                    placeholder='Confirm Password'
                                    sx={{ display: 'flex', flexDirection: 'row-reverse', pl: 2 }}
                                    endAdornment={
                                        <InputAdornment position="start">
                                            <LockOutlined />
                                        </InputAdornment>
                                    }
                                />
                            </Box>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                                <Typography>Accept Term and Conditions</Typography>
                            </div>
                        </form>
                        <div style={{ display: 'flex', flexDirection: "column", gap: '5px' }}>
                            <Button variant="contained" sx={{ borderRadius: 3,backgroundColor:'black',color:'white' }}> Register</Button>
                            <Typography >Aldready Have Account <Link sx={{textDecoration:'none'}}>Login</Link></Typography>
                        </div>
                    </div>
                </div>
            </Card>
        </Card>
    )
}