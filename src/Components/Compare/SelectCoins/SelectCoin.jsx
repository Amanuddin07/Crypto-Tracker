import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./style.css";
import { get100Coins } from "../../../Functions/get100Coin";

export default function SelectCoin({
  crypto1,
  crypto2,
  setCrypto1,
  setCrypto2,
  handleCoinChange,
}) {
  const [allCoins, setAllCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const style = {
    height: "2.5rem",
    color: "var(--white)",
    border: "1px solid var(--white)",
    borderRadius: "4px",

    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--white)",
    },
    "&:hover fieldset": {
      borderColor: "#3a80e9",
    },
  };

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setIsLoading(true);
    const myCoins = await get100Coins();
    setAllCoins(myCoins);

    if (!crypto1 && myCoins[0]) {
      setCrypto1(myCoins[0].id);
    }

    setIsLoading(false);
  }

  return (
    <div className="coins-flex">
      <p>Crypto 1:</p>
      <Select
        sx={style}
        value={crypto1}
        label="Crypto 1"
        onChange={(e) => handleCoinChange(e, false)}
      >
        {allCoins.filter((coin)=> coin.id!=crypto2).map((coin,i) => (
          <MenuItem key={i} value={coin.id}>
            {coin.name}
          </MenuItem>
        ))}
      </Select>
      <p>Crypto 2:</p>
      <Select
        sx={style}
        value={crypto2}
        label="Crypto 2"
        onChange={(e) => handleCoinChange(e, true)}
      >
        {allCoins.filter((coin)=> coin.id!=crypto1).map((coin,i) => (
          <MenuItem key={i} value={coin.id}>
            {coin.name}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}
