import React from "react";

const Main = () => {
  return (
    <main className="main">
      <div className="main__form">
        <label>
          Top text
          <input
            type="text"
            name="top-text"
            id="top-text"
            placeholder="One cannot simply"
          />
        </label>
        <label>
          Bottom text
          <input
            type="text"
            name="bottom-text"
            id="bottom-text"
            placeholder="Walk into Mordor"
          />
        </label>
      </div>

      <button>Get a new meme image</button>

      <div className="main__image--container">
        <img
          src="http://i.imgflip.com/1bij.jpg"
          alt="meme image"
          className="main__image"
        />
        <span className="top">One does not simply</span>
        <span className="bottom">Walk into Mordor</span>
      </div>
    </main>
  );
};

export default Main;
