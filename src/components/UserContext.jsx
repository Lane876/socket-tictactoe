import React, { createContext, useState } from "react";

export const UserContext = createContext();

// This context provider is passed to any component requiring the context
export const UserProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [newPlayer, setNewPlayer] = useState("");
  const [apikey, setApikey] = useState("");
  const [boardid, setBoardid] = useState("");
  const [playerId, setPlayerId] = useState("");
  const [boardList, setBoardList] = useState("");
  const [joinRoomId, setJoinRoomId] = useState('')

  return (
    <UserContext.Provider
      value={{
        name,
        setName,
        newPlayer,
        setNewPlayer,
        apikey,
        setApikey,
        boardid,
        setBoardid,
        playerId,
        setPlayerId,
        boardList,
        setBoardList,
        joinRoomId,
        setJoinRoomId
      }}
    >
      {children}
    </UserContext.Provider>
  );
};