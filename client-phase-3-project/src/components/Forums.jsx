import { useEffect, useState } from "react"
import FormQuestion from "./Forumquestion"
import {NavLink} from "react-router-dom"


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
    const questionIterations = formQuestions.map(question =>
        <FormQuestion key={question.id} question={question} />
    )

    return (
        <div>
        <h1>Forums</h1>
        <h5><NavLink to="/forums/new">Ask a Question</NavLink></h5>
        {questionIterations}
        </div>
    )
}
export default Forums