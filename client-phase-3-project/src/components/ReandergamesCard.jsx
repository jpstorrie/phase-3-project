import {NavLink} from "react-router-dom"

function RenderGamesCard ({game}) {
    
    return (
        <>
        <NavLink
        to={`/game/${game.id}`}
        exact>
        <div class="game-container" id="gamecard" style={{backgroundImage: `url(${game.image})`}}>
            {/* <img src={game.image} class="card-img-top" alt={game.name}/> */}
            <div class="game-body">
                <p>{game.name} <br></br>{game.platform}</p>
            </div>
        </div>
        </NavLink>
        </>
    )
}

export default RenderGamesCard