import { useState } from 'react';
import './App.css';

const music = [
  {
    title: "The Sign",
    artist: "Ace of Base",
  },
  {
    title: "The Sign",
    artist: "Ace of Base",
  }
]

const Head = () => {
  const [time, setTime] = useState("");
  setInterval(() => {
    if (new Date().getHours() >= 12) {
      setTime("afternoon");
    } else {
      setTime("morning");
    }
  }, 5000);

  let greetings = time === "morning" ? "Good Morning" : "Good Afternoon";
  return (
    <div className="head">
      <h1>{greetings}</h1>
    </div>
  );
}


const List = () => {
  return (
    music.map((item) => {
      return (
        <div className="list">
          <li>{item.title}</li>
          <li>{item.artist}</li>
        </div>
      );
    })
  );
}

function App() {
  return (
    <div className="App">
      <Head />
      <h2>Your Playlist:</h2>
      <div className="list-container">
      <List />
      </div>
    </div>
  );
}

export default App;
