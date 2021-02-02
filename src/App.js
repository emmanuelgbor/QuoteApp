import React from "react";
import QuoteList from "./QuoteList";
import Nav from "./Nav";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <QuoteList styles={{ maxWidth: "300px" }} />
      <footer style={{ backgroundColor: "#6E4B92", color: "white" }}>
        <p>mini app series 1/? </p>
        <a href="https://www.youtube.com/channel/UCgS9qJuRkdTZ1DAGmcSlajA/videos">
          <span role="img" aria-label="heart emoji's">
          📹
          </span>
          Youtube
        </a>
        <a href="https://github.com/emmanuelgbor/QuoteApp.git">
          <span role="img" aria-label="heart emoji's">
          {" "} 
          </span>
          GitHub
        </a>
        <a href="https://codesandbox.io/s/github/emmanuelgbor/QuoteApp">
          <span role="img" aria-label="heart emoji's">
          {" "} 
          </span>
          CodeSandBox
        </a>
      </footer>
    </div>
  );
}
