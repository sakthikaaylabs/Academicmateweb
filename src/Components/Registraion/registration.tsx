import React, { useEffect,useState } from 'react';
import { Card, CardMedia, Typography, Box, Checkbox, Button, Link, OutlinedInput, Alert, InputAdornment,FormHelperText } from '@mui/material';
import { AccountCircle, EmailOutlined, LineAxisOutlined, LockOutlined } from '@mui/icons-material';
// import { API } from '../../api/index'  // fetch (method,path,reqData)
import { useNavigate } from 'react-router-dom';
const SignupImg = require('../../assets/signup.jpg');



interface State {
    userName: string,
    email: string;
    password: string;
    confirmPassword: string
}

export default function Signup() { 
    const navigate=useNavigate() 
    const [checked, setChecked] = React.useState(false);
    const [alert, setalert] = useState<any>('')
    const [values, setValues] =useState<State>({
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
const [errorObj, seterrorObj] = useState<any>({
    userName:"",
    email:"",
    password:"",
    confirmPassword:""})

    const handleChange = async(event:any) => {
        const { name, value }=event.target;
       setValues((prev:any)=>({...prev,[name]:value}))
    };
    const validate=(data:object)=>{
        const emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        const pwdRegex=/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,15}$/
        let isError:boolean=false
        let temp:object={}
        Object.entries(data).map(([key,value])=>{
           if(value===''){ 
            isError=true
            temp={...temp,[key]:`Please enter the ${key}`}
            return;
        }
        if(key.includes('email')&& !emailRegex.test(value)){
            temp={...temp,[key]:`Please enter the valid Email`}
            return
        }
        temp={...temp,[key]:""}
        return;

        })
        return {error:temp,isError}
    }
    const formSubmit=async()=>{
        const emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        const pwdRegex=/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,15}$/
        const formData=JSON.parse(JSON.stringify(values));
        const {isError,error}=validate(formData);
        seterrorObj((prev:any)=>({...prev,...error}))
        if(isError) return;
        const {password,confirmPassword}=formData;
        if(!pwdRegex.test(password)){
            seterrorObj((prev:any)=>({...prev,password:"Please enter valid password"}))
            return
        }
        if(password!==confirmPassword) {
            seterrorObj((prev:any)=>({...prev,confirmPassword:"Please enter same password"}))
            return
        };
        
        // const response = await API('post','/register',formData);
        // if(response.data.success){
        //     setalert(<Alert severity="success">Login Successfull</Alert>)
        //     return navigate('/')
        // }

    }
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
                                    name="userName"
                                    required={true}
                                    error={errorObj.userName!==''}
                                    value={values.userName}
                                    placeholder='Your name'
                                    sx={{ display: 'flex', flexDirection: 'row-reverse', pl: 2 }}
                                    endAdornment={
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    }
                                    onChange={handleChange}
                                />
                                {errorObj.userName &&(<FormHelperText sx={{color:'red'}}>{errorObj.userName}</FormHelperText>)}
                            </Box>
                            <Box>
                                <OutlinedInput
                                    id="name"
                                    name="email"
                                    required={true}
                                    error={errorObj.email!==''}
                                    value={values.email}
                                    placeholder='Your Email Address'
                                    sx={{ display: 'flex', flexDirection: 'row-reverse', pl: 2 }}
                                    endAdornment={
                                        <InputAdornment position="start">
                                            <EmailOutlined />
                                        </InputAdornment>
                                    }
                                    onChange={handleChange}
                                />
                                {errorObj.email &&(<FormHelperText sx={{color:'red'}}>{errorObj.email}</FormHelperText>)}
                            </Box>
                            <Box>
                                <OutlinedInput
                                    id="name"
                                    name="password"
                                    error={errorObj.password!==''}
                                    required={true}
                                    value={values.password}
                                    placeholder='Password'
                                    sx={{ display: 'flex', flexDirection: 'row-reverse', pl: 2 }}
                                    endAdornment={
                                        <InputAdornment position="start">
                                            <LockOutlined />
                                        </InputAdornment>
                                    }
                                    
                                    onChange={handleChange}
                                />
                                {errorObj.password &&(<FormHelperText sx={{color:'red'}}>{errorObj.password}</FormHelperText>)}
                            </Box>
                            <Box>
                                <OutlinedInput
                                    id="name"
                                    name="confirmPassword"
                                    required={true}
                                    error={errorObj.confirmPassword!==''}
                                    value={values.confirmPassword}
                                    placeholder='Confirm Password'
                                    sx={{ display: 'flex', flexDirection: 'row-reverse', pl: 2 }}
                                    endAdornment={
                                        <InputAdornment position="start">
                                            <LockOutlined />
                                        </InputAdornment>
                                    }
                                    onChange={handleChange}
                                />
                                {errorObj.confirmPassword &&(<FormHelperText sx={{color:'red'}}>{errorObj.confirmPassword}</FormHelperText>)}
                            </Box>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Checkbox
                                    checked={checked}
                                    onChange={(e)=>setChecked(e.target.checked)}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                                <Typography>Accept Term and Conditions</Typography>
                            </div>
                        </form>
                        <div style={{ display: 'flex', flexDirection: "column", gap: '5px' }}>
                            <Button variant="contained" sx={{ borderRadius: 3,backgroundColor:'black',color:'white' }} disabled={!checked} type='submit' onClick={()=>formSubmit()}> Register</Button>
                            <Typography >Aldready Have Account <Link sx={{textDecoration:'none',cursor:'pointer'}} onClick={()=>navigate('/')}>Login</Link></Typography>
                        </div>
                    </div>
                </div>
            </Card>
            {alert}
        </Card>
    )
}