import { useEffect, useState } from "react";
import "./App.css";

function refreshPage() {
  window.location.reload();
}

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

  return (
    <main>
      <button onClick={refreshPage}>new fact</button>
      {<h1>{fact}</h1>}
    </main>
  );
}

export default App;
