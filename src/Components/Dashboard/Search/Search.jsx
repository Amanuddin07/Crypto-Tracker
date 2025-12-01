import React, { useState } from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import "./search.css";

export default function Search({search, onSearchChange}) {
  return (
    <div className='search-flex'>
      <SearchRoundedIcon />
      <input type="text" placeholder='Search' value={search} onChange={(e) => onSearchChange(e)} />
    </div>
  )
}
