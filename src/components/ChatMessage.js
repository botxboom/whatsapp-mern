import React from 'react'
import "./Chat.css"

function ChatMessage(props) {
    return (
        <div>
            <p className={props.type}>
                <span className="chat__name">Name</span>
                this is a message
                <span className="chat__timestamp">
                {new Date().toUTCString()}
                </span>
            </p>  
        </div>
    )
}

export default ChatMessage
