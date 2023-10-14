import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import "./assets/css/main.scss";
import "./assets/css/sidePanel.scss";
import axios from "axios";
import MainSection from "./components/MainSection";
import "bootstrap/dist/css/bootstrap.min.css";
import HistoryPanel from "./components/HistoryPanel";
import BanPanel from "./components/BanPanel";

const App = () => {
  const [title, setTitle] = useState("");
  const [picture, setPicture] = useState("");
  const [type, setType] = useState("");
  const [source, setSource] = useState("");
  const [rating, setRating] = useState(false);
  const [historyList, setHistoryList] = useState([]);
  const [banList, setBanList] = useState([]);

  const fetchAnime = async () => {
    let validData = null;
    while (!validData) {
      try {
        const randomNum = Math.floor(Math.random() * 10000) + 1;
        const response = await axios.get(
          `https://api.jikan.moe/v4/anime/${randomNum}`
        );
        const animeData = response.data.data;
        if (
          animeData &&
          animeData.title &&
          animeData.images &&
          animeData.images.jpg &&
          animeData.images.jpg.image_url &&
          animeData.type &&
          animeData.source &&
          animeData.rating
        ) {
          const bannedValues = new Set(banList.map((item) => item.value));

          const filteredData = { ...animeData };
          let containsBannedAttribute = false;

          Object.keys(filteredData).forEach((attr) => {
            if (bannedValues.has(filteredData[attr])) {
              filteredData[attr] = null;
              containsBannedAttribute = true;
            }
          });

          if (containsBannedAttribute) {
            continue;
          }

          setTitle(filteredData.title);
          setPicture(filteredData.images.jpg.image_url);
          setType(filteredData.type);
          setSource(filteredData.source);
          setRating(filteredData.rating);
          console.log(filteredData);
          validData = animeData;
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleDiscover = (event) => {
    event.preventDefault();
    fetchAnime();
    setHistoryList([...historyList, { title, picture }]);
  };

  const handleBanAttr = (value) => {
    setBanList([...banList, { value }]);
  };

  const handleRemoveBannedAttr = (value) => {
    const updatedBanList = banList.filter((item) => item.value !== value);
    setBanList(updatedBanList);
  };

  return (
    <>
      <header>
        <Header />
      </header>
      <HistoryPanel
        seenImg={picture}
        seenTitle={title}
        historyList={historyList}
      />
      <BanPanel
        banList={banList}
        handleRemoveBannedAttr={handleRemoveBannedAttr}
      />
      <div>
        <MainSection
          title={title}
          picture={picture}
          type={type}
          source={source}
          rating={rating}
          handleDiscover={handleDiscover}
          handleBanAttr={handleBanAttr}
        />
      </div>
    </>
  );
};

export default App;
