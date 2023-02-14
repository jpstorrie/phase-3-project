
function Newgameform(){


    function handleSubmit(e){
        e.preventDefault()
        console.log('submitted!')

        const platforms = []
        e.target.xbox.checked ? platforms.push("xbox") : platforms;
        e.target.playstation.checked ? platforms.push("playstation") : platforms;
        e.target.switch.checked ? platforms.push("switch") : platforms;
        e.target.pc.checked ? platforms.push("pc") : platforms;
        const platformString = platforms.join(", ")

        const genres = []
        e.target.fps.checked ? genres.push("fps") : genres;
        e.target.action.checked ? genres.push("action") : genres;
        e.target.adventure.checked ? genres.push("adventure") : genres;
        e.target.fps.checked ? genres.push("fps") : genres;
        e.target.fps.checked ? genres.push("fps") : genres;
        e.target.fps.checked ? genres.push("fps") : genres;
        e.target.fps.checked ? genres.push("fps") : genres;
        e.target.fps.checked ? genres.push("fps") : genres;
        

        const gameNew = {
            name: e.target.name.value,
            story: e.target.story.value,
            image: e.target.image.value,
            bio: e.target.bio.value,
            release_year: e.target.year.value,
            platforms: platformString,

        }
        console.log(gameNew)
    }

    return(
    <>
        <h1>NEW GAME</h1>
        <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1" >Name</span>
            <input type="text" className="form-control" placeholder="Name"  aria-describedby="basic-addon1" name="name"/>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon2">Release year</span>
            <input type="integer" className="form-control" placeholder="yyyy"  aria-describedby="basic-addon1" name="year"/>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">Image</span>
            <input type="text" className="form-control" placeholder="url"  aria-describedby="basic-addon1" name="image"/>
        </div>

        <div className="input-group">
            <span className="input-group-text">Bio</span>
            <textarea className="form-control" aria-label="With textarea" name="bio"></textarea>
        </div>
        <br></br>
        <div className="input-group">
            <span className="input-group-text">Story</span>
            <textarea className="form-control" aria-label="With textarea" name="story"></textarea>
        </div>
        <br></br>
        <h2>Platform</h2>
        <h6>Check all that apply.</h6>
        <input type="checkbox" className="btn-check" id="btn-check-outlined" autocomplete="off" name="xbox" />
        <label className="btn btn-outline-primary" for="btn-check-outlined" >XBOX</label>
        
        <input type="checkbox" className="btn-check" id="btn-check-2-outlined" autocomplete="off" name="playstation"/>
        <label className="btn btn-outline-primary" for="btn-check-2-outlined">PLAYSTAION</label>
        
        <input type="checkbox" className="btn-check" id="btn-check-3-outlined" autocomplete="off" name="switch"/>
        <label className="btn btn-outline-primary" for="btn-check-3-outlined">SWITCH</label>

        <input type="checkbox" className="btn-check" id="btn-check-4-outlined" autocomplete="off" name="pc"/>
        <label className="btn btn-outline-primary" for="btn-check-4-outlined">PC</label>
        
        <br></br>
        <h2>Genre</h2>
        <h6>Check all that apply.</h6>
        <input type="checkbox" className="btn-check" id="btn-check-5-outlined" autocomplete="off" name="fps" />
        <label className="btn btn-outline-primary" for="btn-check-5-outlined">FPS</label>
        
        <input type="checkbox" className="btn-check" id="btn-check-6-outlined" autocomplete="off" name="action"/>
        <label className="btn btn-outline-primary" for="btn-check-6-outlined">ACTION</label>
        
        <input type="checkbox" className="btn-check" id="btn-check-7-outlined" autocomplete="off" name="adventure"/>
        <label className="btn btn-outline-primary" for="btn-check-7-outlined">ADVENTURE</label>

        <input type="checkbox" className="btn-check" id="btn-check-8-outlined" autocomplete="off" name="rts"/>
        <label className="btn btn-outline-primary" for="btn-check-8-outlined">RTS</label>
        
        <input type="checkbox" className="btn-check" id="btn-check-9-outlined" autocomplete="off" name="turn-based"/>
        <label className="btn btn-outline-primary" for="btn-check-9-outlined">TURN-BASED</label>
        <br></br>
        <input type="checkbox" className="btn-check" id="btn-check-10-outlined" autocomplete="off" name="open world"/>
        <label className="btn btn-outline-primary" for="btn-check-10-outlined">OPEN WORLD</label>

        <input type="checkbox" className="btn-check" id="btn-check-11-outlined" autocomplete="off" name="rpg"/>
        <label className="btn btn-outline-primary" for="btn-check-11-outlined">RPG</label>

        <input type="checkbox" className="btn-check" id="btn-check-12-outlined" autocomplete="off" name="horror"/>
        <label className="btn btn-outline-primary" for="btn-check-12-outlined">HORROR</label>

        <input type="checkbox" className="btn-check" id="btn-check-13-outlined" autocomplete="off" name="multiplayer"/>
        <label className="btn btn-outline-primary" for="btn-check-13-outlined">Multiplayer</label>

        <br></br>
        <br></br>
        <br></br>
        <button>submit</button>
        <br></br>
        <br></br>
        <br></br>
        </form>
    </>
    )
}
export default Newgameform