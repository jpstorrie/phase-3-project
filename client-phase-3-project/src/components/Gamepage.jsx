import { useEffect,useState } from "react"
import {useParams} from "react-router-dom"

import CharacterRenderPage from "./Characterrenderpage"
import RenderTip from "./Rendertip"


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
            console.log(data[2])
        })
    }, [])

    const characterList = character.map((char, index) => {
        return <CharacterRenderPage key={index} char={char} />
    })

    function handleAddCharacter(e){
        e.preventDefault()
        const newCharacter = {
            name: e.target.name.value,
            image: e.target.image.value,
            bio: e.target.bio.value,
            game_id: game.id
        }

        fetch(`/api/game/character/new`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newCharacter)
        })
        .then(r => r.json())
        .then(data => {
            setCharacter((data) => [...character, data])
            console.log(data)
        })

        e.target.reset()
    }
    let listTip = tips.map((tip, index) => {
        return <RenderTip key={index} tip={tip} />
    }) 

    let loreList = lore.map((lor) => {
        return
    })
    
    if(!game || !character || !tips || !lore){
        return (
        <>
            <h1>LOADING</h1>
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
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={game.image} className="img-fluid rounded-start" alt={game.name}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{game.name}</h5>
                            <p className="card-text">{game.bio}</p>
                            <p className="card-text"><small className="text-muted">Release date: {game.release_date}</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Characters
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body">
                            <div className="container">
                            {characterList} 
                            </div>
                            <form onSubmit={handleAddCharacter}>
                                <h4>Add Character</h4>
                                <label>Name</label>
                                <input type="text" name="name"></input>
                                <label>Bio</label>
                                <input type="text" name="bio"></input>
                                <label>Image</label>
                                <input type="text" name="image"></input>
                                <button>Add</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Lore
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Tips
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingThree">
                        <div className="accordion-body">
                        {listTip}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
}


export default Gamepage