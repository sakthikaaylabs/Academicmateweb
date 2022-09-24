import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Topbar/Topbar'
const index = (props:any) => {
  return (
    <div style={{ width: "100vw" }}>
       <Topbar/>        
      <div style={{ textAlign: "center" }}><props.Component/></div>    
      <Sidebar/>     
    </div>
  )
}

export default index