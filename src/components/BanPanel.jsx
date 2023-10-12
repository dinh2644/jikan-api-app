import React, { useState } from "react";

const BanPanel = ({ banList }) => {
  return (
    <>
      <div className={`right-side-panel ${banList.length > 1 ? "open" : ""}`}>
        <h1>Ban list</h1>
        <ul className="nav flex-column">
          {banList.map((item, index) => (
            <div key={index}>
              <li className="nav-item">
                <button>{item.type}</button>
                <button>{item.source}</button>
                <button>{item.studio}</button>
                <button>{item.airing}</button>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BanPanel;
