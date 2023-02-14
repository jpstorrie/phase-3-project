
function Newgameform(){
    return(
    <>
        <h1>NEW GAME</h1>
        <form>
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Name</span>
            <input type="text" class="form-control" placeholder="Name"  aria-describedby="basic-addon1"/>
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Release year</span>
            <input type="integer" class="form-control" placeholder="yyyy"  aria-describedby="basic-addon1"/>
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Image</span>
            <input type="text" class="form-control" placeholder="url"  aria-describedby="basic-addon1"/>
        </div>

        <div class="input-group">
            <span class="input-group-text">Bio</span>
            <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>
        <br></br>
        <div class="input-group">
            <span class="input-group-text">Story</span>
            <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>
        <br></br>
        <h2>Platform</h2>
        <h6>Check all that apply.</h6>
        <input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off"/>
        <label class="btn btn-outline-primary" for="btn-check-outlined">XBOX</label>
        
        <input type="checkbox" class="btn-check" id="btn-check-2-outlined" autocomplete="off"/>
        <label class="btn btn-outline-primary" for="btn-check-2-outlined">PLAYSTAION</label>
        
        <input type="checkbox" class="btn-check" id="btn-check-3-outlined" autocomplete="off"/>
        <label class="btn btn-outline-primary" for="btn-check-3-outlined">SWITCH</label>

        <input type="checkbox" class="btn-check" id="btn-check-4-outlined" autocomplete="off"/>
        <label class="btn btn-outline-primary" for="btn-check-4-outlined">PC</label>

        <br></br>
        <h2>Genre</h2>
        <h6>Check all that apply.</h6>
        <input type="checkbox" class="btn-check" id="btn-check-5-outlined" autocomplete="off"/>
        <label class="btn btn-outline-primary" for="btn-check-5-outlined">FPS</label>
        
        <input type="checkbox" class="btn-check" id="btn-check-6-outlined" autocomplete="off"/>
        <label class="btn btn-outline-primary" for="btn-check-6-outlined">ACTION</label>
        
        <input type="checkbox" class="btn-check" id="btn-check-7-outlined" autocomplete="off"/>
        <label class="btn btn-outline-primary" for="btn-check-7-outlined">ADVENTURE</label>

        <input type="checkbox" class="btn-check" id="btn-check-8-outlined" autocomplete="off"/>
        <label class="btn btn-outline-primary" for="btn-check-8-outlined">RTS</label>
        
        <input type="checkbox" class="btn-check" id="btn-check-9-outlined" autocomplete="off"/>
        <label class="btn btn-outline-primary" for="btn-check-9-outlined">TURN-BASED</label>
        <br></br>
        <input type="checkbox" class="btn-check" id="btn-check-10-outlined" autocomplete="off"/>
        <label class="btn btn-outline-primary" for="btn-check-10-outlined">OPEN WORLD</label>

        <input type="checkbox" class="btn-check" id="btn-check-11-outlined" autocomplete="off"/>
        <label class="btn btn-outline-primary" for="btn-check-11-outlined">RPG</label>

        <input type="checkbox" class="btn-check" id="btn-check-12-outlined" autocomplete="off"/>
        <label class="btn btn-outline-primary" for="btn-check-12-outlined">HORROR</label>

        <input type="checkbox" class="btn-check" id="btn-check-13-outlined" autocomplete="off"/>
        <label class="btn btn-outline-primary" for="btn-check-13-outlined">Multiplayer</label>

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