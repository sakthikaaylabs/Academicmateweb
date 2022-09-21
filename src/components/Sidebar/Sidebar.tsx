// import { Card } from "@mui/material";
import React from "react";
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

export default function Sidebar() {
  return (
    <div className="sidebar-container">
    <div className="sidebar">
      <div className="sidebar-feeds"><span>Feeds</span>
        <BiHomeAlt />
        <HiOutlineUserGroup />
        <SiHtmlacademy/></div>
      <div className="sidebar-explore"><span>Explore</span><FaMagic /><TbPuzzle /><IoCalendar /></div>
      <div className="sidebar-pages"><span>Pages</span><AiFillMessage /><VscBell /></div>
      <div className="sidebar-accounts"><span>Accounts</span><BsBookmark/><AiOutlineUser/><HiOutlineLogout/></div>
    </div>
    </div>
  )
}