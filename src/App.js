import React from 'react'
import "./App.css"
import {Route,Switch,Redirect} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MovieDetail from './components/MovieDetail'





const App = () => {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home type="home"/>
        </Route>
        <Route  path="/movies">
          <Home type="movies"/>
        </Route>
        <Route  path="/tvshows">
          <Home type="tvshows"/>
        </Route>
        <Route path="/detail">
            <MovieDetail/>
        </Route>
        <Redirect to="/"/>
      
      </Switch>
    </>
  )
}

export default App
