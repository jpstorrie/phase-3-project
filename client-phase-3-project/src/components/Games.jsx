import { useEffect } from "react";

function Games() {

  useEffect(() => {
    fetch("/api/games")
      .then((r) => r.json())
      .then((data) => console.log(data));
  }, []);

  return <h1>Games Go Here</h1>;
}
export default Games;
