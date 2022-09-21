import React from "react";
import { Card, Typography, TextField,Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ChangePassword() {
    return (
        <div style={{width:'100vw',height:'100vh', display:'flex', flexDirection:'column',gap:'10px',alignItems:'center',justifyContent:"center"}}>
            <Card sx={{width:'50%'}}>
                <div style={{display:'flex',flexDirection:'row',gap:'10px',backgroundColor:'#0055ff',height:'80px',color:'white',alignItems:'center'}}>
                    <ArrowBackIcon sx={{marginLeft:'10px'}} />
                    <Typography>Change Password</Typography>
                </div>
                <form className="changePwdForm" style={{display:'flex',flexDirection:'column',gap:'10px',alignItems:'flex-start',margin:'50px'}}>
                    <label htmlFor='currentPassword'> Current Password</label>
                    <TextField id="currentPassword" variant="outlined" sx={{width:'90%'}} />
                    <label htmlFor='changePassword'> Change Password</label>
                    <TextField id="changePassword" variant="outlined"  sx={{width:'90%'}}/>
                    <label htmlFor='confirmChangePassword'>Confirm Change Password</label>
                    <TextField id="confirmChangePassword" variant="outlined" sx={{width:'90%'}} />
                    <Button variant="contained" sx={{backgroundColor:'#05f'}}>Save</Button>
                </form>
            </Card>
        </div>
    )
}