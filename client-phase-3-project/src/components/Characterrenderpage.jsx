
function CharacterRenderPage({char}){

    return(
        <>
        <div className="card" style={{width: "200px"}}>
            <img src={char.image} className="card-img-top" alt={char.name}/>
            <div className="card-body">
                <h5 className="card-title">{char.name}</h5>
                <p className="card-text">{char.bio}</p>
            </div>
        </div>
        </>
    )
}

export default CharacterRenderPage