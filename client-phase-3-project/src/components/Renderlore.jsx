function RenderLore({lor}){
    return(
        <>
        <div className="tipcard">
            <h6>{lor.content}</h6>
            <a href={lor.link}>{lor.link}</a>
        </div>
    </>
    )
}

export default RenderLore