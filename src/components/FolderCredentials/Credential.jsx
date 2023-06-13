import React from "react";
import Data from "./Data";
import "./Credential.css";

const Credential = () => {
  return (
    <div className="credential">
      {Data.map((item) => (
        <div key={item.title}>
          <img src={item.image} alt={item.title} className="image" />
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Credential;
