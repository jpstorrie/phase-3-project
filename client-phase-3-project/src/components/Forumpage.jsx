import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import CommentCard from './Commentcard'

function Forumpage(){
    const [question, setQuestion] = useState({})
    const [comments, setComments] = useState([])
    const params = useParams()

    useEffect(() =>{
        fetch(`/api/forums/${params.id}`)
        .then(r => r.json())
        .then(data => {
        setQuestion(data[0])
        setComments(data[1])
        })
    },[params.id])

    const eachComment = comments.map(comment => <CommentCard key={comment.id} comment={comment} />)

        // console.log(comments)
    return(
        <div>
        <h1>{question.username}</h1>
        <h1>{question.question}</h1>
        <h1>{question.date}</h1>
        {eachComment}
        </div>
    )
}
export default Forumpage