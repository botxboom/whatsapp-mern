import { Avatar } from '@material-ui/core'
import React from 'react'
import {Link} from 'react-router-dom'
import "./SidebarChat.css"

function SidebarChat({r}) {
    return (
        <Link to={`/rooms/${r._id}`}>
            <div className="sidebarChat">
                <Avatar />
                <div className="sidebarChat__info">
                    <h2>{r.name}</h2>
                    <p>{r.lastMsz}</p>
                </div>
            </div>
        </Link>
    )
}

export default SidebarChat
