import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './SelectDays.css';

export default function SelectDays({days, handleDays, noPTag}) {

  return (
    <div className='select-days'>
        {!noPTag && <p>Price change in </p>}
        <Select 
        className='select'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="Days"
          onChange={handleDays}
        >
          <MenuItem value={7}>7 Days</MenuItem>
          <MenuItem value={30}>30 Days</MenuItem>
          <MenuItem value={60}>60 Days</MenuItem>
          <MenuItem value={90}>90 Days</MenuItem>
          <MenuItem value={180}>180 Days</MenuItem>
          <MenuItem value={365}>1 Year</MenuItem>
        </Select>
    </div>
  );
}
