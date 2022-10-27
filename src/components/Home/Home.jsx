import React from "react";
import News from "../News/News.jsx";
import NewsLetter from "../NewsLetter/NewsLetter.jsx";
import Trending from "../Trending/Trending.jsx";
import Intro from "../Intro/Intro";

function Home() {
  return (
    <div className="home">
      <Intro />
      <Trending />
      <News />
      <NewsLetter />
    </div>
  );
}

export default Home;
