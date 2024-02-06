import React, { useEffect, useState } from 'react';
import "./Sidebar.css";
import { Avatar, IconButton } from '@mui/material';
/* npm install @mui/icons-material */
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import CommentIcon from '@mui/icons-material/Comment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';
import db from './firebase';
import { useSetValue } from "./StateProvider";

function Sidebar() {
    const[rooms, setRooms]=useState([]);
    const [{ user }] = useSetValue();

    useEffect(()=>{
        const unSubscripe = db.collection("rooms").onSnapshot((snapshot)=>
        setRooms(
            snapshot.docs.map((doc)=>({
                id:doc.id,
                data:doc.data(),
            })
          )
         )
        );
        return ()=>{ unSubscripe(); }
    },[])

  return (
    <div className='sidebar'>
        <div className='sidebar__header'>
            <Avatar src={user?.photoURL}/>
            <div className='sidebar__headerRight'>
                <IconButton> <DonutLargeIcon/> </IconButton>
                <IconButton> <CommentIcon/>  </IconButton>
                <IconButton> <MoreVertIcon/> </IconButton>
            </div>
        </div>
        <div className='sidebar__search'>
            <div className='slidebar__search__container'>
                <SearchIcon className='icon'/>
                <input placeholder='Search or start new chat' type='text'/>
            </div>
        </div>
        <div className='sidebar__chats'>
            <SidebarChat addNewChat></SidebarChat>
            {rooms.map((room)=>(
                <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
            ))}
        </div>
      
    </div>
  )
}

export default Sidebar
