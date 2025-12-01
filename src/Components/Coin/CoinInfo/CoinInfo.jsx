import React, { useState } from 'react'
import './coininfo.css';
import { color } from 'framer-motion';

export default function CoinInfo({heading, desc}) {
  const shortDesc = desc.slice(0,514) + '<p style="color: var(--grey);"> Read more...</p>';;
  const longtDesc = desc + '<p style="color: var(--grey);"> Read less...</p>';;

  const [flag, setFlag] = useState(true);

  return (
    <div className='grey-wrapper'>
        <h2 className='coin-info-heading'>{heading}</h2>
        { desc.length > 500 ?
         <p onClick={()=> setFlag(!flag)} className='coin-info-desc'  
          dangerouslySetInnerHTML={{__html: !flag ? longtDesc : shortDesc}}
        />
        :
        <p className='coin-info-desc'  
          dangerouslySetInnerHTML={{__html: longtDesc}}/>
        }
        
    </div>
  )
}
