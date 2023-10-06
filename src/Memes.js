import React, { useState, useEffect } from "react";
import memeData from "./MemesCollection.json";
import { getRandomIndex } from "./utils/random";

function Memes() {
  const [currentMeme, setCurrentMeme] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const getRandomMeme = (index) => {
    const newIndex = getRandomIndex(index, memeData.memes.length);
    const randomMeme = memeData.memes[newIndex];
    import(`.${randomMeme?.path}`).then((imageModule) => {
      setCurrentMeme(imageModule.default);
      setCurrentIndex(newIndex);
    });
  };

  useEffect(() => {
    getRandomMeme();
  }, []);

  return (
    <div className="container">
      <h1 className="heading">
        Contribute to&nbsp;
        <span className="hightlight">Memes Collection</span>
      </h1>
      <h2 className="sub-heading">
        With Your&nbsp;
        <span className="hightlight animate__animated animate__flash animate__slower	animate__infinite">
          First Pull Request
        </span>
      </h2>
      <div className="text-center my-4">
        {currentMeme && (
          <img
            src={currentMeme}
            className="img-fluid rounded-start"
            alt={currentMeme.id}
          />
        )}
      </div>
      <a
        className="button"
        href="#about"
        onClick={() => {
          getRandomMeme(currentIndex);
        }}
      >
        Generate New!
      </a>
    </div>
  );
}

export default Memes;
