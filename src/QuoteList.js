import React, { useState } from "react";
import Quote from "./Quote";
import "./styles.css";

const QuoteList = () => {
  const [quote, setQuote] = useState([
    {
      text: '"😂😂 I like edibles too"',
      meme: "https://media.giphy.com/media/kcAhI6IZKTWiQ/giphy.gif",
      id: 1
    },
    {
      text: '"Drink... Smoke"',
      meme: "https://media.giphy.com/media/2Y8Iq3xe121Ba3hUAM/giphy.gif",
      id: 2
    },
    {
      text: '"Smoking and drinking is both a hobby and passion 😂"',
      meme: "https://media.giphy.com/media/kf4qoHRDvbAoE/giphy.gif",
      id: 3
    },
    {
      text:
        '"I enjoy the process of rolling a blunt, Breaking down the weed, Rolling Up, And actually sparking that motherfucker up"',
      meme: "https://media.giphy.com/media/tqHbKmHlg9jdDI1KnK/giphy.gif",
      id: 4
    },
    {
      text: '"Yes I could roll anything"',
      meme: "https://media.giphy.com/media/LScdfplGpAmpf5QVVN/giphy.gif",
      id: 5
    },
    {
      text: '"I been crown KING Roller"',
      meme: "https://media.giphy.com/media/3o7btXkbsV26U95Uly/giphy.gif",
      id: 6
    },
    {
      text: '"And wake up anywhere from 5ish to 7ish"',
      meme: "https://media.giphy.com/media/b6iVj3IM54Abm/giphy.gif",
      id: 7
    }
  ]);

  const [displayQuote, setDisplayQuote] = useState();

  function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
  }

  function fetchRandomQuote() {
    let index = getRandomNumber(0, quote.length - 1);
    setDisplayQuote(quote[index]);
    return quote[index];
  }

  return (
    <div className="container">
      <div className="quote">
        {displayQuote && (
          <Quote
            text={displayQuote.text}
            meme={displayQuote.meme}
            key={displayQuote.id}
          />
        )}
      </div>
      <div className="btn">
      <button onClick={fetchRandomQuote}>
        <span role="img" aria-label="heart emoji's">
          😈
        </span>
        Generate Quote
      </button>
      </div>
    </div>
  );
};

export default QuoteList;
