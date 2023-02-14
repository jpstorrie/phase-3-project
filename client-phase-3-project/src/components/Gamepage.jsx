import { useEffect,useState } from "react"
import {useParams} from "react-router-dom"


function Gamepage(){
    const [game, setGame] = useState()
    const [character, setCharacter] = useState([])
    const [tips, setTips] = useState([])
    const [lore, setLore] = useState([])

    const params = useParams()

    useEffect(() => {
        fetch(`/api/games/${params.id}`)
        .then(r => r.json())
        .then(data => {
            setGame(data[0])
            setCharacter(data[1])
            setTips(data[2])
            setLore(data[3])
        })
    }, [])
    
    
    if(!game || !character || !tips || !lore){
        return (
        <>
            <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-success" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </>
        )
    }else {
        return(
        <>
            <h1>{game ? game.name : ""}</h1>
            <h1>{character ? character[0].name : ""}</h1>
            <h1>{tips ? tips[0].content : ""}</h1>
            {/* <h1>{lore[0] ? lore[0].content : ""}</h1> */}
            <image src={game.image}/>
        </>
    )
}
}


export default Gamepage