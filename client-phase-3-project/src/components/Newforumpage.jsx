import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
function Newforumpage() {
  //Set some initial values for FormData State
  const initVals = {
    question: "",
    game_id: 0,
    username: "",
    date: new Date(),
  };

  //Use navigate and state defined
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initVals);
  const [games, setGames] = useState([]);

  //Function to post the final object of form data
  function postForum(object) {
    fetch("/api/forums/new", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(object),
    })
      .then((r) => r.json())
      .then((data) => console.log(data))
      .then(setFormData(initVals));
  }

  //Function to handle the submit event
  //Posts the forum question then navigates to the forums page
  function onSubmit(e) {
    e.preventDefault();
    postForum(formData);
    // console.log(formData);
    navigate("/forums");
  }

  //Function to handle the change to each value
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // console.log(formData);
  }

  //fetch games and build option for all of them
  useEffect(() => {
    fetch("/api/games")
      .then((r) => r.json())
      .then((data) => {
        setGames(data);
      });
  }, []);
  const gameOptions = games.map((game) => {
    return (
      <option key={game.id} className="dropdown-item" value={game.id}>
        {game.name}
      </option>
    );
  });





  return (
    <form onSubmit={onSubmit}>

      <div className="input-group b-4 p-2">
        <span className="input-group-text">Username</span>
        <input
          required
          minLength={4}
          onChange={handleChange}
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          name="username"
        />
      </div>

      <div className="input-group b-4 p-2">
      <select
        onChange={handleChange}
        required
        name="game_id"
        className="form-select dropdown"
        aria-label="Default select example">
        <option selected disabled hidden>
          Select Game
        </option>
        {gameOptions}
      </select>
      </div>

      <div className="input-group b-4 p-2">
        <span className="input-group-text">Question</span>
        <textarea
          required
          minLength={10}
          name="question"
          onChange={handleChange}
          className="form-control"
          placeholder="Your Question Here"
          aria-label="With textarea"
        ></textarea>
      </div>

      <button className="btn btn-success ms-3" type="submit">Submit</button>
    </form>
  );
}
export default Newforumpage;
