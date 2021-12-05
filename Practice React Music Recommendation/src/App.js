import { useState } from "react";
import "./styles.css";

var genre = ["Hiphop", "Classical", "Pop"];
var music = {
  Hiphop: [
    "Eminen (US) [5/5]",
    "KanyeWest (SEOUL) [3/5]",
    "Tupac Shakur (US)[4/5]",
    "Lil Wayne (BRAZIL)[5/5]",
    "Jay-Z [5/5]",
    "Ed Shareen [5/5]"
  ],
  Classical: [
    "M S Subbulakshmi(INDIA) [5/5]",
    "Pandit Bhimsen Joshi (INDIA)[4/5]",
    "Bade Ghulam Ali Khan (INDIA) [5/5]",
    "Lata Mangeshkar (INDIA) [4/5]",
    "All OK [5/5]"
  ],
  Pop: [
    "Ariana Grande (US) [4/5]",
    "Lady Gaga (US) [5/5]",
    "Beyonce (US) [5/5]",
    "Taylor Swift(US) [4/5]",
    "jUstin Beiber(canada) [4/5]"
  ]
};

export default function App() {
  const [recommend, setter] = useState([]);

  function clickHandler(event) {
    var item = event.target.innerText;
    var recommend = music[item];
    setter(recommend);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: "blue", color: "white" }}>
        Music Recommendation
      </h1>
      <h3>Select a genre, so that I can recommend my music</h3>

      <h2>
        {genre.map((item) => {
          return (
            <span key={item} onClick={clickHandler} style={{ padding: "2rem" }}>
              {item}
            </span>
          );
        })}
      </h2>
      <ul>
        {recommend.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
