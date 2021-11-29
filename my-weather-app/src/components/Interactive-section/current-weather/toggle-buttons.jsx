import * as React from 'react';
import OpacityIcon from '@mui/icons-material/Opacity';
import AirIcon from '@mui/icons-material/Air';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const Button = styled(ToggleButton)({
    borderRadius: '50px',   
    display:'flex',
    alignItems: 'stretch',
    justifyContent: 'center', 
    marginBottom: '4em'
  })

  return (
    
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
        
      <ToggleButton value="left" aria-label="left aligned" sx={{ m: 3}}>
        <OpacityIcon sx={{ color: grey[50] }} />

      </ToggleButton>
      <ToggleButton value="center" aria-label="centered" sx={{ m: 3}}>
        <AirIcon sx={{ color: grey[50] }} />

      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned" sx={{ m: 3}}>
        <WbSunnyIcon  sx={{ color: grey[50] }}/>

      </ToggleButton>
      <ToggleButton value="justify" aria-label="justified" sx={{ m: 3}}>
        <Brightness6Icon sx={{ color: grey[50] }} />

      </ToggleButton>
    </ToggleButtonGroup >
    
    
  );
}
