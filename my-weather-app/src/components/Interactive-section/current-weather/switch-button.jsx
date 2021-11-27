import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

export default function TempSwitch() {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    console.log(event.target.checked)
  };

  const TempSwitch= styled(Switch)({
  })



  return (
      <TempSwitch  checked={checked}
      onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }}></TempSwitch>
  )

}

  
