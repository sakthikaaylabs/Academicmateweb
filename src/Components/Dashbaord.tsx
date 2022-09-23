import { Card } from '@mui/material';
import React from 'react';
import './../style/dashboard.css';
import './../style/rightSidebar.css';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='home'>
        <Card className='card'>1</Card>
        <Card className='card'>2</Card>
        <Card className='card'>3</Card>
        <Card className='card'>4</Card>
        <Card className='card'>5</Card>
        <Card className='card'>6</Card>
      </div>
      <RightSidebar/>
    </div>
  )
}

const RightSidebar =( ) =>{
  return(
    <div className='right-sidebar'>
      <Card className='suggest-group'><Card className='suggest-group-tittle'><span>Suggest Group</span> see all</Card></Card>
      <Card className='suggest-page'><Card className='suggest-page-tittle'><span>Suggest Page</span>see all</Card></Card>
    </div>
  )
}

export default Dashboard
