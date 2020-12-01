import React, {useState} from 'react'
import "./Sidebar.css"
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core'
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from "./SidebarChat"
import axios from "./axios"


function Sidebar(props) {

    const [room, setRoom] = useState([])

    function createChat(e){
        
        const roomName = prompt("Please enter chat name")

        if(roomName){
            //create new room
                axios.post('/rooms/new', {
                    "name": roomName,
                    "lastMsz": "Hiii..",
                })
                setRoom([...room, roomName])
            }
            



            e.preventDefault()
        }

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar 
                src="https://media-exp1.licdn.com/dms/image/C5103AQEVZ4frCf-u9Q/profile-displayphoto-shrink_200_200/0?e=1610582400&v=beta&t=UPiXf_AjS4f3FDS56ZF4istw2J621z_bJ97BE-aQrMo"/>

                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>  
            <div className="sidebar__search">
                    <div className="sidebar__searchContainer">
                        <SearchOutlined />
                        <input placeholder="Search or start new chat" type="text" />                  
                    </div>
            </div>

            <div onClick={createChat} className="sidebarChat">
                <h2>Add new Chat</h2>
            </div>

            <div className="sidebar__chats">
                {props.rooms.map((room) => (
                    <SidebarChat r={room}/>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
