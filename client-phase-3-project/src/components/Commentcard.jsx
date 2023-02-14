import { useState } from "react"
import { useParams } from "react-router-dom"

function CommentCard({comment}){
    const [likes, setLikes] = useState(comment.likes)
    // const params = useParams()

    function handleClick(){
        fetch(`/api/comments/like/${comment.id}`,{
            method: 'PATCH',
            headers: { "content-type": "application/json"},
            body: JSON.stringify(comment),
        })
        .then(r=> r.json())
        .then(data=> setLikes(data))
    }

    return(
        <>
        <h3>{comment.comment}</h3>
        <h3>{comment.username}</h3>
        <button onClick={()=> handleClick()}>{likes}</button>
        </>
    )

}

export default CommentCard