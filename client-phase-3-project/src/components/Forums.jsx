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

    // // Function to handle the click on a forum question and get the id
    // function handleFormClick(item) {
    //     <Link to={`/forums/:{item.id}`}>
    //     {/* console.log(item.id) */}
    // }


    // Iterate through all the questions and display the question
    // and its details
    const questionIterations = formQuestions.map(question =>
        <FormQuestion key={question.id} question={question} />
    )

    return (
        <div>
        <h1>Forums</h1>
        {questionIterations}
        </div>
    )
}
export default Forums