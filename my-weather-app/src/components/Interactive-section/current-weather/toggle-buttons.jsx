import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { Icon } from '@iconify/react';

export default function ToggleButtons() {
  const [alignment, setAlignment] = useState('left');

  const [bgColor, setColor] = useState(true)

  const handleAlignment = (newAlignment) => {
    setAlignment(newAlignment);
    setColor(!bgColor)

  };

  const ButtonToggleGroup = styled(ToggleButtonGroup)({
    '&.MuiToggleButtonGroup-root .MuiToggleButtonGroup-grouped': {
      borderRadius: '50%',
      borderLeft: '2px solid white'
    },
    '&.MuiToggleButtonGroup-root .MuiToggleButtonGroup-grouped.Mui-selected': {
      borderLeft: '3px solid white'
    },
    display: 'flex',
    // alignItems: 'stretch',
    justifyContent: 'center',
  })


  return (

    <ButtonToggleGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"

    >
      <ToggleButton value="humedad" aria-label="humedad" sx={{ border: '2px solid white', m: 3 }}>
        <Icon icon="fontisto:blood-drop" color={'white'} height="30" width='30' />
      </ToggleButton>

      <ToggleButton value="viento" aria-label="viento" sx={{ border: '2px solid white', m: 3 }}>
        <Icon icon="mdi:weather-windy" color="white" height="30" />

      </ToggleButton>
      <ToggleButton value="uv" aria-label="uv" sx={{ border: '2px solid white', m: 3 }}>
        <Icon icon="carbon:uv-index-alt" color="white" height='30' />

      </ToggleButton>
      <ToggleButton value="sol" aria-label="sol" sx={{ border: '2px solid white', m: 3 }}>
        <Icon icon="mi:sunrise-alt" color="white" height="30" />
      </ToggleButton>
      
    </ButtonToggleGroup >


  );
}
