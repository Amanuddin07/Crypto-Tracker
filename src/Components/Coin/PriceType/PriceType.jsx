import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import './pricetype.css';

export default function TogglePriceType({ priceType, handlePriceTypeChange }) {
  

  return (
    <div className='toggle-prices'>
    <ToggleButtonGroup
      value={priceType}
      exclusive
      onChange={handlePriceTypeChange}
      sx={{
        "&.Mui-selected": {
            color: "var(--blue) !important"
        },
        borderColor: "var(--blue)",
        border: "unset !important",
        "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid !important",
            borderColor: "unset",
            color: "var(--blue)"
        },
        "& .MuiToggleButton-standard": {
            color: "var(--blue) !important",
        }
      }}
    >
      <ToggleButton value="prices" aria-label="left aligned">
        Price
      </ToggleButton>
      <ToggleButton value="market_caps" aria-label="centered">
        Market Cap
      </ToggleButton>
      <ToggleButton value="total_volumes" aria-label="right aligned">
        Total Volume
      </ToggleButton>
    </ToggleButtonGroup>
    </div>
  );
}
