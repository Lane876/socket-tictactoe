import React, { useContext, useEffect } from "react";
import io from "socket.io-client";
import { UserContext } from "./UserContext";

const Game = (props) => {
  const { playerId, boardid, newPlayer } = useContext(UserContext);

//   console.log(boardid);
  
const socket = io("ws://178.128.206.150:7000/?id={playerId}");
socket.on("connect", () => {
  console.log(socket.connected);
});
socket.on('joined', (responseCode) => {
      console.log(`${responseCode}`);
      })

// socket.emit('join_room', boardid, (responseCode) => {
//   console.log(`${responseCode}`);
//   });
    


    function handleLeave(){
        socket.emit('leave_room', boardid, (responseCode) => {
            console.log(`Ack: ${responseCode}`);
            });
        props.history.push("/")

    }

  return (
    <div>
      <h1>Player id: {playerId}</h1>
      <hr />
      <h1>Board id: {boardid}</h1>
      <hr/>
      <h1>Player 2 id: {newPlayer}</h1>
      <button onClick={handleLeave}>Leave</button>
    </div>
  );
};

export default Game;
