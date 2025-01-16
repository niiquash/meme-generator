import { useState, useEffect } from "react";

const Main = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  const getImage = () => {
    const randomIndex = Math.floor(Math.random() * allMemes.length);
    const newMeme = allMemes[randomIndex].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      imageUrl: newMeme,
    }));
  };

  const handleChange = (event) => {
    const { value, name } = event.currentTarget;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  return (
    <main className="main">
      <div className="main__form">
        <label>
          Top text
          <input
            type="text"
            name="topText"
            placeholder="e.g. one does not simply"
            onChange={handleChange}
            value={meme.topText}
          />
        </label>
        <label>
          Bottom text
          <input
            type="text"
            name="bottomText"
            placeholder="e.g. walk into Mordor"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </label>
      </div>

      <button onClick={getImage}>Get a new meme image</button>

      <div className="main__image--container">
        <img src={meme.imageUrl} alt="meme image" className="main__image" />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
};

export default Main;
