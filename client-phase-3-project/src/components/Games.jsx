import { useEffect, useState } from "react";

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
      <button>ADD GAME</button><br></br>
      {gameList}
    </>
  )
}
export default Games;
