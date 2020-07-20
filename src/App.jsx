import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import BoardList from './components/BoardList';
import NewPlayer from './components/NewPlayer';
import Game from './components/Game';
import {UserProvider} from './components/UserContext'

function App() {
  return(
    <UserProvider>

    <Switch>
    <Route exact path='/' component={NewPlayer}/>
    <Route path='/boardlist' component={BoardList}/>
    <Route path='/game' component={Game}/>
  </Switch>
  </UserProvider>

  )
}

export default App;
