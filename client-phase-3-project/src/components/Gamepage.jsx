import { useEffect,useState } from "react"
import {useParams} from "react-router-dom"


function Gamepage(){
    const [game, setGame] = useState([])

    const params = useParams()

    useEffect(() => {
        fetch(`/api/games/${params.id}`)
        .then(r => r.json())
        .then(game => {
            console.log(game)
        })
    }, [params])



    // useEffect(() => {
    //     fetch(`http://localhost:3000/profile/${params.id}`)
    //     .then(r => r.json())
    //     .then(data => {
    //         setProfile(data)
    //         createPostList(data.posts)
    //     })
    // }, [params.id])
    return(
    <>
    <h1></h1>
    </>
    )
}


export default Gamepage