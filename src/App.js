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
        Subscribe to my youtube!
        <a href="https://www.youtube.com/channel/UCgS9qJuRkdTZ1DAGmcSlajA/videos">
          <span role="img" aria-label="heart emoji's">
            🔊
          </span>
          Emmanuel
          <span role="img" aria-label="heart emoji's">
            🔊
          </span>
        </a>
      </footer>
    </div>
  );
}
