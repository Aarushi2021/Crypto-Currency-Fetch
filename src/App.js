import axios from "axios";
import "./App.css";

import React, { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((res) => {
        console.log(res.data.coins);
        setValue(res.data.coins);
      });
  }, []);

  return (
    <div>
      <div id="heading">
        {" "}
        <h1> Trending Crypto-Currencies</h1>{" "}
      </div>
      <ul>
        <li className="header-row">
          <h2>Coin Logo </h2>
          <h2>Name</h2>
          <h3>ID</h3>
          <h2>Market Cap</h2>
          <h2>PriceUSD</h2>
        </li>
        {value.map((coin, index) => (
          <li key={index}>
            <img src={coin.item.small}/>
            <h2>{coin.item.name}</h2>
            <h3>{coin.item.coin_id}</h3>
            <h2>{coin.item.market_cap_rank}</h2>
            <h2>{coin.item.price_btc}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
