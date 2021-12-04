import { useState } from "react";
import "./styles.css";

let name = "Veeresh B V";

var emojiDictionary = {
  "😊": "Smiling Face with Smiling Eyes",
  "🙂": "Slightly Smiling Face",
  "😝": "Squinting Face with Tongue",
  "🤑": "Money-Mouth Face",
  "🤗": "Hugging Face"
};

const emojisweknow = Object.keys(emojiDictionary);

export default function App() {
  const [emojiMeaning, setter] = useState("");

  function inputHandler(event) {
    var userEmoji = event.target.value;
    if (userEmoji in emojiDictionary) {
      setter(emojiDictionary[userEmoji]);
    } else {
      setter("We don't have that emoji meaning in our DataBase");
    }
  }

  function clickHandler(event) {
    var userEmoji = event.target.innerText;
    console.log(userEmoji);
    if (userEmoji in emojiDictionary) {
      setter(emojiDictionary[userEmoji]);
    } else {
      setter("We don't have that emoji meaning in our DataBase");
    }
  }

  return (
    <div className="App">
      <h1>Emoji Pedia</h1>
      <h2 style={{ backgroundColor: "skyblue", fontSize: "2rem" }}>{name}</h2>
      <input onChange={inputHandler} />
      <h3>{emojiMeaning}</h3>

      <ul>
        {emojisweknow.map(function (item) {
          return (
            <li key={item} onClick={clickHandler}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
