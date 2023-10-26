import React from "react";
import "./Meet.css";
import ghost4 from "./assets/ghosts/ghost4.png";

const Meet = () => {
  return (
    <div className="my-component">
      <div className="left-column">
        <p>Built out of frustration</p>
        <h2>Meet the Ahead App</h2>
        <div className="white-circle">
          <img src={ghost4} alt="ghost4" />
        </div>
      </div>
      <div className="right-column">
        <p>
          A personalized pocket coach that provides bite- sized, science-driven
          tools to boost emotional intelligence.
        </p>
        <p>
          Think of it as a pocket cheerleader towards a better, more fulfilling.
        </p>
      </div>
    </div>
  );
};

export default Meet;
