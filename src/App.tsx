import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [fact, setFact] = useState(null);
  useEffect(() => {
    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setFact(data.text);
      })
      .catch((error) => console.log(error));
  }, []);

  return <>{<h1>{fact}</h1>}</>;
}

export default App;
