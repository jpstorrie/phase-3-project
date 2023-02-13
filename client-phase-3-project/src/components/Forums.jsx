import { useEffect, useState } from "react"
import FormQuestion from "./Forumquestion"

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
        // console.log(question)
        <FormQuestion question={question} />
    )

    // Forum.create(game: Game.first.id,username: "Pickles", question: "Why mirage sad?", date: DateTime.now)

    return (
        <div>
        <h1>Forums</h1>
        {questionIterations}
        </div>
    )
}
export default Forums