import {NavLink, useNavigate} from "react-router-dom"
import {useState} from "react"

function Navbar(){
    const [activeNav, setActive] = useState("games")
    const navigate = useNavigate()

    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <h2 className="navbar-brand" onClick={()=>{
                        navigate("/")
                        setActive("games")
                        }}>🎮GAME WEBSITE NAME PAGE🎮</h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                to='/'
                                >
                                <h3 onClick={()=> setActive("games")} className={activeNav === "games" ? "nav-link active" : "nav-link"} aria-current="page" >GAMES</h3>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                to='/forums'
                                >
                                <h3 onClick={()=> setActive("forums")} className={activeNav === "forums" ? "nav-link active" : "nav-link"} aria-current="page" >FORUMS</h3>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar