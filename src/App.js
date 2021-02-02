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
        <p>mini app series 1/3 </p>
        <a href="https://www.youtube.com/channel/UCgS9qJuRkdTZ1DAGmcSlajA/videos">
          Subscribe to my youtube!
          <span role="img" aria-label="heart emoji's">
            ➡️
          </span>
          Emmanuel
        </a>
      </footer>
    </div>
  );
}
