
function RenderTip({tip}){
    return(
    <>
    <div className="tipcard">
        <h6>{tip.content}</h6>
        <a href={tip.link}>{tip.link}</a>
    </div>
    </>
    )
}

export default RenderTip