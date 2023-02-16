import { useEffect, useState } from "react"
import FormQuestion from "./Forumquestion"
import {NavLink} from "react-router-dom"


function Forums(){

    const [formQuestions, setFormQuestions] = useState([])
    const [search, setSearch] = useState("")
    // const navigate = useNavigate()


    // Fetch all questions and set the state of formQuestions
    useEffect(()=> {
        fetch("/api/forums")
        .then(r => r.json())
        .then(data => setFormQuestions(data))
    }, [])

    function handleChange(e){
        setSearch(e.target.value)
    }

    const filteredQuestions = formQuestions.filter(question => {
        if (question.question.toLowerCase().includes(search.toLowerCase()) || question.username.toLowerCase().includes(search.toLowerCase())){
            return question.question
        }
    })

    // Iterate through all the questions and display the question
    // and its details
    const questionIterations = filteredQuestions.map(question =>
        <FormQuestion key={question.id} question={question} />
    )

    return (
        <div className="mx-2">
        <h1 className="m-1">FORUMS</h1>
        <input onChange={handleChange} className="input-group-text mx-2" type="search" placeholder="Search" aria-label="Search" />
        <NavLink to="/forums/new" className="m-3" >+Ask a Question</NavLink>
        {questionIterations}
        </div>
    )
}
export default Forums