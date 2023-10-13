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
  const [studio, setStudio] = useState("");
  const [airing, setAiring] = useState(false);
  const [historyList, setHistoryList] = useState([]);
  const [banList, setBanList] = useState([]);

  const fetchAnime = async () => {
    const randomNum = Math.floor(Math.random() * 1000);
    try {
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime/${randomNum}`
      );
      const animeData = response.data.data;
      const animeTitle = animeData.title;
      const animePic = animeData.images.jpg.image_url;
      const animeType = animeData.type;
      const animeSource = animeData.source;
      const animeStudio = animeData.studios
        .map((studio) => studio.name)
        .join(", ");
      const animeAiring = animeData.airing;
      if (animeTitle != null) {
        console.log(animeData, "FOO");
        setTitle(animeTitle);
        setPicture(animePic);
        setType(animeType);
        setSource(animeSource);
        setStudio(animeStudio);
        setAiring(animeAiring);
      } else {
        alert("null found");
      }
    } catch (err) {
      console.error(err);
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
      <BanPanel banList={banList} />
      <div>
        <MainSection
          title={title}
          picture={picture}
          type={type}
          source={source}
          studio={studio}
          airing={airing}
          handleDiscover={handleDiscover}
          handleBanAttr={handleBanAttr}
        />
      </div>
    </>
  );
};

export default App;
