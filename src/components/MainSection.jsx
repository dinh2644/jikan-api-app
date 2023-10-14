import React, { useState } from "react";

const MainSection = ({
  title,
  picture,
  type,
  source,
  rating,
  handleDiscover,
  handleBanAttr,
}) => {
  return (
    <>
      <div className={`container ${title ? null : "startmenu"}`}>
        <div className="box">
          {title ? (
            <>
              <div className="row attributes mb-5 mt-4">
                <div className="col">
                  <h2>Type</h2>
                  <button onClick={() => handleBanAttr(type)}>{type}</button>
                </div>
                <div className="col">
                  <h2>Source</h2>
                  <button onClick={() => handleBanAttr(source)}>
                    {source}
                  </button>
                </div>
                <div className="col">
                  <h2>Rating</h2>
                  <button onClick={() => handleBanAttr(rating)}>
                    {rating}
                  </button>
                </div>
              </div>

              <div className="spotLightPic">
                <img src={picture} alt="" />
              </div>
              <h2 className="spotLightTitle mt-3">{title}</h2>
            </>
          ) : null}
          <div className="row mt-5">
            <div className="col discover">
              <button className="btn discoverBtn mb-3" onClick={handleDiscover}>
                🔀 Discover
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
