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
<div className="card m-2 ms-5 me-5 shadow-sm">
  <div className="card-header">{comment.username}</div>
  <div className="card-body">
    <h5 className="card-title">{comment.comment}</h5>
    <a href="#" onClick={()=> handleClick()} className="btn btn-primary me-1">Likes:{likes}</a>
    <a href="#" onClick={()=> handleDelete()} className="btn btn-danger">🗑</a>
  </div>
</div>
    )

}

export default CommentCard