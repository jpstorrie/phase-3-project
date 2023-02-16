import { useEffect, useState } from "react";
import {NavLink} from "react-router-dom"

import RenderGamesCard from "./ReandergamesCard";

function Games() {

  const [games, setGames] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("/api/games")
      .then((r) => r.json())
      .then((data) => setGames(data));
  }, []);

    function handleChange(e){
      setSearch(e.target.value)
    }

    const filteredGames = games.filter((game) => {
      return game.name.toLowerCase().includes(search.toLowerCase())
    })

    const gameList = filteredGames.map((game) => {
      return <RenderGamesCard key={game.id} game={game}/>
    })
    ////////////////////
    /// action game list
    //////////////////// 
    const actionGames = filteredGames.filter((game) => {
      return game.genre.toLowerCase().includes("action")
    })

    const actionList = actionGames.map((game) => {
      return <RenderGamesCard key={game.id} game={game} />
    })
    ///////////////////////
    /// adventure game list
    ///////////////////////
    const adventureGames = filteredGames.filter((game) => {
      return game.genre.toLowerCase().includes("adventure")
    })

    const adventureList = adventureGames.map((game) => {
      return <RenderGamesCard key={game.id} game={game} />
    })

    ///////////////
    //fps game list
    ///////////////

    const fpsGames = filteredGames.filter((game) => {
      return game.genre.toLowerCase().includes("fps")
    })

    const fpsList = fpsGames.map((game) => {
      return <RenderGamesCard key={game.id} game={game} />
    })

    //////////////////////
    //open world game list
    //////////////////////

    const owGames = filteredGames.filter((game) => {
      return game.genre.toLowerCase().includes("open_world")
    })

    const owList = owGames.map((game) => {
      return <RenderGamesCard key={game.id} game={game} />
    })

    //////////////////////
    //rpg game list
    //////////////////////

    const rpgGames = filteredGames.filter((game) => {
      return game.genre.toLowerCase().includes("rpg")
    })

    const rpgList = rpgGames.map((game) => {
      return <RenderGamesCard key={game.id} game={game} />
    })

    //////////////////////
    //Turn based list
    //////////////////////

    const tbGames = filteredGames.filter((game) => {
      return game.genre.toLowerCase().includes("turn_based")
    })

    const tbList = tbGames.map((game) => {
      return <RenderGamesCard key={game.id} game={game} />
    })

    //////////////////////
    //horror list
    //////////////////////

    const horrorGames = filteredGames.filter((game) => {
      return game.genre.toLowerCase().includes("horror")
    })

    const horrorList = horrorGames.map((game) => {
      return <RenderGamesCard key={game.id} game={game} />
    })

    //////////////////////
    //multiplayer list
    //////////////////////

    const multiGames = filteredGames.filter((game) => {
      return game.genre.toLowerCase().includes("multiplayer")
    })

    const multiList = multiGames.map((game) => {
      return <RenderGamesCard key={game.id} game={game} />
    })

    //////////////////////
    //rts list
    //////////////////////

    const rtsGames = filteredGames.filter((game) => {
      return game.genre.toLowerCase().includes("rts")
    })

    const rtsList = rtsGames.map((game) => {
      return <RenderGamesCard key={game.id} game={game} />
    })

  return (
    <>
      <h1>GAMES GAMES GAMES</h1>
      <NavLink
      to="/game/new">
      <button>ADD GAME</button>
      </NavLink>
      <label style={{margin: "5px 5px 5px 50px"}}>Search</label>
      <input type="text" onChange={handleChange}></input>
      <br></br>
      <h2 style={{margin: "15px 10px 10px 10px"}}>ACTION</h2>
      {actionList}
      <h2 style={{margin: "15px 10px 10px 10px"}}>ADVENTURE</h2>
      {adventureList}
      <h2 style={{margin: "15px 10px 10px 10px"}}>FPS</h2>
      {fpsList}
      <h2 style={{margin: "15px 10px 10px 10px"}}>OPEN WORLD</h2>
      {owList}
      <h2 style={{margin: "15px 10px 10px 10px"}}>RPG</h2>
      {rpgList}
      <h2 style={{margin: "15px 10px 10px 10px"}}>TURN-BASED</h2>
      {tbList}
      <h2 style={{margin: "15px 10px 10px 10px"}}>HORROR</h2>
      {horrorList}
      <h2 style={{margin: "15px 10px 10px 10px"}}>MULTIPLAYER</h2>
      {multiList}
      <h2 style={{margin: "15px 10px 10px 10px"}}>RTS</h2>
      {rtsList}
    </>
  )
}
export default Games;
