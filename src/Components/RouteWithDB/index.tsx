import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Topbar/Topbar'
const index = (props:any) => {
  return (
    <div style={{ width: "100vw" }}>
      <div style={{ textAlign: "center" }}><props.Component/></div>
      <Topbar/>
      <Sidebar/>      
    </div>
  )
}

export default index