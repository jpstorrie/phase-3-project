import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forumpage from "./components/Forumpage";
import Forums from "./components/Forums";
import Gamepage from "./components/Gamepage";
import Games from "./components/Games";
import Navbar from "./components/Navbar";
import Newforumpage from "./components/Newforumpage";
import Newgameform from "./components/Newgameform";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Games />} />
          <Route exact path="/game/:id" element={<Gamepage />} />
          <Route exact path="/forums" element={<Forums />} />
          <Route exact path="/forums/:id" element={<Forumpage />} />
          <Route exact path="/forums/new" element={<Newforumpage />} />
          <Route exact path="/game/new" element={<Newgameform />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
