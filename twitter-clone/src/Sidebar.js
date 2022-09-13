import React from "react";
import './Sidebar.css';
import { Twitter } from "@mui/icons-material";
import SidebarOption from "./SidebarOption";
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Sidebar() {
    return (
      <div className="sidebar">

        {/* twitter icon */}
        <Twitter className="text-[#ffffff] m-[20px]"/>

        <SidebarOption active Icon={HomeIcon} text='Home'/>
        <SidebarOption Icon={TagIcon} text='Explore'/>
        <SidebarOption Icon={NotificationsNoneIcon} text='Notifications'/>
        <SidebarOption Icon={EmailOutlinedIcon} text='Messages'/>
        <SidebarOption Icon={BookmarkBorderOutlinedIcon} text='Bookmarks'/>
        <SidebarOption Icon={ListAltOutlinedIcon} text='Lists'/>
        <SidebarOption Icon={PermIdentityIcon} text='Profile'/>
        <SidebarOption Icon={MoreHorizIcon} text='More'/>
        
        {/* Button -> tweet */}

      </div>
    );
}

export default Sidebar;