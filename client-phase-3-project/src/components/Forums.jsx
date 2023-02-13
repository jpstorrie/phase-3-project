import { useEffect, useState } from "react"

function Forums(){

    const [formQuestions, setFormQuestions] = useState([])


    // Fetch all questions and set the state of formQuestions
    useEffect(()=> {
        fetch("/api/forums")
        .then(r => r.json())
        .then(data => setFormQuestions(data))
    }, [])


    // Iterate through all the questions and display the question
    // and its details
    const questionIterations = formQuestions.forEach(question =>
        <div>
            <h3>{question.question}</h3>
            <h5>{question.username}</h5>
            <p>{question.date}</p>
        </div>
    )

    // Forum.create(game_id: Game.first.id,username: "Pickles", question: "Why mirage sad?", date: DateTime.now)

    return (
        <div>
        <h1>Forums</h1>
        {questionIterations}
        </div>
    )
}
export default Forums