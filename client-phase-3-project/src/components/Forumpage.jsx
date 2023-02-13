import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Forumpage(){
    const [question, setQuestion] = useState({})
    const params = useParams()

    useEffect(() =>{
        fetch(`/api/forums/${params.id}`)
        .then(r => r.json())
        .then(data => setQuestion(data))
    },[params.id])

        console.log(question)
    return(
        <div>
        <h1>{question.username}</h1>
        <h1>{question.question}</h1>
        <h1>{question.date}</h1>
        
        </div>
    )
}
export default Forumpage