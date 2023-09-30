import React from "react";
import Jokes from "./Jokes";
import Memes from "./Memes";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  const theme = {
    colors: {
      heading: "rgb(24,24,29)",
      text: "rgb(24,24,29)",
      white: "#fff",
      black: "#212529",
      helper: "#01b3af",
      bg: "rgb(249 249 255)",
      btn: "rgb(98,84,243)",
      border: "rgba(98,84,243,0.5)",
    }
  };

  return(
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Memes />
        <Jokes />
      </ThemeProvider>
    </>
  )
}

export default App;

/*
const [loadedMemes, setLoadedMemes] = useState([]);
  const [loadedJokes, setLoadedJokes] = useState([]);

  useEffect(() => {
    async function loadMemes() {
      let importedMemes = [];
      const memesContext = require.context(
        "./memes",
        false,
        /\.(png|jpe?g|svg)$/
      );

      for (const path of memesContext.keys()) {
        const meme = await import(`./memes/${path.substring(2)}`);
        importedMemes.push(meme.default);
      }

      setLoadedMemes(importedMemes);
    }

    loadMemes();
  }, []);

  useEffect(() => {
    function loadJokes() {
      const jokesContext = require.context("./jokes", false, /\.js$/);
      const importedJokes = jokesContext
        .keys()
        .map(jokesContext)
        .map((j) => j.default);
      setLoadedJokes(importedJokes);
    }

    loadJokes();
  }, []);

  return (
    <div className="App">
      <h1>Memes Collection</h1>
      {loadedMemes.map((meme, index) => (
        <img
          key={index}
          className="meme-image"
          src={meme}
          alt={`meme-${index}`}
        />
      ))}

      <h2>Jokes Collection</h2>
      {loadedJokes.map((joke, index) => (
        <p key={index}>{joke}</p>
      ))}
    </div>
  );
*/
