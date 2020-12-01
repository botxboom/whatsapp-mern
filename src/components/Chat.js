import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, MicOutlined, MoreVert, SearchOutlined } from '@material-ui/icons'
import React, {useState, useEffect} from 'react'
import "./Chat.css"
import ChatMessage from "./ChatMessage"
import axios from "./axios"
import { useParams } from 'react-router-dom'

function Chat(props) {

    const [input, setInput] = useState("")
    const [roomName, setRoomName] = useState();
    const {roomId} = useParams();

    //create new messages
    const sendMessage = async (e) => {
        e.preventDefault()


        await axios.post('/messages/new', {
            "message": input,
            "name": "Gulshan",
            "timestamp": "just now",
            "received": true
        })
        setInput('')
    }

    useEffect(() => {
        axios.get(`/findOne/${roomId}`)
        .then(response => {
            setRoomName(response.data)
        })
    }, [roomId])


    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seen at....</p>
                </div>

                <div classNam="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                {
                    props.messages.map((message) =>(
                        <p className={`chat__message ${message.received && "chat__reciever"}`}>
                            <span className="chat__name">{message.name}</span>
                            {message.message}
                            <span className="chat__timestamp">
                            {message.timestamp}
                            </span>
                        </p>)  
                    )
                }
            </div>

            <div className="chat__footer">
                <InsertEmoticon />
                <form>
                    <input
                        value={input}
                        onChange={(e => setInput(e.target.value))}
                        placeholder="Type a message"
                        type="text"
                    />
                    <button 
                    value={input}
                    onChange={e=>e.target.value}
                    onClick={sendMessage}
                    type="submit">
                        Send message
                    </button>
                </form>
                <MicOutlined />
            </div>
        </div>
    )
}

export default Chat
