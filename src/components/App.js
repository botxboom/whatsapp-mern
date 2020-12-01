import React, {useEffect, useState} from "react"
import './App.css';
import Sidebar from "./Sidebar"
import Chat from "./Chat"
import Pusher from "pusher-js"
import axios from "./axios"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Login from "./Login"



function App() {

  const [messages, setMessages] = useState([])
  const [rooms, setRooms] = useState([])

  

  //chat response
  useEffect(() => {
    axios.get('/messages/sync')
    .then(response => {
      setMessages(response.data)
    })
  }, [])

  //rooms response
  useEffect(() => {
    axios.get('/rooms/sync')
    .then(response => {
      setRooms(response.data)
    })
  }, [])

//chat pushser
  useEffect(() => {
    const pusher = new Pusher('6eb8b8b2c9774bfeca0b', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('message');
    channel.bind('inserted', (newMessage) =>{
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }

  }, [messages])

//rooms pusher
  useEffect(() => {

    const pusher = new Pusher('6eb8b8b2c9774bfeca0b', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('rooms');
    channel.bind('inserted', (newRooms) =>{
      setRooms([...rooms, newRooms])
    });

    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }

  }, [rooms])



  return (
    <div className="app">

      <div className="app__body">
        <Router>
        <Sidebar rooms={rooms}/>
          <Switch>
            <Route path="/rooms/:roomId">
              <Chat key={messages._id} messages={messages}/>
            </Route>
            <Route path="/">
            <div className="loginbackground">
            <Login />
            </div>
               
            </Route>
          </Switch>
        </Router>
      </div>

    </div>
        
  );
}

export default App;
