import React, { useState, useEffect } from "react";
import jokesData from "./JokesCollection.json";
import "animate.css";

function Jokes() {
  const [currentJoke, setCurrentJoke] = useState(null);
  const [prevIndex, setPrevIndex] = useState(null);

  const getRandomJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokesData["jokes"].length);
    if (prevIndex === null) {
      setPrevIndex(randomIndex);
      const randomeJoke = jokesData["jokes"][randomIndex];
      setCurrentJoke(randomeJoke);
    } else if (prevIndex === randomIndex) {
      getRandomJoke();
    } else if (prevIndex !== randomIndex) {
      setPrevIndex(randomIndex);
      const randomeJoke = jokesData["jokes"][randomIndex];
      setCurrentJoke(randomeJoke);
    }
  };

  //useEffect to run when the component mounts (intial render)
  useEffect(() => {
    getRandomJoke();
  }, []); //empty dependency array ensures it only runs once

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
          {/*intially currentJoke is net to "null" that is why we have useEffect which will get us a fresh joke when ever the page is intially loaded, but within that instance their must be someting to be displayed on the screen so that is wy we have the given below check operation which checks whether the currentJoke is null or not and works accordingly */}
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
      <a className="button" href="#about" onClick={getRandomJoke}>
        Generate New!
      </a>
    </div>
  );
}

export default Jokes;
