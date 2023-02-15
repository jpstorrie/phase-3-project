function RenderLore({lor}){

    function handleClick(){
        
        fetch(`/api/game/lore/delete/${lor.id}`, {
            method: 'DELETE'
        })
        
    }

    return(
        <>
        <div className="tipcard">
            <h6>{lor.content}</h6>
            <a href={lor.link}>{lor.link}</a>
            <br></br>
            <button onClick={handleClick}>Delete</button>
        </div>
    </>
    )
}

export default RenderLore