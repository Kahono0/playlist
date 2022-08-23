import { useState } from 'react';
import './App.css';

const musicp = [
  {
    title: "The Sign5",
    artist: "Ace of Base",
  },
  {
    title: "The Sign1",
    artist: "Ace of Base",
  },
  {
    title: "The Sign0",
    artist: "Ace of Base",
  }
]

const Listl = (props) => {
  return (
    props.musics.map((item) => {
      return (
        <div className="list">
          <li key={item.title}>{item.title}</li>
          <li key={item.title}>{item.artist}</li>
        </div>
      );
    })

  );
}

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

const Add = () => {
  const [music, setMusic] = useState([]);
  const [add, setAdd] = useState(false);


  const addMusic = (e) => {
    e.preventDefault();
    console.log(e.target.title.value);
    console.log(e.target.artist.value);
    musicp.push({
      title: e.target.title.value,
      artist: e.target.artist.value
    });
    setMusic(music => [...musicp]);
    setAdd(!add);
    e.target.reset();
  }
  return (
    <>
      <div className="list-container">
        <Listl musics={music} />
      </div>
      <div className="add-container">
        <buton className="button" onClick={() => setAdd(!add)}>Add</buton>
      </div>
      {add && <div className="add">
        <form onSubmit={addMusic}>
          <input type="text" name="title" placeholder="Title" />
          <input type="text" name="artist" placeholder="Artist" /><br/>
          <input type="submit" value="Add" />
        </form>
      </div>
      }
    </>
  );
}




function App() {
  return (
    <div className="App">
      <Head />
      <h2>Your Playlist:</h2>
      <div className="list-container">
      </div>
      <Add />
    </div>
  );
}

export default App;
