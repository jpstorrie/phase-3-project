
function RenderTip({tip, handleTipDelete}){

    function handleClick(){
        handleTipDelete(tip.id)
        fetch(`/api/game/tips/delete/${tip.id}`, {
            method: 'DELETE'
        })
        
    }

    return(
    <>
    <div className="tipcard">
        <h6>{tip.content}</h6>
        <a href={tip.link}>{tip.link}</a>
        <br></br>
        <button onClick={handleClick}>Delete</button>
    </div>
    </>
    )
}

export default RenderTip