// import { Card } from "@mui/material";
import React,{useCallback} from "react";
import '../../style/SideBar.css';
import { BiHomeAlt } from 'react-icons/bi';
import { AiFillMessage,AiOutlineUser } from 'react-icons/ai'
import { HiOutlineUserGroup,HiOutlineLogout } from 'react-icons/hi';
import { VscBell } from 'react-icons/vsc';
import { IoCalendar } from 'react-icons/io5';
import { TbPuzzle } from 'react-icons/tb';
import { FaMagic } from 'react-icons/fa';
import {BsBookmark} from 'react-icons/bs';
import {SiHtmlacademy} from 'react-icons/si';
import {useNavigate} from 'react-router-dom';


export default function Sidebar() {
const navigate=useNavigate()


const logOut=useCallback(
  () => {
    localStorage.clear()
    navigate('/login')
  },[],
)

  return (
    <div className="sidebar-container">
    <div className="sidebar">
      <div className="sidebar-feeds"><span>Feeds</span>
        <BiHomeAlt style={{cursor:'pointer'}} onClick={()=>navigate('/')}/>
        <HiOutlineUserGroup style={{cursor:'pointer'}} onClick={()=>navigate('/group')}/>
        <SiHtmlacademy style={{cursor:'pointer'}} onClick={()=>navigate('/academic')}/></div>
      <div className="sidebar-explore">
        <span>Explore</span>
        <FaMagic style={{cursor:'pointer'}} onClick={()=>navigate('/create')}/>
        <TbPuzzle style={{cursor:'pointer'}} onClick={()=>navigate('/chellanges')}/>
        <IoCalendar style={{cursor:'pointer'}} onClick={()=>navigate('/events')}/>
        </div>
      <div className="sidebar-pages"><span>Pages</span>
      <AiFillMessage style={{cursor:'pointer'}} onClick={()=>navigate('/messages')}/>
      <VscBell style={{cursor:'pointer'}} onClick={()=>navigate('/notification')}/>
      </div>
      <div className="sidebar-accounts"><span>Accounts</span>
      <BsBookmark style={{cursor:'pointer'}} onClick={()=>navigate('/saved')}/>
      <AiOutlineUser style={{cursor:'pointer'}} onClick={()=>navigate('/account')}/>
      <HiOutlineLogout style={{cursor:'pointer'}} onClick={()=>logOut()}/>
      </div>
    </div>
    </div>
  )
}