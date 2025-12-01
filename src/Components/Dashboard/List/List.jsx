import React from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import "./list.css";
import { Tooltip } from "@mui/material";
import ConvertNumber from "../../../Functions/ConvertNumber";
import { Link } from "react-router-dom";

export default function List({ coin }) {
  return (
    <Link to={`/coin/${coin.id}`}>

    <tr className="list-row">
      <Tooltip title="Coin Logo" placement="bottom-start">
        <td className="td-image">
          <img className="coin-logo" src={coin.image} alt="coin-logo" />
        </td>
      </Tooltip>
      <Tooltip title="Coin Name" placement="bottom-start">
        <td>
          <div className="name-col">
            <p className="coin-symbol td_coin_symbol">{coin.symbol}</p>
            <p className="coin-name td_coin_name">{coin.name}</p>
          </div>
        </td>
      </Tooltip>
      <Tooltip title="24Hrs price Change" placement="bottom-start">
        {coin.price_change_percentage_24h > 0 ? (
          <td className="chip-flex">
            <div className="price-chip td_price_chip">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip td-icon">
              <TrendingUpIcon />
            </div>
          </td>
        ) : (
          <td className="chip-flex">
            <div className="price-chip chip-red td_price_chip">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip chip-red td-icon">
              <TrendingDownIcon />
            </div>
          </td>
        )}
      </Tooltip>

      <Tooltip title="Current Price" placement="bottom-start">
        <td>
          <h3
            className="coin-price td_coin_price"
            style={{
              color:
                coin.price_change_percentage_24h < 0
                  ? "var(--red)"
                  : "var(--green)",
            }}
          >
            ${coin.current_price.toLocaleString()}
          </h3>
        </td>
      </Tooltip>

      <Tooltip title="Today High" placement="bottom-start">
        <td className="desktop_td_high">
          <p className="today-high ">${coin.high_24h? coin.high_24h.toLocaleString() : "N/A"}</p>
        </td>
      </Tooltip>
      <Tooltip title="Today High" placement="bottom-start">
        <td className="mobile_td_high">
          <p className="today-high">${coin.high_24h ? ConvertNumber(coin.high_24h) : "N/A"}</p>
        </td>
      </Tooltip>

      <Tooltip title="Today Low" placement="bottom-start">
        <td className="desktop_td_low">
          <p className="today-low">${coin.low_24h ? coin.low_24h.toLocaleString(): "N/A"}</p>
        </td>
      </Tooltip>
      <Tooltip title="Today Low" placement="bottom-start">
        <td className="mobile_td_low">
          <p className="today-low">${coin.low_24h ? ConvertNumber(coin.low_24h): "N/A"}</p>
        </td>
      </Tooltip>

      <Tooltip title="Market Cap" placement="bottom-start">
        <td className="desktop_td_mktcap">
          <p className="market-cap">${coin.market_cap ? coin.market_cap.toLocaleString(): "N/A"}</p>
        </td>
      </Tooltip>
      <Tooltip title="Market Cap" placement="bottom-start">
        <td className="mobile_td_mktcap">
          <p className="market-cap">${coin.market_cap? ConvertNumber(coin.market_cap) : "N/A"}</p>
        </td>
      </Tooltip>
    </tr>
    </Link>
  );
}
