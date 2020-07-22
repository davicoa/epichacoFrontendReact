import React from "react";
import "./style.css";

const Embeds = (props) => {

  const { link, title } = props.embeds;
  return (
    <div className="embeds">
      <div className="embedstitle">
        <h1>{title}</h1>
      </div>
      <div className="embedsbody">
        <iframe scrolling="no"
         className="embedsiframe" src={link}></iframe>
      </div>
    </div>
  );
};

export default Embeds;
