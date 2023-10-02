import React, { useState, useEffect, useCallback } from "react";
import memeData from "./MemesCollection.json";

function Memes() {
  const [currentMeme, setCurrentMeme] = useState(null);
  const [prevIndex, setPrevIndex] = useState(null);

  const getRandomMeme = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * memeData["memes"].length);
    if (prevIndex === null) {
      setPrevIndex(randomIndex);
      const randomMeme = memeData["memes"][randomIndex];
      // Use dynamic import to load the image
      import(`.${randomMeme.path}`).then((imageModule) => {
        setCurrentMeme(imageModule.default);
      });
    } else if (prevIndex === randomIndex) {
      getRandomMeme();
    } else if (prevIndex !== randomIndex) {
      setPrevIndex(randomIndex);
      const randomMeme = memeData["memes"][randomIndex];
      // Use dynamic import to load the image
      import(`.${randomMeme.path}`).then((imageModule) => {
        setCurrentMeme(imageModule.default);
      });
    }
  }, [prevIndex]);

  //useEffect to run when the component mounts (intial render)
  useEffect(() => {
    getRandomMeme();
  }, []); //empty dependency array ensures it only runs once

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
      <div className="text-center">
        {currentMeme && (
          <img
            src={currentMeme}
            className="img-fluid rounded-start"
            alt={currentMeme.id}
          />
        )}
      </div>
      <a className="button" href="#about" onClick={getRandomMeme}>
        Generate New!
      </a>
    </div>
  );
}

export default Memes;
