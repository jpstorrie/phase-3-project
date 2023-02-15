import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import CommentCard from './Commentcard'
import CommentForm from './Commentform'

function Forumpage(){
    const [question, setQuestion] = useState({})
    const [comments, setComments] = useState([])
    const [commentFormVis, setFormVis] = useState(false)
    const params = useParams()
    const navigate = useNavigate()


    //get the question and comment data
    useEffect(() =>{
        fetch(`/api/forums/${params.id}`)
        .then(r => r.json())
        .then(data => {
        setQuestion(data[0])
        setComments(data[1])
        })
    },[params.id])


    // Function to delete reviews
    function handleDelete(){
        fetch(`/api/forums/delete/${question.id}`, {
            method: 'DELETE'
        })
        .then(navigate("/forums"))
    }
    
    const eachComment = comments.map(comment => <CommentCard key={comment.id} comment={comment} />)

    return(
        <div>
        <h1>{question.username}</h1>
        <h1>{question.question}</h1>
        <h1>{question.date}</h1>
        <button onClick={()=> setFormVis(!commentFormVis)} >Add Comment</button>
        <button onClick={handleDelete}>DELETE🗑</button>
        {commentFormVis === true ? <CommentForm question={question} setComments={setComments} comments={comments}/> : ""}
        {eachComment}
        </div>
    )
}
export default Forumpage