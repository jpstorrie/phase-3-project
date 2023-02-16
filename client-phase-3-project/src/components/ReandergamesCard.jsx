import {NavLink} from "react-router-dom"

function RenderGamesCard ({game}) {
    
    return (
        <>
        <NavLink
        to={`/game/${game.id}`}
        >
        <div className="game-container" id="gamecard" style={{backgroundImage: `url(${game.image})`}}>
            
            <div className="game-body">
                <h5>{game.name}</h5>
                <p>{game.platform}</p>
            </div>
        </div>
        </NavLink>
        </>
    )
}

export default RenderGamesCard