import React from "react";
import "./styles.css";

const Quote = (props) => {
  return (
    <div>
      <h2>{props.text}</h2>
      <img src={props.meme} alt=" " style={{maxWidth: "300px"}}/>
    </div>
  );
};

export default Quote;
