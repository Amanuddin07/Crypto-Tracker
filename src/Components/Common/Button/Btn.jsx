import React from 'react'
import './button.css'

function Btn({text, onClick, outlined}) {
  return (
    <div className={outlined ? 'outlined-btn' :'btn'} onClick={() => onClick()}>
      {text}
    </div>
  )
}

export default Btn;
