import React, { useEffect, useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import "./backtotop.css"

function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () =>{
            if(window.scrollY > 300) setIsVisible(true);
            else setIsVisible(false)
        };

        window.addEventListener("scroll", handleScroll);
        return ()=> window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = ()=>{
        window.scrollTo({top:0, behavior:"smooth"});
    }

  return (
    <div className='back-to-top-btn' style={{display: isVisible ? "flex" : "none",}}>
      <ArrowUpwardIcon className='upArrow' style={{color: "var(--blue)", fontSize: "1.2rem"}} onClick={scrollToTop} />
    </div>
  )
}

export default BackToTop;
