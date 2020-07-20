import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { UserContext } from "./UserContext";
import io from "socket.io-client";


const NewPlayer = (props) => {
  const user = useContext(UserContext);
  const [newplayer, setNewPlayer] = useState("");
  const [joinRoom, setJoinRoom] = useState("");
  const [userApiKey, setUserApiKey] = useState("");

  


  useEffect(() => {
    const getUser = async () => {
      const response = await Axios.post(
        "http://178.128.206.150:7000/register_candidate"
      );
      const userApikey = response.data.apikey;
      user.setApikey(userApikey);
    };
    getUser();
  }, []);

  function onClick() {
    props.history.push("/boardlist");
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  const socket = io("ws://178.128.206.150:7000/?id={user.playerId}");

  function handleJoinRoom(e){
      user.setBoardid(e.target.value)
      socket.emit('join_room', user.boardid, (data) => {
        console.log(`Ack: ${data}`);
        });
    props.history.push('/game')

  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Input your name"
          onChange={(e) => user.setName(e.target.value)}
        />
        <button type="button" onClick={onClick}>
          New Game
        </button>
        <hr />
        <input
          type="text"
          placeholder="name"
          onChange={(e) => user.setNewPlayer(e.target.value)}
        />
        <input
          type="text"
          placeholder="room id"
          onChange={(e) => user.setBoardid(e.target.value)}
        />
        <button type="button" onClick={handleJoinRoom}>join room</button>
      </form>
      <h1>{user.name}</h1>
    </div>
  );
};

export default NewPlayer;
