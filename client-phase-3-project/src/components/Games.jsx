import { useEffect, useState } from "react";
import {NavLink} from "react-router-dom"

import RenderGamesCard from "./ReandergamesCard";

function Games() {

  const [games, setGames] = useState([])

  useEffect(() => {
    fetch("/api/games")
      .then((r) => r.json())
      .then((data) => setGames(data));
  }, []);

    const gameList = games.map((game) => {
      return <RenderGamesCard key={game.id} game={game}/>
    })

  return (
    <>
      <h1>GAMES GAMES GAMES</h1>
      <NavLink
      to="/game/new">
      <button>ADD GAME</button><br></br>
      </NavLink>
      {gameList}
    </>
  )
}
export default Games;
