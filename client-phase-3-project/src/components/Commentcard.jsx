import { useState } from "react"
import { useParams } from "react-router-dom"

function CommentCard({comment, onDeleteComment, setComments, comments}){
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

    function handleDelete(){
        fetch(`/api/comments/delete/${comment.id}`,{
            method: 'DELETE'
        })
        .then(r => r.json())
        .then(() => onDeleteComment(comment))
    }

    return(
        <>
        <h3>{comment.comment}</h3>
        <h5>{comment.username}</h5>
        <button onClick={()=> handleClick()}>{likes}</button>
        <button onClick={()=> handleDelete()}>🗑</button>
        </>
    )

}

export default CommentCard