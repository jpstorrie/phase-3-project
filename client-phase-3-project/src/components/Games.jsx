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

    const gameList =filteredGames.map((game) => {
      return <RenderGamesCard key={game.id} game={game}/>
    })

  return (
    <>
      <h1>GAMES GAMES GAMES</h1>
      <NavLink
      to="/game/new">
      <button>ADD GAME</button><br></br>
      </NavLink>
      <label>Search</label>
      <input type="text" onChange={handleChange}></input>
      <br></br>
      {gameList}
    </>
  )
}
export default Games;
