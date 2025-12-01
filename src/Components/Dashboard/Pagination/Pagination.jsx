import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import "./pagination.css";

export default function PaginationComponent({page = 1, handleChange}) {
  

  return (
    <div className='pagination_comp'>
      <Pagination count={10} page={page} onChange={(event,value) => handleChange(event, value)} 
      sx={{
        color: "var(--white)",
        "& .Mui-selected" : {
            backgroundColor: "var(--blue) !important",
            color: "#fff !important",
            borderColor: "var(--blue) !important"
        },
        "& .MuiPagination-ellipsis" : {
            border: "0px solid var(--gery) !important",
        },
        "& .MuiPaginationItem-text" : {
            color: "var(--white)",
            border: "1px solid var(--grey) !important"
        },
      }}/>
    </div>
  );
}
