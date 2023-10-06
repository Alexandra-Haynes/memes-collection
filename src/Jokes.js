import React, { useState, useEffect } from "react";
import jokesData from "./JokesCollection.json";
import { getRandomIndex } from "./utils/random";
import "animate.css";

function Jokes() {
  const [currentJoke, setCurrentJoke] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const getRandomJoke = (index) => {
    const newIndex = getRandomIndex(index, jokesData.jokes.length);
    setCurrentJoke(jokesData.jokes[newIndex]);
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    getRandomJoke();
  }, []);

  return (
    <div className="container">
      <h1 className="heading">
        Contribute to&nbsp;
        <span className="hightlight">Jokes Collection</span>
      </h1>
      <h2 className="sub-heading">
        With Your&nbsp;
        <span className="hightlight animate__animated animate__flash animate__slower	animate__infinite">
          First Pull Request
        </span>
      </h2>

      <div className="card my-4">
        <div className="card-header">Random Joke</div>
        <div className="card-body">
          {currentJoke ? (
            <blockquote className="blockquote mb-0">
              <p>{currentJoke["joke"]}</p>
              <footer className="blockquote-footer">
                By:
                <cite title="Source Title">{currentJoke["contributor"]}</cite>
              </footer>
            </blockquote>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <a
        className="button"
        href="#about"
        onClick={() => getRandomJoke(currentIndex)}
      >
        Generate New!
      </a>
    </div>
  );
}

export default Jokes;
