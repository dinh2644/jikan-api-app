import React, { useState } from "react";

const HistoryPanel = ({ seenImg, seenTitle, historyList }) => {
  return (
    <>
      <div className={`side-panel ${historyList.length > 1 ? "open" : ""}`}>
        <h1>History</h1>
        <ul className="nav flex-column">
          {historyList.map((item, index) => (
            <div key={index}>
              <li className="nav-item">
                <img src={item.picture} alt="" className="seenImg" />
              </li>
              <li className="nav-item mb-4">{item.title}</li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HistoryPanel;
