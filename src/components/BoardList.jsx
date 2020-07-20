import React, { useContext, useEffect } from 'react'
import { UserContext } from './UserContext'
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Game from './Game';

const BoardList = (props) => {
    const {name, apikey, boardid, setBoardid, playerId, setPlayerId, boardList, setBoardList} = useContext(UserContext)


    useEffect(()=>{
        const fetch = async () => {
            const response = await Axios.post("http://178.128.206.150:7000/player", {name: name, apikey: apikey})
            setPlayerId(response.data.id)
        }
        fetch()
    },[])

    useEffect(()=>{
        const fetch = async () => {
            const response = await Axios.post("http://178.128.206.150:7000/create_board", {apikey: apikey})
            setBoardid(response.data.id)
        }
        fetch()
    },[])


    useEffect(()=>{
        const fetch = async () => {
            const response = await Axios.post("http://178.128.206.150:7000/boards", {apikey: apikey})
            setBoardList(response.data.id)
        }
        fetch()
    },)

    return (
        <div>
            <h1>Hello {name} </h1>
            <hr/>
            <h3>{name}'s' id: {playerId}</h3>
            <hr/>
            <h1>This board id: {boardid}</h1>
            <hr/>
            <h3>Retrieve the list of boards that have been created with the givenAPIKEY : {boardList}</h3>
            <button onClick={()=>props.history.push('/')}>Back</button>
            <button>
                <Link to='/game'>
                    Game
                </Link>
            </button>
        </div>
    )
}

export default BoardList
