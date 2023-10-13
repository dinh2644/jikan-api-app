import React, { useState } from "react";

const BanPanel = ({ banList }) => {
  return (
    <>
      <div className={`right-side-panel ${banList.length != [] ? "open" : ""}`}>
        <h1>Ban list</h1>
        <ul className="nav flex-column">
          {banList.map((item, index) => (
            <div key={index}>
              <li className="nav-item">
                <button>{String(item.value)}</button>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BanPanel;
