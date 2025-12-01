import React from 'react'
import './grid.css';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { Link } from 'react-router-dom';

export default function Grid({coin}) {
  return (
    <Link to={`/coin/${coin.id}`}>
    <div className={`grid-container ${coin.price_change_percentage_24h < 0 && "grid-container-red"}`}>
      <div className="info-flex">
        <img className="coin-logo" src={coin.image} alt="coin-logo" />
        <div className="name-col">
          <p className="coin-symbol">{coin.symbol}</p>
          <p className="coin-name">{coin.name}</p>
        </div>
      </div>

      {coin.price_change_percentage_24h > 0 ? (
        <div className="chip-flex">
            <div className="price-chip">{coin.price_change_percentage_24h.toFixed(2)}%</div>
            <div className='icon-chip'><TrendingUpIcon className='tredingIcon' /></div>
        </div>
      ) : (
        <div className="chip-flex">
            <div className="price-chip chip-red">{coin.price_change_percentage_24h.toFixed(2)}%</div>
            <div className='icon-chip chip-red'><TrendingDownIcon className='tredingIcon' /></div>
        </div>
      )}

      <div className="info-container">
        <h3 className='coin-price' style={{color: coin.price_change_percentage_24h < 0 ? "var(--red)" : "var(--green)"}}>${coin.current_price.toLocaleString()}</h3>
        <p className='today-high'>24h High: ${coin.high_24h.toLocaleString()}</p>
        <p className='today-low'>24h Low: ${coin.low_24h.toLocaleString()}</p>
        <p className='market-cap'>Market Cap: ${coin.market_cap.toLocaleString()}</p>
      </div>
      
    </div>
    </Link>
  );
}
