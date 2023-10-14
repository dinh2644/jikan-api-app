import React from "react";

const BanPanel = ({ banList, handleRemoveBannedAttr }) => {
  return (
    <>
      <div className={`right-side-panel ${banList.length != [] ? "open" : ""}`}>
        <h1>Ban list</h1>
        <ul className="nav flex-column">
          {banList.map((item, index) => (
            <div key={index}>
              <li className="nav-item">
                <button
                  className="button-56 mb-3"
                  onClick={() => handleRemoveBannedAttr(item.value)}
                >
                  {item.value}
                </button>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BanPanel;
